// Projects on the homepage. Screenshots are 1440x900 at 2x (webp) in public/images/screenshots.
// Featured projects get their brand color (`brand` for glow/ring, `brandText` for readable accents).
export const featured = [
  {
    name: "Coolify",
    href: "https://coolify.io?ref=coollabs",
    domain: "coolify.io",
    logo: "/images/projects/coolify.png",
    brand: "var(--color-coollabs)",
    brandText: "oklch(72% 0.17 289)",
    tagline: "Self-hosting with superpowers.",
    description:
      "An open-source and self-hostable alternative to Heroku, Netlify and Vercel. Deploy apps, databases and 280+ one-click services to your own servers.",
    stats: [
      { value: "Thousands", label: "of Cloud users" },
      { value: "Hundreds of thousands", label: "of self-hosted instances" },
    ],
    screenshots: [
      {
        src: "/images/screenshots/coolify-environment.webp",
        title: "Projects and environments",
        text: "Every application, database and service of an environment in one list, with status, domain and server.",
        alt: "Coolify environment view listing applications and databases with their status, domain and server",
      },
      {
        src: "/images/screenshots/coolify-analytics.webp",
        title: "Built-in traffic analytics",
        text: "Requests, visitors, status codes, top hosts and paths for every application, collected on your own server.",
        alt: "Coolify traffic analytics with status codes, top hosts, top applications and top paths",
      },
      {
        src: "/images/screenshots/coolify-deployment-logs.webp",
        title: "Live deployment logs",
        text: "Follow every build and rolling update in real time, with the full deployment history.",
        alt: "Coolify deployment history and live build log of a successful deployment",
      },
    ],
  },
  {
    name: "Jean",
    href: "https://jean.build?ref=coollabs",
    domain: "jean.build",
    logo: "/images/projects/jean.png",
    brand: "var(--color-jean)",
    brandText: "var(--color-jean)",
    tagline: "A dev environment for AI agents.",
    description:
      "Run AI agents in parallel, in isolated worktrees, with Claude Code, Codex and OpenCode. Review every change before you ship it.",
    stats: [
      { value: "Open source", label: "and free forever" },
      { value: "Desktop, server", label: "and web access" },
    ],
    screenshots: [
      {
        src: "/images/screenshots/jean-worktrees.webp",
        title: "Every task in its own worktree",
        text: "One project, many isolated worktrees: issues, pull requests and manual tasks, with diff size, PR status and labels.",
        alt: "Jean project view listing worktrees with linked pull requests, diff stats and labels",
      },
      {
        src: "/images/screenshots/jean-recent-sessions.webp",
        title: "Parallel agents",
        text: "Every session across all projects in one list, with running agents marked. Open several sessions side by side.",
        alt: "Jean Recent tab with sessions from many projects, next to an open session with an agent recap",
      },
      {
        src: "/images/screenshots/jean-diff-review.webp",
        title: "Review every change",
        text: "Uncommitted, branch, commit and checkpoint diffs in split or stacked view. Click line numbers to comment.",
        alt: "Jean diff viewer with a file list and a split diff of a PHP file",
      },
    ],
  },
  {
    name: "Shoutrrr",
    href: "https://shoutrrr.com?ref=coollabs",
    domain: "shoutrrr.com",
    logo: "/images/projects/shoutrrr.svg",
    brand: "oklch(76.8% 0.233 130.85)",
    brandText: "oklch(84.1% 0.238 128.85)",
    tagline: "Draft once, post everywhere.",
    description:
      "The open-source alternative to Buffer, Typefully and Hootsuite. Publish to X, LinkedIn, Bluesky and Discord from one editor, or let your AI agent do it.",
    stats: [
      { value: "New", label: "and open source" },
      { value: "MCP + REST API", label: "included" },
    ],
    screenshots: [
      {
        src: "/images/screenshots/shoutrrr.webp",
        title: "Draft once, post everywhere",
        text: "Publish to X, LinkedIn, Bluesky and Discord from one editor, with a live per-network character count.",
        alt: "Shoutrrr homepage with the post editor and per-network character counts",
      },
      {
        src: "/images/screenshots/shoutrrr-showcase.webp",
        title: "One fast interface",
        text: "Compose, queue, reply and measure without leaving the app, and see how every post lands on each network.",
        alt: "Shoutrrr composer with a thread and a preview of how it looks on X",
      },
      {
        src: "/images/screenshots/shoutrrr-developers.webp",
        title: "Drive it from your agent or your code",
        text: "Every plan includes an MCP server and a REST API, with no developer tier and no per-call fee.",
        alt: "Shoutrrr MCP server and REST API cards",
      },
    ],
  },
  {
    name: "Safetyper",
    href: "https://safetyper.com?ref=coollabs",
    domain: "safetyper.com",
    logo: "/images/projects/safetyper.png",
    brand: "oklch(62.7% 0.194 149.21)",
    brandText: "oklch(79.2% 0.209 151.71)",
    tagline: "Keep your words safe and polished.",
    description:
      "A Grammarly alternative, where you own what you type. A browser extension with your own API key or a local Ollama model.",
    stats: [
      { value: "Chrome", label: "and Firefox" },
      { value: "Local models", label: "with Ollama" },
    ],
    screenshots: [
      {
        src: "/images/screenshots/safetyper.webp",
        title: "Keep your words safe and polished",
        text: "Grammar and spelling on any website, from a browser extension for Chrome and Firefox.",
        alt: "Safetyper homepage with Add to Chrome and Add to Firefox buttons",
      },
      {
        src: "/images/screenshots/safetyper-features.webp",
        title: "Better writing, without giving up your privacy",
        text: "Bring your own OpenRouter or Groq key, or run models locally with Ollama. Your text stays yours.",
        alt: "Safetyper features: bring your own key, local Ollama models, works everywhere, grammar and open source",
      },
    ],
  },
];

