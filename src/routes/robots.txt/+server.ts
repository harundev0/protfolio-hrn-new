// Dynamic so the Sitemap line carries the deployed domain. AI crawlers are welcome too (see /llms.txt).
export const GET = ({ url }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nUser-agent: OAI-SearchBot\nUser-agent: ChatGPT-User\nUser-agent: ClaudeBot\nUser-agent: Claude-User\nUser-agent: PerplexityBot\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${url.origin}/sitemap.xml\n`,
    { headers: { 'content-type': 'text/plain' } }
  );
