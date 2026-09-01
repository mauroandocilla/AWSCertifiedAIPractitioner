import { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { forceSimulation, forceManyBody, forceLink, forceCenter, forceCollide, forceX, forceY, type SimulationNodeDatum, type SimulationLinkDatum } from 'd3-force';
import { select } from 'd3-selection';
import { zoom, zoomIdentity, type D3ZoomEvent } from 'd3-zoom';
import { glossaryById } from '../glossaryData.ts';
import { parseGlossaryCards, stripHtml } from '../glossaryCards.ts';
import { conceptEdges, type ConceptRelation } from '../conceptGraph.ts';
import { useIsMobile } from '../hooks/useIsMobile.ts';

interface ConceptNode extends SimulationNodeDatum {
  id: string;
  glossId: string;
  cardIndex: number;
  domain: number;
  title: string;
}

interface ConceptLink extends SimulationLinkDatum<ConceptNode> {
  relation: ConceptRelation;
}

// requiere/ejemplo-de have a real direction worth showing as an arrow;
// se-usa-con/contrasta-con are inherently symmetric (A se-usa-con B reads the
// same as B se-usa-con A), so those render as a plain line. This is a
// rendering-time decision, not a data-model split -- conceptGraph.ts only
// stores one edge per relationship either way.
const RELATION_DIRECTED: Record<ConceptRelation, boolean> = {
  requiere: true,
  'ejemplo-de': true,
  'se-usa-con': false,
  'contrasta-con': false,
};

// Builds the node/link arrays d3-force needs from the curated edge list --
// nodes are derived (never stored), looking up title/domain live from
// glossaryData.ts/glossaryCards.ts so this can never drift out of sync with
// the actual glossary content.
function buildGraph(): { nodes: ConceptNode[]; links: ConceptLink[] } {
  const nodesById = new Map<string, ConceptNode>();

  function ensureNode(id: string): ConceptNode | null {
    const existing = nodesById.get(id);
    if (existing) return existing;
    const [glossId, cardIndexStr] = id.split('#');
    const entry = glossaryById[glossId];
    if (!entry) return null;
    const cardIndex = Number(cardIndexStr);
    const card = parseGlossaryCards(entry.html)[cardIndex];
    if (!card) return null;
    const node: ConceptNode = { id, glossId, cardIndex, domain: entry.domain, title: stripHtml(card.titleHtml) };
    nodesById.set(id, node);
    return node;
  }

  const links: ConceptLink[] = [];
  for (const edge of conceptEdges) {
    const a = ensureNode(edge.from);
    const b = ensureNode(edge.to);
    if (!a || !b) continue;
    links.push({ source: a.id, target: b.id, relation: edge.relation });
  }
  return { nodes: [...nodesById.values()], links };
}

export default function ConceptMap() {
  const isMobile = useIsMobile();
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const nodeElsRef = useRef(new Map<string, SVGCircleElement>());
  const labelElsRef = useRef(new Map<string, SVGTextElement>());
  const linkElsRef = useRef(new Map<number, SVGLineElement>());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // Built once -- deliberately not in state, d3-force mutates these node/link
  // objects in place every tick and we read that mutation straight from refs.
  const { nodes, links } = useMemo(() => buildGraph(), []);

  const selected = selectedId ? (nodes.find((n) => n.id === selectedId) ?? null) : null;
  const selectedCard = useMemo(() => {
    if (!selected) return null;
    const entry = glossaryById[selected.glossId];
    return entry ? (parseGlossaryCards(entry.html)[selected.cardIndex] ?? null) : null;
  }, [selected]);

  // The simulation itself: runs entirely outside React's render cycle. Ticks
  // write straight to DOM attributes via refs instead of calling setState --
  // doing this through React for ~300 nodes at 60fps would mean re-rendering
  // the whole tree every frame.
  useEffect(() => {
    const width = svgRef.current?.clientWidth || 800;
    const height = svgRef.current?.clientHeight || 600;

    const sim = forceSimulation<ConceptNode>(nodes)
      .force('charge', forceManyBody().strength(-90))
      .force(
        'link',
        forceLink<ConceptNode, ConceptLink>(links)
          .id((d) => d.id)
          .distance(55),
      )
      .force('center', forceCenter(width / 2, height / 2))
      .force('collide', forceCollide(isMobile ? 26 : 20))
      // The curated graph isn't a single connected blob -- it's dozens of
      // separate clusters (a few dozen isolated pairs/triples plus two large
      // ones). forceCenter only re-centers the *average* position, so with
      // nothing else pulling on them, small clusters drift arbitrarily far
      // from the main mass under pure mutual repulsion -- reading as "some
      // things don't connect to anything" even though within their own
      // cluster they do. A weak per-node pull toward the center keeps every
      // cluster, connected or not, gravitating back toward the middle.
      .force('x', forceX(width / 2).strength(0.03))
      .force('y', forceY(height / 2).strength(0.03));

    function paint() {
      for (const n of nodes) {
        nodeElsRef.current.get(n.id)?.setAttribute('cx', String(n.x ?? 0));
        nodeElsRef.current.get(n.id)?.setAttribute('cy', String(n.y ?? 0));
        const label = labelElsRef.current.get(n.id);
        if (label) {
          label.setAttribute('x', String(n.x ?? 0));
          label.setAttribute('y', String((n.y ?? 0) + 14));
        }
      }
      links.forEach((l, i) => {
        const line = linkElsRef.current.get(i);
        if (!line) return;
        const source = l.source as ConceptNode;
        const target = l.target as ConceptNode;
        line.setAttribute('x1', String(source.x ?? 0));
        line.setAttribute('y1', String(source.y ?? 0));
        line.setAttribute('x2', String(target.x ?? 0));
        line.setAttribute('y2', String(target.y ?? 0));
      });
    }

    // Pre-settle synchronously before the SVG is even visible -- otherwise
    // ~300 nodes visibly fly in from a phyllotaxis starting layout, which
    // reads as broken rather than intentional.
    sim.stop();
    for (let i = 0; i < 300; i++) sim.tick();
    paint();
    setReady(true);

    // Keep simmering at low alpha for a bit after that so the layout still
    // has some give (e.g. reacting to a resize), then let it cool and stop.
    sim.alpha(0.3).alphaDecay(0.05);
    sim.on('tick', paint);
    sim.restart();

    return () => {
      sim.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, links, isMobile]);

  // Pan/zoom -- d3-zoom handles touch (pinch/pan) for free, no separate
  // mobile code path needed here.
  useEffect(() => {
    const svgEl = svgRef.current;
    const g = gRef.current;
    if (!svgEl || !g) return;
    const zoomBehavior = zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 4])
      .on('zoom', (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.setAttribute('transform', event.transform.toString());
      });
    const svgSel = select(svgEl);
    svgSel.call(zoomBehavior);
    if (isMobile) {
      // Start zoomed out enough to see the whole graph before pinching in --
      // otherwise you land on an illegible zoomed-in cluster.
      const width = svgEl.clientWidth || 800;
      const height = svgEl.clientHeight || 600;
      svgSel.call(zoomBehavior.transform, zoomIdentity.translate(width / 2, height / 2).scale(0.5).translate(-width / 2, -height / 2));
    }
    return () => {
      svgSel.on('.zoom', null);
    };
  }, [isMobile]);

  // Mobile hides labels until a node is selected (300 always-on labels at a
  // zoomed-out scale is unreadable clutter) -- but the simulation may have
  // already stopped ticking by the time you select one, so the newly-
  // mounted label needs its position set explicitly here rather than
  // waiting for a tick that might never come.
  useEffect(() => {
    if (!isMobile || !selectedId) return;
    const node = nodes.find((n) => n.id === selectedId);
    const label = labelElsRef.current.get(selectedId);
    if (node && label) {
      label.setAttribute('x', String(node.x ?? 0));
      label.setAttribute('y', String((node.y ?? 0) + 14));
    }
  }, [selectedId, isMobile, nodes]);

  return (
    <div className="concept-map-wrap">
      <svg ref={svgRef} className="concept-map-svg" style={{ opacity: ready ? 1 : 0 }}>
        <defs>
          <marker id="concept-arrow" viewBox="0 0 10 10" refX="16" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" className="concept-arrow-fill" />
          </marker>
        </defs>
        <g ref={gRef}>
          {links.map((l, i) => (
            <line
              key={i}
              ref={(el) => {
                if (el) linkElsRef.current.set(i, el);
              }}
              className={`concept-link rel-${l.relation}`}
              markerEnd={RELATION_DIRECTED[l.relation] ? 'url(#concept-arrow)' : undefined}
            />
          ))}
          {nodes.map((n) => (
            <g key={n.id}>
              <circle
                ref={(el) => {
                  if (el) nodeElsRef.current.set(n.id, el);
                }}
                r={isMobile ? 9 : 6}
                className={selectedId === n.id ? `concept-node d${n.domain} selected` : `concept-node d${n.domain}`}
                onClick={() => setSelectedId(n.id)}
              />
              {(!isMobile || selectedId === n.id) && (
                <text
                  ref={(el) => {
                    if (el) labelElsRef.current.set(n.id, el);
                  }}
                  className="concept-label"
                  onClick={() => setSelectedId(n.id)}
                >
                  {n.title}
                </text>
              )}
            </g>
          ))}
        </g>
      </svg>

      {selected && selectedCard && (
        <div className="concept-panel">
          <button type="button" className="concept-panel-close" onClick={() => setSelectedId(null)} aria-label="Cerrar">
            <X size={14} strokeWidth={2.5} />
          </button>
          <span className="concept-panel-domain">Dominio {selected.domain}</span>
          <h3 dangerouslySetInnerHTML={{ __html: selectedCard.titleHtml }} />
          <div dangerouslySetInnerHTML={{ __html: selectedCard.bodyHtml }} />
        </div>
      )}
    </div>
  );
}
