// Hand-curated by Claude, reading all 69 glossary entries (310 term-cards)
// in full -- see docs/ARCHITECTURE.md for how this feeds ConceptMap.tsx.
// This is a first draft: the goal is real, useful connections for someone
// studying for the exam (especially cross-domain ones a linear read-through
// of the guide wouldn't surface), not maximum edge count. Not every term has
// an edge -- some genuinely stand alone.
import { glossaryById } from './glossaryData.ts';

// `${glossId}#${cardIndex}` -- cardIndex is the zero-based position of that
// term-card within its entry's html, in the same order parseGlossaryCards()
// (glossaryCards.ts) would return them. Kept as a plain string (not a
// branded type) since it's just a lookup key, built and read the same way
// on both ends.
export type ConceptNodeId = string;

export type ConceptRelation = 'requiere' | 'ejemplo-de' | 'se-usa-con' | 'contrasta-con';
// requiere: A depende conceptualmente de B (entender A requiere ya entender B)
// ejemplo-de: A es un caso concreto de B (B es la categoría/técnica general)
// se-usa-con: A y B suelen aparecer o usarse juntos, sin que uno dependa del otro
// contrasta-con: A y B se comparan, se confunden, o son alternativas entre sí

export interface ConceptEdge {
  from: ConceptNodeId;
  to: ConceptNodeId;
  relation: ConceptRelation;
  /** Nota corta opcional para el tooltip del enlace. */
  note?: string;
}

