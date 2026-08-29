// explanationHtml stores img src as root-relative ("/quiz-other-images/...").
// The app itself is served under Vite's base path (see vite.config.ts), so a
// literal root-relative src misses that prefix and 404s -- rewrite it to the
// actual base at render time instead of baking a specific base into the data.
export function withBasePath(html: string): string {
  return html.replaceAll('src="/quiz-other-images/', `src="${import.meta.env.BASE_URL}quiz-other-images/`);
}
