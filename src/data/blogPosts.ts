export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  timeToRead: string;
  tags: string[];
  category: "site2crm" | "axion-deep-digital" | "made4founders" | "labs";
};

export const BLOG_POSTS: BlogPost[] = [
  // =========================================================================
  // AXION DEEP LABS
  // =========================================================================
  {
    slug: "ai-writing-tools-have-an-alignment-problem",
    title: "AI Writing Tools Have an Alignment Problem",
    description:
      "Production AI writing tools are running into a problem the AI alignment literature has been studying for years: when the optimization target is fluency, what isn't formally protected gets quietly removed. A research observation, applied.",
    date: "2026-05-08",
    author: "Joshua R. Gutierrez",
    timeToRead: "6 min",
    tags: ["AI alignment", "specification gaming", "optimization targets", "AI safety", "continual learning", "Goodhart's law"],
    category: "labs",
    content: `Most production AI failures right now look like the system did exactly what it was asked to do.

I spent a session this week rebuilding one of our own AI writing tools, and the post-mortem connected back to a research literature I keep coming back to: specification gaming, reward hacking, Goodhart's law. The model behaves correctly with respect to its formal objective. The user gets something semantically wrong.

This pattern has been studied for years in AI safety. Krakovna and colleagues have a long catalog of specification gaming examples in reinforcement learning. The literature on outer and inner alignment tracks the same thing from different angles. The unifying observation: what isn't explicitly preserved by the optimization target doesn't survive the optimization process.

Now this is showing up in production AI writing tools. That is worth noting, because the literature was largely about reinforcement learning. Production writing tools are mostly LLM-driven. The mechanism is different. The failure mode is the same.

## The mechanism

Consider an AI adapter that takes a long-form post and produces a short version for a specific platform. The system prompt says something like:

> Rewrite this for Twitter.

That instruction grants the model implicit permission to summarize, restructure, merge claims, drop specifics, abstract upward, and replace evidence with implication. None of these are explicitly forbidden. None are explicitly required to be preserved. The model picks an output that satisfies the formal objective ("a Twitter-shaped version of this post") and is free to drop anything not encoded in that objective.

If the user wanted the specific numbers preserved, the URL preserved, the entity references preserved, the model had no obligation to keep them. The user wanted preservation. The system was optimizing for transformation. Both can be true at the same time.

This is not a prompt engineering problem. This is misaligned objectives.

## Connection to continual learning

Our research at Axion Deep Labs studies what neural networks forget when they are trained on new tasks. The PERSIST line of work asks: can we predict which models will retain knowledge of an old task while learning a new one? The dominant answer in the continual learning literature is "selectively constrain the parameters that mattered for the old task." Elastic Weight Consolidation, synaptic intelligence, and related methods all encode that intuition formally.

The AI writing tool problem is structurally similar. The "old task" is the user's original intent. The "new task" is the platform-specific output. The model has no formal constraint to preserve the structure of the original. So it does not.

The fix in continual learning research is the same fix the AI writing problem needs: the protected information must be encoded in the optimization process, not in the prose of a prompt.

## Why prompts cannot carry this load

A prompt saying "please preserve the numbers" is a request, not a constraint. LLMs are not deterministic semantic compressors. They abstract naturally. They satisfice. They optimize for plausibility.

If preservation is required, it has to be enforced after the fact. Extract the protected facts from the input deterministically. Run the model. Validate that the protected facts survived. Reject when they did not. Fall back to a deterministic transformation that preserves them by construction.

That architecture replaces an unverifiable prompt with a verifiable post-condition. It is not novel. The continual learning literature has been doing the equivalent for years.

## What is actually new

What is new is that this is a production problem in writing tools used by founders, marketers, and small businesses. The alignment literature pointed at it. The deployment context caught up.

The next few years of AI writing tools will be defined by which products correctly identify what their users want preserved and encode that in the optimization process. Not in a prompt. In the validator.

The products that get this right will look less like "AI rewrites your post" and more like constrained editorial systems with deterministic guardrails and an LLM embedded inside. The products that do not will continue to look correct and feel wrong.

That is the open question worth thinking about. The literature has been there for a while. The deployment context is the new thing.`,
  },
  // =========================================================================
  // AXION DEEP DIGITAL
  // =========================================================================
  // =========================================================================
  // SITE2CRM (3 posts)
  // =========================================================================

  // =========================================================================
  // AXION DEEP DIGITAL (3 posts)
  // =========================================================================

  // =========================================================================
  // MADE4FOUNDERS (3 posts)
  // =========================================================================
  // =========================================================================
  // AXION DEEP DIGITAL, AI SEO TOOL
  // =========================================================================
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  BLOG_POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}

/**
 * Posts that moved to the brand that owns the subject. Labs keeps research
 * writing; product and agency writing lives with the product or the agency.
 * Slug maps to the new canonical URL.
 */
export const MOVED_POSTS: Record<string, string> = {
  "digital-stack-small-businesses-2026":
    "https://www.axiondeepdigital.com/blog/digital-stack-small-businesses-2026",
  "stop-losing-leads-from-your-website":
    "https://site2crm.io/blog/stop-losing-leads-from-your-website",
  "ai-chat-vs-contact-forms-which-captures-more-leads":
    "https://site2crm.io/blog/ai-chat-vs-contact-forms-which-captures-more-leads",
  "automate-your-crm-data-entry-completely":
    "https://site2crm.io/blog/automate-your-crm-data-entry-completely",
  "what-a-98-lighthouse-score-actually-means-for-your-business":
    "https://www.axiondeepdigital.com/blog/what-a-98-lighthouse-score-actually-means-for-your-business",
  "why-your-website-needs-seo-from-day-one":
    "https://www.axiondeepdigital.com/blog/why-your-website-needs-seo-from-day-one",
  "the-real-cost-of-a-slow-website":
    "https://www.axiondeepdigital.com/blog/the-real-cost-of-a-slow-website",
  "founders-are-wasting-2000-a-month-on-software":
    "https://made4founders.com/blog/founders-are-wasting-2000-a-month-on-software",
  "compliance-deadlines-that-catch-founders-off-guard":
    "https://made4founders.com/blog/compliance-deadlines-that-catch-founders-off-guard",
  "first-time-founder-toolkit-what-you-actually-need":
    "https://made4founders.com/blog/first-time-founder-toolkit-what-you-actually-need",
  "we-built-a-free-ai-seo-audit-tool-here-is-what-we-learned":
    "https://www.axiondeepdigital.com/blog/we-built-a-free-ai-seo-audit-tool-here-is-what-we-learned",
};