export const conceptEdges: ConceptEdge[] = [
  // ---- Jerarquía IA -> ML -> Deep learning -> GenAI -> IA agéntica ----
  { from: 'gloss-d1-t1-b1#1', to: 'gloss-d1-t1-b1#0', relation: 'requiere' },
  { from: 'gloss-d1-t1-b1#2', to: 'gloss-d1-t1-b1#1', relation: 'requiere' },
  { from: 'gloss-d1-t1-b1#3', to: 'gloss-d1-t1-b1#2', relation: 'requiere', note: 'estructura que usa el deep learning' },
  { from: 'gloss-d1-t1-b1#14', to: 'gloss-d1-t1-b1#2', relation: 'requiere' },
  { from: 'gloss-d1-t1-b1#15', to: 'gloss-d1-t1-b1#14', relation: 'requiere' },
  { from: 'gloss-d1-t1-b2#0', to: 'gloss-d1-t1-b1#15', relation: 'se-usa-con', note: 'compara GenAI reactiva vs. IA agéntica proactiva' },
  { from: 'gloss-d1-t1-b2#0', to: 'gloss-d1-t1-b1#2', relation: 'se-usa-con', note: 'compara ML tradicional vs. deep learning' },

  // ---- Modelo / algoritmo / entrenamiento / inferencia / sesgo-equidad ----
  { from: 'gloss-d1-t1-b1#6', to: 'gloss-d1-t1-b1#7', relation: 'requiere', note: 'el modelo es el resultado de aplicar el algoritmo' },
  { from: 'gloss-d1-t1-b1#8', to: 'gloss-d1-t1-b1#7', relation: 'requiere' },
  { from: 'gloss-d1-t1-b1#9', to: 'gloss-d1-t1-b1#8', relation: 'contrasta-con', note: 'entrenar el modelo vs. usarlo ya entrenado' },
  { from: 'gloss-d1-t1-b1#12', to: 'gloss-d1-t1-b1#8', relation: 'se-usa-con' },
  { from: 'gloss-d1-t1-b1#11', to: 'gloss-d1-t1-b1#10', relation: 'contrasta-con', note: 'sesgo es el problema técnico; equidad, el objetivo' },
  { from: 'gloss-d1-t1-b1#10', to: 'gloss-d4-t1-b1#0', relation: 'se-usa-con', note: 'mismo concepto retomado en IA responsable' },
  { from: 'gloss-d1-t1-b1#11', to: 'gloss-d4-t1-b1#1', relation: 'se-usa-con' },

  // ---- Tipos de inferencia ----
  { from: 'gloss-d1-t1-b3#0', to: 'gloss-d1-t1-b1#9', relation: 'ejemplo-de' },
  { from: 'gloss-d1-t1-b3#1', to: 'gloss-d1-t1-b1#9', relation: 'ejemplo-de' },
  { from: 'gloss-d1-t3-b3#2', to: 'gloss-d1-t1-b3#0', relation: 'se-usa-con', note: 'mismos 4 tipos, aplicados a la API auto-alojada' },

  // ---- Tipos de datos / tipos de aprendizaje ----
  { from: 'gloss-d1-t1-b4#0', to: 'gloss-d1-t1-b5#0', relation: 'requiere', note: 'el supervisado usa datos etiquetados' },
  { from: 'gloss-d1-t1-b4#0', to: 'gloss-d1-t1-b5#1', relation: 'requiere', note: 'el no supervisado usa datos sin etiquetar' },
  { from: 'gloss-d1-t2-b3#0', to: 'gloss-d1-t1-b5#0', relation: 'requiere' },
  { from: 'gloss-d1-t2-b3#1', to: 'gloss-d1-t1-b5#0', relation: 'requiere' },
  { from: 'gloss-d1-t2-b3#2', to: 'gloss-d1-t1-b5#1', relation: 'requiere' },
  { from: 'gloss-d4-t1-b6#2', to: 'gloss-d4-t1-b6#3', relation: 'contrasta-con' },
  { from: 'gloss-d1-t1-b1#12', to: 'gloss-d4-t1-b6#2', relation: 'se-usa-con', note: 'overfitting/underfitting ya se introdujeron aquí' },
  { from: 'gloss-d1-t1-b1#12', to: 'gloss-d4-t1-b6#3', relation: 'se-usa-con' },

  // ---- Cuándo (no) usar ML ----
  { from: 'gloss-d1-t2-b1#1', to: 'gloss-d1-t2-b1#2', relation: 'se-usa-con', note: 'dos formas de aportar valor con ML' },
  { from: 'gloss-d1-t2-b2#0', to: 'gloss-d1-t2-b1#0', relation: 'contrasta-con', note: 'cuándo SÍ vs. cuándo NO conviene ML' },
  { from: 'gloss-d1-t2-b2#1', to: 'gloss-d1-t2-b3#0', relation: 'contrasta-con', note: 'ML predice, no garantiza un resultado exacto' },

  // ---- Aplicaciones reales (referencian términos ya definidos) ----
  { from: 'gloss-d1-t2-b4#0', to: 'gloss-d1-t1-b1#4', relation: 'se-usa-con' },
  { from: 'gloss-d1-t2-b4#1', to: 'gloss-d1-t1-b1#5', relation: 'se-usa-con' },
  { from: 'gloss-d1-t2-b4#7', to: 'gloss-d1-t1-b1#15', relation: 'se-usa-con' },
  { from: 'gloss-d1-t2-b4#2', to: 'gloss-d1-t2-b5#1', relation: 'se-usa-con', note: 'Amazon Transcribe' },
  { from: 'gloss-d1-t2-b4#2', to: 'gloss-d1-t2-b5#5', relation: 'contrasta-con', note: 'Transcribe convierte voz a texto; Polly, lo opuesto' },
  { from: 'gloss-d1-t2-b4#3', to: 'gloss-d2-t1-b2#7', relation: 'se-usa-con', note: 'la GenAI le suma explicaciones en lenguaje natural' },
  { from: 'gloss-d1-t2-b4#6', to: 'gloss-d3-t1-b3#0', relation: 'requiere', note: 'RAG es la técnica detrás de las bases de conocimiento' },

  // ---- Servicios de AWS de IA/ML (D1) ----
  { from: 'gloss-d1-t2-b5#0', to: 'gloss-d1-t3-b4#4', relation: 'se-usa-con' },
  { from: 'gloss-d1-t2-b5#1', to: 'gloss-d1-t2-b5#2', relation: 'se-usa-con', note: 'se integran para subtítulos multilingües' },
  { from: 'gloss-d1-t2-b5#2', to: 'gloss-d1-t2-b5#3', relation: 'se-usa-con', note: 'Translate se integra con Comprehend para analizar el texto traducido' },
  { from: 'gloss-d1-t2-b5#2', to: 'gloss-d1-t2-b5#5', relation: 'se-usa-con', note: 'Translate + Polly para narrar contenido traducido' },

  // ---- ML tradicional vs. FM / pipeline / despliegue ----
  { from: 'gloss-d1-t2-b6#0', to: 'gloss-d4-t2-b1#0', relation: 'se-usa-con', note: 'la explicabilidad es un criterio clave de esta decisión' },
  { from: 'gloss-d1-t3-b2#0', to: 'gloss-d1-t3-b2#1', relation: 'contrasta-con' },
  { from: 'gloss-d1-t3-b3#0', to: 'gloss-d1-t3-b3#1', relation: 'contrasta-con' },
  { from: 'gloss-d1-t3-b3#0', to: 'gloss-d2-t3-b1#0', relation: 'se-usa-con', note: 'Bedrock es el ejemplo de API administrada' },
  { from: 'gloss-d1-t3-b4#0', to: 'gloss-d2-t3-b1#0', relation: 'se-usa-con' },
  { from: 'gloss-d1-t3-b4#4', to: 'gloss-d2-t3-b1#1', relation: 'se-usa-con' },
  { from: 'gloss-d1-t3-b4#2', to: 'gloss-d2-t3-b1#3', relation: 'se-usa-con' },
  { from: 'gloss-d1-t3-b4#3', to: 'gloss-d2-t3-b1#4', relation: 'se-usa-con' },
  { from: 'gloss-d1-t3-b4#1', to: 'gloss-d2-t1-b2#2', relation: 'se-usa-con', note: 'Amazon Q es el ejemplo de AWS de asistente de IA' },
  { from: 'gloss-d1-t3-b4#1', to: 'gloss-d2-t1-b2#4', relation: 'se-usa-con', note: 'Amazon Q Developer' },
  { from: 'gloss-d1-t3-b4#3', to: 'gloss-d2-t1-b2#4', relation: 'se-usa-con', note: 'Kiro' },

  // ---- MLOps ----
  { from: 'gloss-d1-t3-b5#0', to: 'gloss-d1-t3-b5#1', relation: 'se-usa-con' },
  { from: 'gloss-d1-t3-b5#6', to: 'gloss-d1-t3-b5#5', relation: 'requiere', note: 'se reentrena cuando el monitoreo detecta que hace falta' },
  { from: 'gloss-d1-t3-b5#6', to: 'gloss-d1-t3-b5#8', relation: 'se-usa-con', note: 'el drift es la razón técnica del reentrenamiento' },
  { from: 'gloss-d1-t3-b5#8', to: 'gloss-d4-t1-b7#4', relation: 'se-usa-con', note: 'Model Monitor detecta justamente ese drift' },
  { from: 'gloss-d1-t3-b5#7', to: 'gloss-d3-t3-b1#0', relation: 'se-usa-con' },

  // ---- Métricas de modelo y de negocio (D1) ----
  { from: 'gloss-d1-t3-b6#0', to: 'gloss-d1-t3-b6#1', relation: 'contrasta-con' },
  { from: 'gloss-d1-t3-b6#1', to: 'gloss-d1-t3-b6#2', relation: 'contrasta-con' },
  { from: 'gloss-d1-t3-b6#3', to: 'gloss-d1-t3-b6#1', relation: 'requiere' },
  { from: 'gloss-d1-t3-b6#3', to: 'gloss-d1-t3-b6#2', relation: 'requiere' },
  { from: 'gloss-d1-t3-b6#4', to: 'gloss-d1-t3-b6#0', relation: 'contrasta-con', note: 'MSE/RMSE son para regresión; accuracy, para clasificación' },
  { from: 'gloss-d1-t3-b6#5', to: 'gloss-d1-t3-b6#2', relation: 'se-usa-con', note: 'la curva ROC grafica recall contra falsos positivos' },
  { from: 'gloss-d1-t3-b6#6', to: 'gloss-d1-t3-b6#9', relation: 'se-usa-con' },
  { from: 'gloss-d1-t3-b6#7', to: 'gloss-d1-t3-b6#9', relation: 'se-usa-con' },
  { from: 'gloss-d1-t3-b6#9', to: 'gloss-d2-t2-b4#1', relation: 'se-usa-con', note: 'mismo concepto, aplicado a GenAI' },
  { from: 'gloss-d1-t3-b6#6', to: 'gloss-d2-t2-b4#4', relation: 'contrasta-con', note: 'costo por usuario vs. ingreso por usuario' },

  // ---- Fundamentos de GenAI: tokens/chunking/embeddings/vectores ----
  { from: 'gloss-d2-t1-b1#1', to: 'gloss-d2-t1-b1#2', relation: 'requiere', note: 'el chunking prepara el texto antes de convertirlo en embeddings' },
  { from: 'gloss-d2-t1-b1#2', to: 'gloss-d2-t1-b1#3', relation: 'requiere', note: 'un embedding se representa como un vector' },
  { from: 'gloss-d2-t1-b1#2', to: 'gloss-d3-t1-b3#0', relation: 'se-usa-con', note: 'RAG recupera contexto comparando embeddings' },
  { from: 'gloss-d2-t1-b1#1', to: 'gloss-d3-t1-b3#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b1#3', to: 'gloss-d3-t1-b4#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b1#3', to: 'gloss-d3-t1-b4#1', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b1#4', to: 'gloss-d3-t2-b1#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b1#4', to: 'gloss-d3-t2-b2#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b1#0', to: 'gloss-d2-t1-b4#0', relation: 'se-usa-con', note: 'AWS cobra por estos tokens' },
  { from: 'gloss-d2-t1-b1#5', to: 'gloss-d1-t1-b1#13', relation: 'requiere' },
  { from: 'gloss-d2-t1-b1#6', to: 'gloss-d1-t2-b6#0', relation: 'contrasta-con', note: 'foundation models vs. ML tradicional' },
  { from: 'gloss-d2-t1-b1#7', to: 'gloss-d2-t1-b1#6', relation: 'ejemplo-de' },
  { from: 'gloss-d2-t1-b1#8', to: 'gloss-d2-t1-b2#0', relation: 'se-usa-con', note: 'los modelos de difusión son la técnica detrás de esta generación' },

  // ---- Casos de uso de GenAI ----
  { from: 'gloss-d2-t1-b2#1', to: 'gloss-d2-t2-b2#0', relation: 'se-usa-con', note: 'el resumen es muy sensible a alucinaciones si no se controla' },
  { from: 'gloss-d2-t1-b2#5', to: 'gloss-d3-t1-b6#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b2#6', to: 'gloss-d2-t1-b1#2', relation: 'requiere' },
  { from: 'gloss-d2-t1-b2#6', to: 'gloss-d3-t1-b3#0', relation: 'se-usa-con' },

  // ---- Ciclo de vida de un FM / precios / ingeniería de contexto ----
  { from: 'gloss-d2-t1-b3#0', to: 'gloss-d3-t3-b1#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b3#0', to: 'gloss-d3-t3-b1#1', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b3#0', to: 'gloss-d3-t4-b1#2', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b4#0', to: 'gloss-d2-t3-b4#5', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b4#0', to: 'gloss-d3-t1-b1#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b5#0', to: 'gloss-d2-t1-b1#4', relation: 'requiere', note: 'la ingeniería de contexto es más amplia que solo el prompt' },
  { from: 'gloss-d2-t1-b5#0', to: 'gloss-d2-t1-b6#3', relation: 'se-usa-con', note: 'la memoria de un agente es una fuente de contexto' },

  // ---- IA agéntica (D2) ----
  { from: 'gloss-d2-t1-b6#0', to: 'gloss-d3-t1-b6#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b6#1', to: 'gloss-d2-t1-b6#4', relation: 'se-usa-con' },
  { from: 'gloss-d2-t1-b6#1', to: 'gloss-d2-t1-b6#2', relation: 'contrasta-con', note: 'MCP conecta con herramientas/datos; A2A conecta agentes entre sí' },
  { from: 'gloss-d2-t1-b6#3', to: 'gloss-d2-t3-b1#6', relation: 'se-usa-con', note: 'AgentCore Memory' },
  { from: 'gloss-d2-t1-b6#4', to: 'gloss-d2-t3-b1#6', relation: 'se-usa-con', note: 'AgentCore Gateway' },
  { from: 'gloss-d2-t1-b6#5', to: 'gloss-d2-t3-b1#6', relation: 'se-usa-con', note: 'AgentCore Runtime' },
  { from: 'gloss-d2-t1-b6#5', to: 'gloss-d3-t4-b4#2', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b6#0', to: 'gloss-d3-t4-b4#1', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b6#0', to: 'gloss-d5-t1-b1#5', relation: 'se-usa-con', note: 'seguridad de agentes' },
  { from: 'gloss-d3-t1-b6#0', to: 'gloss-d5-t1-b1#6', relation: 'se-usa-con' },

  // ---- Ventajas/desventajas de GenAI ----
  { from: 'gloss-d2-t2-b1#0', to: 'gloss-d2-t2-b2#1', relation: 'contrasta-con', note: 'más adaptable/grande suele ser menos interpretable' },
  { from: 'gloss-d2-t2-b1#3', to: 'gloss-d2-t2-b2#0', relation: 'contrasta-con', note: 'crear contenido nuevo trae el riesgo de inventar información' },
  { from: 'gloss-d2-t2-b2#3', to: 'gloss-d3-t1-b2#0', relation: 'se-usa-con', note: 'la temperatura es la causa técnica del no-determinismo' },
  { from: 'gloss-d2-t2-b2#1', to: 'gloss-d4-t2-b1#0', relation: 'se-usa-con', note: 'mismo tema, retomado a fondo en el Dominio 4' },
  { from: 'gloss-d2-t2-b2#0', to: 'gloss-d4-t1-b4#4', relation: 'se-usa-con', note: 'mismo riesgo, ahora con consecuencia legal' },
  { from: 'gloss-d2-t2-b2#0', to: 'gloss-d5-t1-b5#0', relation: 'se-usa-con', note: 'el grounding es la técnica principal para mitigarla' },

  // ---- Factores para elegir un modelo (D2) vs. criterios de selección (D3) ----
  { from: 'gloss-d2-t2-b3#5', to: 'gloss-d3-t1-b1#0', relation: 'se-usa-con', note: 'mismo criterio de selección repetido' },
  { from: 'gloss-d2-t2-b3#6', to: 'gloss-d3-t1-b1#2', relation: 'se-usa-con' },
  { from: 'gloss-d2-t2-b3#7', to: 'gloss-d3-t1-b1#4', relation: 'se-usa-con' },
  { from: 'gloss-d2-t2-b3#4', to: 'gloss-d2-t3-b3#1', relation: 'se-usa-con' },

  // ---- Valor de negocio y métricas (D2) ----
  { from: 'gloss-d2-t2-b4#0', to: 'gloss-d3-t4-b1#1', relation: 'contrasta-con', note: 'el desempeño entre dominios se mide con benchmarks estandarizados' },
  { from: 'gloss-d2-t2-b4#2', to: 'gloss-d2-t3-b2#2', relation: 'se-usa-con', note: 'mismo concepto: ángulo de negocio vs. ángulo de infraestructura AWS' },
  { from: 'gloss-d2-t2-b4#5', to: 'gloss-d1-t3-b6#0', relation: 'se-usa-con' },

  // ---- Servicios de AWS para GenAI (D2) ----
  { from: 'gloss-d2-t3-b1#0', to: 'gloss-d2-t1-b1#6', relation: 'requiere', note: 'Bedrock da acceso a foundation models' },
  { from: 'gloss-d2-t3-b1#0', to: 'gloss-d4-t1-b2#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t3-b1#0', to: 'gloss-d3-t1-b3#0', relation: 'se-usa-con', note: 'Bedrock Knowledge Bases' },
  { from: 'gloss-d2-t3-b1#0', to: 'gloss-d3-t2-b5#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t3-b1#0', to: 'gloss-d3-t4-b1#2', relation: 'se-usa-con' },
  { from: 'gloss-d2-t3-b1#2', to: 'gloss-d1-t3-b2#0', relation: 'se-usa-con' },
  { from: 'gloss-d2-t3-b1#5', to: 'gloss-d2-t1-b6#0', relation: 'se-usa-con', note: 'Strands ofrece los patrones Swarm/Graph/Workflow' },
  { from: 'gloss-d2-t3-b1#5', to: 'gloss-d2-t3-b1#6', relation: 'se-usa-con', note: 'Strands se integra con AgentCore para producción' },

  // ---- Ventajas de usar GenAI de AWS / contrapartidas de costo (D2) ----
  { from: 'gloss-d2-t3-b2#4', to: 'gloss-d1-t3-b6#7', relation: 'se-usa-con', note: 'menos tiempo de desarrollo reduce ese costo' },
  { from: 'gloss-d2-t3-b4#6', to: 'gloss-d2-t1-b4#0', relation: 'contrasta-con', note: 'tarifa fija por capacidad vs. pago por token' },
  { from: 'gloss-d2-t3-b4#5', to: 'gloss-d3-t1-b1#8', relation: 'se-usa-con', note: 'el prompt caching reduce directamente este costo' },
  { from: 'gloss-d2-t3-b4#7', to: 'gloss-d3-t1-b5#1', relation: 'se-usa-con', note: 'personalizar un FM implica fine-tuning o preentrenamiento continuo' },

  // ---- Criterios de selección de FMs (D3) / parámetros de inferencia ----
  { from: 'gloss-d3-t1-b1#7', to: 'gloss-d3-t1-b2#2', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b1#8', to: 'gloss-d3-t2-b1#0', relation: 'requiere', note: 'cachea justamente el contexto repetido del prompt' },

  // ---- RAG ----
  { from: 'gloss-d3-t1-b3#0', to: 'gloss-d3-t1-b4#0', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b3#0', to: 'gloss-d3-t1-b5#3', relation: 'se-usa-con', note: 'mismo RAG, ahora comparado en costo con otros enfoques' },
  { from: 'gloss-d3-t1-b3#0', to: 'gloss-d3-t4-b4#0', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b3#0', to: 'gloss-d5-t1-b5#0', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b4#0', to: 'gloss-d3-t1-b4#1', relation: 'contrasta-con', note: 'distintas bases para embeddings, según si ya usás una relacional' },
  { from: 'gloss-d3-t1-b4#1', to: 'gloss-d3-t1-b4#3', relation: 'se-usa-con', note: 'ambas usan la extensión pgvector' },

  // ---- Enfoques de personalización de FMs (D3-T1-B5) vs. entrenamiento (D3-T3) ----
  { from: 'gloss-d3-t1-b5#0', to: 'gloss-d3-t3-b1#0', relation: 'se-usa-con', note: 'mismo concepto, retomado en el task de entrenamiento' },
  { from: 'gloss-d3-t1-b5#1', to: 'gloss-d3-t3-b1#1', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b5#4', to: 'gloss-d3-t3-b1#3', relation: 'se-usa-con' },
  { from: 'gloss-d3-t1-b5#2', to: 'gloss-d3-t2-b1#1', relation: 'se-usa-con' },
  { from: 'gloss-d3-t3-b1#2', to: 'gloss-d3-t3-b2#3', relation: 'se-usa-con', note: 'mismo concepto, listado dos veces' },
  { from: 'gloss-d3-t3-b2#2', to: 'gloss-d3-t3-b1#0', relation: 'requiere', note: 'transfer learning aprovecha lo aprendido en el preentrenamiento' },
  { from: 'gloss-d3-t3-b2#4', to: 'gloss-d3-t3-b2#0', relation: 'contrasta-con', note: 'riesgo que el instruction tuning busca evitar sobreajustando menos' },

  // ---- Preparar datos para fine-tuning (D3-T3-B3) ----
  { from: 'gloss-d3-t3-b3#5', to: 'gloss-d1-t1-b5#0', relation: 'contrasta-con', note: 'RLHF usa preferencias humanas vía refuerzo, no un dataset de respuestas correctas' },
  { from: 'gloss-d3-t3-b3#3', to: 'gloss-d1-t1-b4#0', relation: 'se-usa-con', note: 'mismo concepto de etiquetado, aplicado al fine-tuning' },
  { from: 'gloss-d3-t3-b3#0', to: 'gloss-d4-t1-b5#2', relation: 'se-usa-con', note: 'mismo principio de curaduría, en IA responsable' },
  { from: 'gloss-d3-t3-b3#4', to: 'gloss-d4-t1-b5#0', relation: 'se-usa-con', note: 'ambos buscan que el dataset represente bien a todos los grupos' },

  // ---- Evaluación de FMs (D3-T4) ----
  { from: 'gloss-d3-t4-b1#0', to: 'gloss-d4-t1-b7#1', relation: 'se-usa-con', note: 'ambos son revisión humana, en distintos momentos del ciclo' },
  { from: 'gloss-d3-t4-b2#2', to: 'gloss-d3-t4-b2#0', relation: 'contrasta-con', note: 'BERTScore compara significado; ROUGE/BLEU comparan palabras exactas' },
  { from: 'gloss-d3-t4-b2#3', to: 'gloss-d3-t4-b1#2', relation: 'se-usa-con', note: 'Bedrock Model Evaluation puede incorporar LLM-as-a-judge' },
  { from: 'gloss-d3-t4-b3#0', to: 'gloss-d3-t4-b5#0', relation: 'se-usa-con', note: 'task engineering se mide en parte con esta tasa' },
  { from: 'gloss-d3-t4-b5#2', to: 'gloss-d1-t3-b6#6', relation: 'se-usa-con', note: 'ambas normalizan el costo total por unidad de uso' },

  // ---- Características de IA responsable (D4) ----
  { from: 'gloss-d4-t1-b1#2', to: 'gloss-d4-t1-b5#0', relation: 'se-usa-con', note: 'mismo principio, de un sistema vs. de un dataset' },
  { from: 'gloss-d4-t1-b1#3', to: 'gloss-d4-t1-b6#2', relation: 'contrasta-con', note: 'el overfitting hace a un modelo menos robusto ante datos nuevos' },
  { from: 'gloss-d4-t1-b1#4', to: 'gloss-d2-t3-b3#3', relation: 'se-usa-con', note: 'mismo pilar, dos bullets distintos' },
  { from: 'gloss-d4-t1-b1#5', to: 'gloss-d2-t2-b2#0', relation: 'se-usa-con', note: 'minimizar alucinaciones es el objetivo central de la veracidad' },

  // ---- Guardrails (hub cross-dominio) ----
  { from: 'gloss-d4-t1-b2#0', to: 'gloss-d3-t2-b3#2', relation: 'se-usa-con', note: 'mismo servicio, primero visto como buena práctica de prompting' },
  { from: 'gloss-d4-t1-b2#0', to: 'gloss-d5-t1-b1#7', relation: 'se-usa-con', note: 'mismo servicio, ahora como control de seguridad' },
  { from: 'gloss-d4-t1-b2#0', to: 'gloss-d5-t1-b4#9', relation: 'se-usa-con', note: 'Guardrails filtra específicamente la toxicidad' },
  { from: 'gloss-d4-t1-b2#0', to: 'gloss-d5-t1-b4#7', relation: 'se-usa-con' },
  { from: 'gloss-d4-t1-b2#0', to: 'gloss-d5-t1-b4#4', relation: 'se-usa-con', note: 'Guardrails ayuda a mitigar la inyección de prompts' },

  // ---- Sostenibilidad ----
  { from: 'gloss-d4-t1-b3#1', to: 'gloss-d3-t1-b1#4', relation: 'se-usa-con', note: 'un modelo más chico que resuelva igual reduce la huella ambiental' },

  // ---- Riesgos legales (D4-T1-B4) ----
  { from: 'gloss-d4-t1-b4#1', to: 'gloss-d4-t1-b1#0', relation: 'se-usa-con' },

  // ---- Características de los datasets (D4-T1-B5) vs. sesgo/varianza (D4-T1-B6) ----
  { from: 'gloss-d4-t1-b5#3', to: 'gloss-d4-t1-b6#0', relation: 'contrasta-con', note: 'un dataset desbalanceado es causa directa de ese efecto desigual' },

  // ---- Herramientas para detectar sesgo (D4-T1-B7) ----
  { from: 'gloss-d4-t1-b7#0', to: 'gloss-d3-t3-b3#3', relation: 'se-usa-con', note: 'la calidad del etiquetado importa para sesgo y para fine-tuning' },
  { from: 'gloss-d4-t1-b7#2', to: 'gloss-d4-t1-b6#0', relation: 'se-usa-con' },
  { from: 'gloss-d4-t1-b7#3', to: 'gloss-d3-t4-b1#0', relation: 'se-usa-con', note: 'A2I es el servicio de AWS que implementa esa revisión humana' },

  // ---- Transparencia y explicabilidad (D4-T2) ----
  { from: 'gloss-d4-t2-b1#0', to: 'gloss-d4-t2-b2#3', relation: 'se-usa-con', note: 'SHAP/LIME aproximan explicaciones de modelos caja negra' },
  { from: 'gloss-d4-t2-b2#0', to: 'gloss-d5-t1-b2#2', relation: 'se-usa-con', note: 'mismo servicio, dos roles: transparencia y citación de fuentes' },
  { from: 'gloss-d4-t2-b2#1', to: 'gloss-d3-t4-b1#2', relation: 'se-usa-con', note: 'mismo servicio, ahora visto como herramienta de transparencia' },
  { from: 'gloss-d4-t2-b3#0', to: 'gloss-d4-t2-b1#0', relation: 'se-usa-con' },
  { from: 'gloss-d4-t2-b4#1', to: 'gloss-d5-t2-b3#3', relation: 'se-usa-con', note: 'mismo principio, formalizado como estándar organizacional' },

  // ---- Servicios de seguridad para IA (D5-T1-B1) ----
  { from: 'gloss-d5-t1-b1#0', to: 'gloss-d5-t1-b1#6', relation: 'se-usa-con', note: 'AgentCore extiende el modelo estándar de permisos de IAM' },
  { from: 'gloss-d5-t1-b1#1', to: 'gloss-d5-t1-b4#5', relation: 'se-usa-con', note: 'mismo control, retomado en consideraciones de seguridad' },
  { from: 'gloss-d5-t1-b1#2', to: 'gloss-d3-t3-b3#0', relation: 'se-usa-con', note: 'Macie ayuda a detectar PII antes de usar datos para fine-tuning' },
  { from: 'gloss-d5-t1-b1#3', to: 'gloss-d5-t1-b4#3', relation: 'se-usa-con' },
  { from: 'gloss-d5-t1-b1#4', to: 'gloss-d5-t2-b1#3', relation: 'se-usa-con', note: 'Artifact documenta las certificaciones de la parte de AWS en ese modelo' },

  // ---- Linaje / catalogación / gobernanza de datos (D5-T1-B2, D5-T2-B2) ----
  { from: 'gloss-d5-t1-b2#0', to: 'gloss-d5-t1-b2#1', relation: 'se-usa-con' },
  { from: 'gloss-d5-t1-b2#0', to: 'gloss-d5-t2-b2#0', relation: 'se-usa-con', note: 'el linaje rastrea justamente ese ciclo de vida' },
  { from: 'gloss-d5-t1-b3#1', to: 'gloss-d5-t1-b1#1', relation: 'se-usa-con', note: 'ambas son formas de proteger datos sensibles' },

  // ---- Seguridad y privacidad para sistemas de IA (D5-T1-B4) ----
  { from: 'gloss-d5-t1-b4#4', to: 'gloss-d3-t2-b4#2', relation: 'se-usa-con', note: 'el hijacking es una forma específica de inyección de prompts' },
  { from: 'gloss-d5-t1-b4#6', to: 'gloss-d3-t2-b4#0', relation: 'se-usa-con', note: 'misma preocupación, vista desde la ingeniería de prompts' },
  { from: 'gloss-d5-t1-b4#8', to: 'gloss-d5-t2-b1#4', relation: 'se-usa-con', note: 'CloudTrail sostiene ese registro de auditoría' },
  { from: 'gloss-d5-t1-b4#2', to: 'gloss-d5-t2-b1#1', relation: 'se-usa-con' },

  // ---- Grounding / validación de salidas (D5-T1-B5) ----
  { from: 'gloss-d5-t1-b5#1', to: 'gloss-d5-t1-b4#7', relation: 'se-usa-con', note: 'mismo concepto, ya visto como control de seguridad' },

  // ---- Servicios de gobernanza (D5-T2-B1) ----
  { from: 'gloss-d5-t2-b1#2', to: 'gloss-d5-t2-b1#3', relation: 'se-usa-con', note: 'ambos ayudan a preparar evidencia para auditorías' },

  // ---- Estrategias de gobernanza de datos (D5-T2-B2) ----
  { from: 'gloss-d5-t2-b2#2', to: 'gloss-d2-t3-b4#4', relation: 'se-usa-con', note: 'la región de AWS afecta residencia de datos y cobertura de modelos' },
  { from: 'gloss-d5-t2-b2#4', to: 'gloss-d2-t3-b1#6', relation: 'se-usa-con', note: 'AgentCore Observability da esta visibilidad a agentes' },

  // ---- Protocolos de gobernanza (D5-T2-B3) ----
  { from: 'gloss-d5-t2-b3#2', to: 'gloss-d1-t3-b3#1', relation: 'se-usa-con', note: 'sus scopes van de usar una API de terceros a entrenar un modelo propio' },
  { from: 'gloss-d5-t2-b3#4', to: 'gloss-d5-t2-b3#0', relation: 'se-usa-con', note: 'sin capacitación, las políticas no se aplican en la práctica' },

  // ---- Puentes entre clusters (segunda pasada -- el mapa original quedó
  // fragmentado en 51 componentes desconexos; estas conexiones son
  // adicionales para unir esas islas a las dos zonas más grandes del mapa
  // (o entre sí), sin tocar ninguna de las curadas arriba). ----
  { from: 'gloss-d1-t1-b1#8', to: 'gloss-d3-t1-b5#0', relation: 'se-usa-con', note: 'el preentrenamiento es la primera fase del entrenamiento de un FM' },
  { from: 'gloss-d3-t3-b3#5', to: 'gloss-d3-t1-b5#1', relation: 'ejemplo-de', note: 'RLHF es una técnica de fine-tuning con retroalimentación humana' },
  { from: 'gloss-d1-t1-b1#14', to: 'gloss-d2-t1-b1#6', relation: 'se-usa-con', note: 'la GenAI se construye sobre foundation models' },
  { from: 'gloss-d1-t3-b6#0', to: 'gloss-d3-t4-b1#2', relation: 'se-usa-con', note: 'son las métricas que una evaluación de modelo termina midiendo' },
  { from: 'gloss-d1-t3-b6#6', to: 'gloss-d2-t2-b3#5', relation: 'se-usa-con', note: 'ambos son criterios de costo al elegir un modelo' },
  { from: 'gloss-d1-t1-b1#10', to: 'gloss-d4-t1-b1#5', relation: 'se-usa-con', note: 'ambos son riesgos que las guardrails y la IA responsable buscan mitigar' },
  { from: 'gloss-d1-t2-b4#2', to: 'gloss-d2-t1-b2#2', relation: 'se-usa-con', note: 'los asistentes de voz combinan reconocimiento de voz con IA generativa' },
  { from: 'gloss-d2-t1-b2#2', to: 'gloss-d2-t1-b1#6', relation: 'requiere', note: 'los asistentes de IA se construyen sobre foundation models' },
  { from: 'gloss-d1-t3-b5#5', to: 'gloss-d4-t1-b6#2', relation: 'se-usa-con', note: 'el monitoreo detecta cuando un modelo entrenado empieza a desajustarse' },
  { from: 'gloss-d1-t2-b5#0', to: 'gloss-d1-t3-b4#0', relation: 'contrasta-con', note: 'SageMaker para entrenar/alojar modelos propios, Bedrock para usar FMs administrados' },
  { from: 'gloss-d1-t3-b2#0', to: 'gloss-d2-t3-b1#1', relation: 'se-usa-con', note: 'SageMaker JumpStart ofrece modelos preentrenados de código abierto listos para usar' },
  { from: 'gloss-d3-t1-b1#4', to: 'gloss-d1-t3-b6#6', relation: 'se-usa-con', note: 'modelos más grandes suelen costar más por inferencia' },
  { from: 'gloss-d3-t3-b3#0', to: 'gloss-d3-t3-b3#3', relation: 'se-usa-con', note: 'mismo bullet: pasos de preparación de datos antes de entrenar' },
  { from: 'gloss-d3-t3-b3#4', to: 'gloss-d1-t1-b1#11', relation: 'requiere', note: 'datos representativos son necesarios para lograr equidad' },
  { from: 'gloss-d3-t4-b1#0', to: 'gloss-d3-t4-b2#3', relation: 'contrasta-con', note: 'evaluación humana vs. evaluación automatizada por otro modelo' },
  { from: 'gloss-d4-t1-b5#3', to: 'gloss-d3-t3-b3#4', relation: 'se-usa-con', note: 'datasets balanceados ayudan a lograr representatividad' },
  { from: 'gloss-d5-t1-b1#1', to: 'gloss-d5-t1-b1#3', relation: 'se-usa-con', note: 'mismo bullet: controles técnicos de seguridad de red y datos' },
  { from: 'gloss-d5-t1-b1#4', to: 'gloss-d5-t1-b1#0', relation: 'se-usa-con', note: 'mismo bullet: el modelo de responsabilidad compartida define qué controles de IAM te tocan' },
  { from: 'gloss-d5-t1-b2#0', to: 'gloss-d3-t3-b3#0', relation: 'se-usa-con', note: 'ambos son parte de la gobernanza del ciclo de vida de los datos' },
  { from: 'gloss-d1-t2-b1#1', to: 'gloss-d1-t2-b1#0', relation: 'se-usa-con', note: 'mismo bullet: razones para adoptar soluciones de IA/ML' },
  { from: 'gloss-d1-t2-b1#0', to: 'gloss-d2-t2-b1#0', relation: 'se-usa-con', note: 'ambos describen por qué conviene adoptar GenAI/ML' },
  { from: 'gloss-d1-t1-b1#4', to: 'gloss-d1-t1-b1#5', relation: 'se-usa-con', note: 'mismo bullet: ejemplos hermanos de aplicaciones de IA/ML' },
  { from: 'gloss-d1-t2-b4#0', to: 'gloss-d1-t2-b4#2', relation: 'se-usa-con', note: 'mismo bullet: ejemplos de capacidades de IA/ML de AWS' },
  { from: 'gloss-d1-t2-b4#3', to: 'gloss-d2-t1-b2#4', relation: 'se-usa-con', note: 'ambos son casos de uso de GenAI mencionados junto a asistentes de IA' },
  { from: 'gloss-d1-t3-b4#2', to: 'gloss-d1-t3-b4#0', relation: 'se-usa-con', note: 'mismo bullet: productos de IA generativa de AWS' },
  { from: 'gloss-d1-t3-b5#0', to: 'gloss-d1-t3-b5#5', relation: 'se-usa-con', note: 'mismo bullet: conceptos del ciclo de vida de MLOps' },
  { from: 'gloss-d1-t1-b1#13', to: 'gloss-d1-t1-b1#14', relation: 'ejemplo-de', note: 'mismo bullet: los LLMs son el tipo de FM más común detrás de la GenAI de texto' },
  { from: 'gloss-d2-t1-b1#8', to: 'gloss-d2-t1-b1#7', relation: 'se-usa-con', note: 'mismo bullet: tipos de foundation models' },
  { from: 'gloss-d2-t2-b2#3', to: 'gloss-d2-t2-b2#0', relation: 'se-usa-con', note: 'mismo bullet: características de las respuestas generativas' },
  { from: 'gloss-d2-t2-b3#6', to: 'gloss-d1-t1-b1#9', relation: 'se-usa-con', note: 'la latencia se mide en el momento de la inferencia' },
  { from: 'gloss-d2-t2-b3#4', to: 'gloss-d5-t2-b1#2', relation: 'se-usa-con', note: 'Audit Manager ayuda a demostrar cumplimiento normativo' },
  { from: 'gloss-d3-t4-b1#1', to: 'gloss-d1-t3-b6#0', relation: 'se-usa-con', note: 'los benchmarks miden estas métricas de forma estandarizada' },
  { from: 'gloss-d2-t2-b4#2', to: 'gloss-d1-t3-b6#6', relation: 'se-usa-con', note: 'mismo bullet: criterios de negocio para elegir un modelo' },
  { from: 'gloss-d3-t1-b1#7', to: 'gloss-d3-t2-b1#0', relation: 'se-usa-con', note: 'la longitud de contexto limita cuánto texto entra en el prompt' },
  { from: 'gloss-d3-t1-b5#4', to: 'gloss-d3-t3-b2#2', relation: 'contrasta-con', note: 'ambas adaptan/reducen modelos pero con objetivos distintos' },
  { from: 'gloss-d3-t1-b5#2', to: 'gloss-d3-t1-b5#1', relation: 'contrasta-con', note: 'in-context learning no actualiza los pesos del modelo, a diferencia del fine-tuning' },
  { from: 'gloss-d3-t3-b1#2', to: 'gloss-d3-t3-b1#1', relation: 'ejemplo-de', note: 'mismo bullet: es un tipo de fine-tuning' },
  { from: 'gloss-d3-t3-b2#0', to: 'gloss-d3-t3-b2#2', relation: 'se-usa-con', note: 'mismo bullet: técnicas de fine-tuning y sus riesgos' },
  { from: 'gloss-d3-t4-b2#0', to: 'gloss-d3-t4-b2#3', relation: 'contrasta-con', note: 'mismo bullet: métrica automática tradicional vs. evaluación con otro LLM' },
  { from: 'gloss-d3-t4-b3#0', to: 'gloss-d3-t4-b4#0', relation: 'se-usa-con', note: 'ambos evalúan si un sistema de IA cumple objetivos de negocio' },
  { from: 'gloss-d2-t3-b3#3', to: 'gloss-d3-t2-b3#2', relation: 'se-usa-con', note: 'los guardrails son el mecanismo técnico para lograr safety' },
  { from: 'gloss-d4-t2-b2#0', to: 'gloss-d4-t2-b2#1', relation: 'se-usa-con', note: 'mismo bullet: documentar y evaluar modelos' },
  { from: 'gloss-d4-t2-b4#1', to: 'gloss-d4-t2-b1#0', relation: 'se-usa-con', note: 'ambos tratan la transparencia de las decisiones del modelo' },
  { from: 'gloss-d5-t1-b4#3', to: 'gloss-d5-t1-b1#0', relation: 'se-usa-con', note: 'ambos son controles de seguridad de infraestructura/identidad' },
  { from: 'gloss-d5-t1-b4#6', to: 'gloss-d5-t1-b1#1', relation: 'se-usa-con', note: 'el cifrado es un control clave para prevenir fuga de datos' },
  { from: 'gloss-d5-t1-b4#8', to: 'gloss-d5-t2-b1#2', relation: 'se-usa-con', note: 'CloudTrail registra la actividad que Audit Manager usa como evidencia' },
  { from: 'gloss-d5-t1-b4#2', to: 'gloss-d5-t2-b1#4', relation: 'se-usa-con', note: 'mismo bullet: servicios de seguridad y auditoría de AWS' },
  { from: 'gloss-d2-t3-b4#4', to: 'gloss-d5-t1-b2#0', relation: 'se-usa-con', note: 'ambos son parte de la gobernanza de dónde y cómo viven los datos' },
  { from: 'gloss-d5-t2-b3#0', to: 'gloss-d5-t2-b1#3', relation: 'se-usa-con', note: 'ambos documentan cumplimiento de políticas de gobernanza' },
];

if (import.meta.env.DEV) {
  function countTermCards(html: string): number {
    return (html.match(/<div class="term-card">/g) ?? []).length;
  }

  const badIds = new Set<string>();
  for (const edge of conceptEdges) {
    for (const id of [edge.from, edge.to]) {
      const hashIndex = id.indexOf('#');
      const glossId = hashIndex === -1 ? id : id.slice(0, hashIndex);
      const cardIndex = hashIndex === -1 ? NaN : Number(id.slice(hashIndex + 1));
      const entry = glossaryById[glossId];
      if (!entry) {
        badIds.add(id);
        console.warn(`[conceptGraph] "${id}" -- glossId "${glossId}" no existe en glossaryById`);
        continue;
      }
      const cardCount = countTermCards(entry.html);
      if (!Number.isInteger(cardIndex) || cardIndex < 0 || cardIndex >= cardCount) {
        badIds.add(id);
        console.warn(`[conceptGraph] "${id}" -- cardIndex fuera de rango (la entrada tiene ${cardCount} term-cards, índices 0-${cardCount - 1})`);
      }
    }
  }
  if (badIds.size > 0) {
    console.warn(`[conceptGraph] ${badIds.size} id(s) inválido(s) en conceptEdges -- ver warnings arriba.`);
  }
}