export const more = [
  {
    name: "Fonts",
    href: "https://fonts.coollabs.io?ref=coollabs",
    logo: "/images/projects/fonts.png",
    stat: "7+ million requests per month",
    description: "A privacy-friendly drop-in replacement for Google Fonts.",
    screenshots: [
      {
        src: "/images/screenshots/fonts.webp",
        title: "Privacy for your visitors",
        text: "Same fonts, same API, without logging anything about your visitors. Change one domain in your head tags.",
        alt: "coolLabs Fonts homepage with a code diff that replaces fonts.googleapis.com with api.fonts.coollabs.io",
      },
    ],
  },
  {
    name: "Serverless Horrors",
    href: "https://serverlesshorrors.com?ref=coollabs",
    icon: "ghost",
    description: "A simple blog where you can read all the horror stories of serverless.",
    screenshots: [
      {
        src: "/images/screenshots/serverlesshorrors.webp",
        title: "Stories you never want to feel on your own skin",
        text: "Surprise cloud bills and runaway serverless costs, one post at a time.",
        alt: "Serverless Horrors blog with a list of posts about huge cloud bills",
      },
    ],
  },
  {
    name: "LLM Horrors",
    href: "https://llmhorrors.com?ref=coollabs",
    icon: "bug",
    description: "A simple blog where you can read all the horror stories of LLMs.",
    screenshots: [
      {
        src: "/images/screenshots/llmhorrors.webp",
        title: "When AI agents go wrong",
        text: "Deleted home directories, dropped production databases and other stories from coding agents.",
        alt: "LLM Horrors blog with a list of posts about coding agents that deleted data",
      },
    ],
  },
];

// One flat list for the gallery, in page order. `start` is the gallery index of each project's first shot.
const all = [...featured, ...more];
let index = 0;
for (const project of all) {
  project.start = index;
  index += project.screenshots.length;
}
export const screenshots = all.flatMap((project) =>
  project.screenshots.map((shot) => ({ ...shot, project: project.name })),
);
