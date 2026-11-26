export type PillarId = "finops" | "reliability";
export type EngagementFormat = "2-Week Sprint" | "Managed Retainer" | "4-Week Diagnostic";

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface TimelineStep {
  when: string;
  title: string;
  body: string;
}

export interface StackTool {
  name: string;
  role: string;
}

export interface ArtifactPreview {
  title: string;
  subtitle: string;
  kpis: { label: string; value: string; tone?: "accent" | "ok" }[];
  columns: [string, string, string];
  rows: [string, string, string][];
  footnote: string;
}

export interface ServiceOffering {
  slug:
    | "ai-cost-audit"
    | "caching-token-telemetry"
    | "model-arbitrage"
    | "agent-hardening"
    | "knowledge-hygiene"
    | "maker-checker";
  code: string;
  pillar: PillarId;
  pillarLabel: string;
  format: EngagementFormat;
  targetBuyer: string;
  name: string;
  shortName: string;
  navMeta: string;
  tagline: string;
  summary: string;
  heroMetricHighlight: string;
  metrics: ServiceMetric[];
  timelineEyebrow: string;
  timelineTitle: string;
  timeline: TimelineStep[];
  stack: StackTool[];
  deliverableTitle: string;
  deliverableSummary: string;
  artifact: ArtifactPreview;
  imagePlaceholderLabel: string;
  imagePlaceholderAspect: string;
}

export const SERVICES: ServiceOffering[] = [
  {
    slug: "ai-cost-audit",
    code: "ENTRY DIAGNOSTIC",
    pillar: "finops",
    pillarLabel: "AI Efficiency Intelligence",
    format: "4-Week Diagnostic",
    targetBuyer: "CFO · CTO · CIO",
    name: "4-Week AI Cost Audit",
    shortName: "AI Cost Audit",
    navMeta: "4 Weeks · Diagnostic",
    tagline: "Four weeks. A fixed scope. A plan finance and engineering can both sign.",
    summary:
      "The entry diagnostic for enterprises with unmapped multi-team spend. We map every workflow, model, and vendor, benchmark cheaper alternatives against your quality bar, and hand over a signed savings plan.",
    heroMetricHighlight: "Full spend record + tested savings plan in 4 weeks",
    metrics: [
      { value: "4 Weeks", label: "Fixed-scope diagnostic from billing connect to signed plan" },
      { value: "100%", label: "Spend mapped by workflow, model, vendor, and team" },
      { value: "Zero", label: "Quality regressions—every saving tested against your bar" },
    ],
    timelineEyebrow: "4-Week Diagnostic",
    timelineTitle: "From blind invoices to a board-ready savings plan.",
    timeline: [
      {
        when: "Week 1",
        title: "Billing & Telemetry Connect",
        body: "Connect to LLM provider billing, gateway logs, and cloud usage metadata across teams.",
      },
      {
        when: "Week 2",
        title: "Workflow & Prompt Mapping",
        body: "Interview product and engineering owners to attribute spend to specific features and departments.",
      },
      {
        when: "Week 3",
        title: "Offline Quality Benchmarking",
        body: "Test cheaper model routes, caching candidates, and prompt pruning against your own quality bar.",
      },
      {
        when: "Week 4 - Part 1",
        title: "Risk & Effort Sizing",
        body: "Quantify engineering effort, latency impact, and rollback safety for every proposed optimization.",
      },
      {
        when: "Week 4 - Part 2",
        title: "Executive Sign-Off Plan",
        body: "Deliver a prioritised implementation roadmap signed off by finance and engineering together.",
      },
    ],
    stack: [
      { name: "Langfuse / LangSmith", role: "Trace-level spend & latency attribution" },
      { name: "Promptfoo", role: "Offline accuracy & schema regression testing" },
      { name: "Ragas", role: "RAG faithfulness & retrieval quality baseline" },
      { name: "Provider Billing APIs", role: "OpenAI, Anthropic, Bedrock & Vertex reconciliation" },
    ],
    deliverableTitle: "Board-Ready Spend & Savings Plan",
    deliverableSummary:
      "You keep the full spend record, a tested savings estimate per change, and an implementation plan with owners and effort.",
    artifact: {
      title: "Enterprise AI Spend & Savings Ledger",
      subtitle: "4-Week Audit Deliverable · Finance & Engineering Sign-Off",
      kpis: [
        { label: "Mapped Spend", value: "100%", tone: "ok" },
        { label: "Top Leak", value: "Frontier Over-Use", tone: "accent" },
        { label: "Target Sprint", value: "Service I · 14 Days" },
      ],
      columns: ["Workflow", "Primary Leak", "Recommended Fix"],
      rows: [
        ["Support Triage", "Frontier model on simple routing", "Dynamic mini-model routing"],
        ["Policy Q&A RAG", "Uncached 8k-token system prompt", "Provider prompt caching"],
        ["Internal Search", "Repeated FAQ queries", "Redis semantic cache"],
      ],
      footnote: "Every recommendation includes tested quality parity and engineering effort.",
    },
    imagePlaceholderLabel: "AI Cost Audit — Multi-team spend attribution & roadmap visual",
    imagePlaceholderAspect: "16 / 10",
  },
  {
    slug: "caching-token-telemetry",
    code: "SERVICE I",
    pillar: "finops",
    pillarLabel: "AI Efficiency Intelligence",
    format: "2-Week Sprint",
    targetBuyer: "CFO · CTO · Engineering",
    name: "Caching and Token Telemetry Service",
    shortName: "Caching & Token Telemetry",
    navMeta: "2-Week Sprint",
    tagline: "Turn invisible LLM token burn into governed unit economics without degrading answer quality.",
    summary:
      "Deploy trace-level observability (Langfuse/LangSmith), prune bloated prompts, enable provider prompt caching (up to 90% off), and add semantic caching + dynamic model routing in 14 days.",
    heroMetricHighlight: "Up to 90% off cached input tokens",
    metrics: [
      { value: "Up to 90%", label: "Off cached input tokens via native provider prompt caching" },
      { value: "Up to 75%", label: "Token volume reduction on FAQs via Redis semantic cache" },
      { value: "Up to 60%", label: "Cost savings on mixed workloads via dynamic mini-model routing" },
      { value: "14 Days", label: "From blind month-end invoices to live unit-cost dashboards" },
    ],
    timelineEyebrow: "Days 1–14 Sprint",
    timelineTitle: "From blind month-end invoices to live unit-cost dashboards.",
    timeline: [
      {
        when: "Days 1–3",
        title: "Granular Telemetry & Baseline",
        body: "Instrument Langfuse/LangSmith across LLM, RAG & agent calls; tag every trace by feature, model, and department for live cost-per-transaction visibility.",
      },
      {
        when: "Days 4–5",
        title: "Audit & Prune Context Bloat",
        body: "Pinpoint wasted tokens in oversized system prompts, full-doc stuffing, redundant history, and verbose tool schemas; tighten retrieval payloads.",
      },
      {
        when: "Days 6–8",
        title: "Provider Prompt Caching",
        body: "Restructure static instructions, few-shot examples, and reference blocks into stable prefixes; verify cache pass-through savings on vendor invoices.",
      },
      {
        when: "Days 9–11",
        title: "Semantic Cache & Routing",
        body: "Deploy AI gateway with Redis semantic caching for repetitive queries + dynamic routing to fast mini-models for classification/extraction.",
      },
      {
        when: "Days 12–14",
        title: "Unit-Cost Dashboard & Alerts",
        body: "Benchmark post-sprint spend, latency, and hit rates against Day 1 baseline; hand over board-ready dashboard and Slack/email anomaly alerts.",
      },
    ],
    stack: [
      { name: "Langfuse / LangSmith", role: "Feature, model & department trace tagging" },
      { name: "Redis", role: "Semantic cache for repetitive FAQ & support queries" },
      { name: "AI Gateway", role: "Dynamic routing to fast mini-models" },
      { name: "Provider Prompt Caching", role: "Stable prefix structuring for up to 90% input discount" },
    ],
    deliverableTitle: "Board-Ready Unit-Cost Dashboard",
    deliverableSummary:
      "Live cost-per-transaction visibility by feature and department, cache hit-rate telemetry, and Slack/email spend anomaly alerts.",
    artifact: {
      title: "Unit-Cost & Cache Telemetry Dashboard",
      subtitle: "Day 14 Post-Sprint Benchmark vs. Day 1 Baseline",
      kpis: [
        { label: "Cached Input", value: "-90% Cost", tone: "accent" },
        { label: "FAQ Volume", value: "-75% Tokens", tone: "ok" },
        { label: "Mixed Routing", value: "-60% Spend", tone: "accent" },
      ],
      columns: ["Feature Trace", "Optimization", "Measured Impact"],
      rows: [
        ["Contract RAG", "Stable prefix prompt cache", "88% cache hit rate"],
        ["Customer FAQ Bot", "Redis semantic cache", "74% fewer LLM calls"],
        ["Ticket Classifier", "Mini-model dynamic route", "62% cost reduction"],
      ],
      footnote: "Slack & email anomaly alerts wired for per-feature spend spikes.",
    },
    imagePlaceholderLabel: "Service I — Telemetry & Semantic Caching Gateway Architecture",
    imagePlaceholderAspect: "16 / 10",
  },
  {
    slug: "model-arbitrage",
    code: "SERVICE II",
    pillar: "finops",
    pillarLabel: "AI Efficiency Intelligence",
    format: "Managed Retainer",
    targetBuyer: "CTO · VP Engineering · CFO",
    name: "Quarterly 'Model-Arbitrage' Switchover Retainer",
    shortName: "Quarterly Model-Arbitrage Switchover",
    navMeta: "Managed Retainer",
    tagline: "Continuously capture price-performance breakthroughs across new LLM releases with zero production regressions.",
    summary:
      "Safely migrate workloads to cheaper, newer models every quarter using golden datasets, offline Promptfoo/Ragas replay, shadow testing, and 5% → 25% → 50% → 100% canary rollouts.",
    heroMetricHighlight: "Zero-regression quarterly model migrations",
    metrics: [
      { value: "1k–5k", label: "Anonymized production interactions locked into golden datasets" },
      { value: "0 ms", label: "Added user latency during 3–7 day shadow mode testing" },
      { value: "5%→100%", label: "Incremental canary rollout with millisecond auto-rollback" },
      { value: "14-Day", label: "Soak window with legacy API keys wired as hot standby" },
    ],
    timelineEyebrow: "Stages 1–5 Retainer",
    timelineTitle: "Zero-regression model migrations, every quarter.",
    timeline: [
      {
        when: "Stage 01",
        title: "Golden Dataset Baseline",
        body: "Extract 1,000–5,000 anonymized production interactions. Lock baseline pass rates for JSON formatting, instruction adherence, latency, and RAG faithfulness using Promptfoo + Ragas.",
      },
      {
        when: "Stage 02",
        title: "Offline Replay & Re-Tuning",
        body: "Replay the exact golden dataset through cheaper candidate models offline. Tune system prompts, few-shots, and temperature until candidate matches or beats legacy with zero critical failures.",
      },
      {
        when: "Stage 03",
        title: "Shadow Mode · 3–7 Days",
        body: "Duplicate live gateway traffic silently to both models. Run async daily batch evals (Promptfoo + Ragas) on fresh production inputs with zero added user latency.",
      },
      {
        when: "Stage 04",
        title: "Canary Rollout + Auto-Rollback",
        body: "Shift traffic incrementally (5% → 25% → 50%) while monitoring JSON parse errors, tool failures, and p95 latency. Automated millisecond kill-switch snaps 100% traffic back on any threshold dip.",
      },
      {
        when: "Stage 05",
        title: "Full Cutover & Hot Standby",
        body: "Ramp to 100% on the new model while keeping legacy API keys wired as a one-click fallback for 2 weeks, backed by scheduled daily/weekly batch regression audits.",
      },
    ],
    stack: [
      { name: "Promptfoo", role: "Matrix & JSON schema regression evals" },
      { name: "Ragas", role: "RAG faithfulness & context precision scoring" },
      { name: "AI Gateway", role: "Shadow traffic duplication & canary routing" },
      { name: "Auto-Rollback Switch", role: "Millisecond revert on p95 latency or parse errors" },
    ],
    deliverableTitle: "Quarterly Parity & Cutover Report",
    deliverableSummary:
      "Full offline and shadow evaluation scorecards proving the cheaper model matches or beats legacy accuracy before cutover.",
    artifact: {
      title: "Quarterly Model-Arbitrage Parity Scorecard",
      subtitle: "Golden Dataset · 3,200 Traces · Candidate vs. Legacy Model",
      kpis: [
        { label: "JSON Schema", value: "99.8% Pass", tone: "ok" },
        { label: "RAG Faithfulness", value: "+1.4% Lift", tone: "ok" },
        { label: "Canary Status", value: "100% Cutover", tone: "accent" },
      ],
      columns: ["Eval Gate", "Legacy Baseline", "Candidate Result"],
      rows: [
        ["Instruction Adherence", "97.2%", "97.6% · Parity"],
        ["p95 Latency", "1,840 ms", "910 ms · -50%"],
        ["Batch Regression Audit", "Scheduled", "0 Critical Failures"],
      ],
      footnote: "Legacy API keys retained in hot standby for 14-day soak window.",
    },
    imagePlaceholderLabel: "Service II — Shadow Mode & Canary Cutover Pipeline",
    imagePlaceholderAspect: "16 / 10",
  },
  {
    slug: "agent-hardening",
    code: "SERVICE III",
    pillar: "reliability",
    pillarLabel: "AI Reliability Engineering",
    format: "2-Week Sprint",
    targetBuyer: "CTO · VP Engineering",
    name: "Agent Reliability Hardening",
    shortName: "Agent Reliability Hardening",
    navMeta: "2-Week Sprint",
    tagline: "Wrap existing AI agents with practical production 'seatbelts'—without rewriting core product logic.",
    summary:
      "Wrap agents with hard spend ceilings, loop-detection circuit breakers, Pydantic/Zod tool schema validation, provider fallbacks, and human approval gates in 14 days.",
    heroMetricHighlight: "Hard spend ceilings & loop circuit breakers in 14 days",
    metrics: [
      { value: "14 Days", label: "From unguarded agents to stress-tested production seatbelts" },
      { value: ">3 Retries", label: "Auto-halt circuit breakers on circular reasoning or tool loops" },
      { value: "1-Step", label: "Auto-retry on Pydantic/Zod schema validation failures" },
      { value: "Zero", label: "Core product logic rewrites required" },
    ],
    timelineEyebrow: "Days 1–14 Sprint",
    timelineTitle: "Production seatbelts for autonomous agents.",
    timeline: [
      {
        when: "Days 1–3",
        title: "Tool Risk Mapping & Spend Ceilings",
        body: "Separate safe read-only lookups from high-risk write tools: CRM updates, emails, refunds. Enforce hard token, step, and ₹/$ ceilings per user and session.",
      },
      {
        when: "Days 4–5",
        title: "Loop-Detection Circuit Breakers",
        body: "Deploy runtime monitors to detect circular reasoning or repetitive failing tool calls — such as >3 retries — and auto-halt execution with a safe fallback response.",
      },
      {
        when: "Days 6–8",
        title: "Deterministic Schema Validation",
        body: "Enforce code-level Pydantic or Zod validators between the LLM and downstream DBs/APIs; catch malformed JSON or out-of-range fields with a 1-step auto-retry.",
      },
      {
        when: "Days 9–11",
        title: "Provider Fallbacks & Human Gates",
        body: "Wire AI gateway failover to backup models on timeouts/rate limits, plus mandatory human-in-the-loop approval gates for payouts, deletions, or bulk sends.",
      },
      {
        when: "Days 12–14",
        title: "Pre-Launch Stress Drills & Alerts",
        body: "Fire scripted staging attacks—looping prompts, malformed inputs, simulated provider outages—and hand over CTO launch-readiness dashboards and Slack/email alerts.",
      },
    ],
    stack: [
      { name: "Pydantic / Zod", role: "Deterministic tool schema validation" },
      { name: "Loop Circuit Breakers", role: "Runtime retry & circular reasoning halt" },
      { name: "AI Gateway Failover", role: "Automatic backup model routing on timeouts" },
      { name: "Human-in-the-Loop Gates", role: "Approval workflows for high-risk write tools" },
    ],
    deliverableTitle: "CTO Launch-Readiness Dashboard",
    deliverableSummary:
      "Verified stress-drill results across looping prompts, malformed tool payloads, and provider outages—plus live Slack/email guardrail alerts.",
    artifact: {
      title: "Agent Launch-Readiness & Guardrail Report",
      subtitle: "Day 14 Stress Drill Verification",
      kpis: [
        { label: "Loop Attacks", value: "100% Halted", tone: "ok" },
        { label: "Schema Errors", value: "Auto-Repaired", tone: "ok" },
        { label: "Spend Ceiling", value: "Enforced", tone: "accent" },
      ],
      columns: ["Drill Scenario", "Guardrail Triggered", "Outcome"],
      rows: [
        ["Infinite Tool Retry", "Circuit breaker (>3 retries)", "Safe fallback returned"],
        ["Malformed Refund JSON", "Pydantic validator + 1 retry", "Blocked invalid API write"],
        ["Primary Provider 429", "AI Gateway failover", "Routed to backup in <1s"],
      ],
      footnote: "Human approval gate active for payouts, deletions, and bulk sends.",
    },
    imagePlaceholderLabel: "Service III — Agent Circuit Breakers & Tool Validation Flow",
    imagePlaceholderAspect: "16 / 10",
  },
  {
    slug: "knowledge-hygiene",
    code: "SERVICE IV",
    pillar: "reliability",
    pillarLabel: "AI Reliability Engineering",
    format: "Managed Retainer",
    targetBuyer: "CTO · VP Engineering · Product",
    name: "Monthly Knowledge Hygiene & Retrieval Ops Retainer",
    shortName: "Monthly Knowledge Hygiene & Retrieval Ops",
    navMeta: "Managed Retainer",
    tagline: "Act as the dedicated caretaker for your RAG knowledge base and vector store so answers stay accurate month after month.",
    summary:
      "Keep RAG accurate post-launch via weekly contradiction audits, stale embedding purges, Ragas retrieval hit-rate tracking, and missing-knowledge backlogs.",
    heroMetricHighlight: "Weekly contradiction audits & Ragas retrieval ops",
    metrics: [
      { value: "Weekly", label: "Contradiction audits on new and existing PDFs, policies, and SOPs" },
      { value: "Top-k", label: "Live Ragas retrieval hit-rate monitoring to catch search decay early" },
      { value: "5–10", label: "Prioritized Missing Knowledge FAQs surfaced from failed queries monthly" },
      { value: "1-Page", label: "Monthly Executive Knowledge Health Scorecard for leadership" },
    ],
    timelineEyebrow: "Stages 1–5 Retainer",
    timelineTitle: "Stop RAG hallucinations at the root, every month.",
    timeline: [
      {
        when: "Stage 01",
        title: "Weekly Contradiction Audits",
        body: "Scan newly uploaded and existing PDFs, policies, and help articles weekly to flag conflicting facts — such as clashing leave rules or outdated tariffs — before ingestion.",
      },
      {
        when: "Stage 02",
        title: "Stale Embedding Purge & Chunk Repair",
        body: "Purge expired policies, superseded SOPs, and orphaned vectors. Audit table, multi-page PDF, and fine-print chunking so critical caveats stay attached to rules.",
      },
      {
        when: "Stage 03",
        title: "Live Retrieval Hit-Rate Monitoring",
        body: "Track weekly Ragas retrieval scores and live search logs to verify top-k passage relevance—stopping hallucinations at the root before users notice.",
      },
      {
        when: "Stage 04",
        title: "Unanswered Query Backlog",
        body: "Cluster failed, escalated, or downvoted interactions into a prioritized 'Missing Knowledge List' identifying the exact 5–10 FAQs or policy clarifications to publish next.",
      },
      {
        when: "Stage 05",
        title: "Monthly Knowledge Health Scorecard",
        body: "Re-index approved updates, re-run benchmark questions to confirm retrieval lift, and deliver a 1-page executive scorecard tracking conflicts resolved and hit-rate trends.",
      },
    ],
    stack: [
      { name: "Ragas", role: "Weekly retrieval hit-rate & context precision" },
      { name: "Contradiction Scanner", role: "Pre-ingestion conflict detection across PDFs/SOPs" },
      { name: "Vector Store Hygiene", role: "Stale embedding purge & multi-page chunk repair" },
      { name: "Failure Clustering", role: "Downvoted/escalated query gap analysis" },
    ],
    deliverableTitle: "1-Page Executive Knowledge Health Scorecard",
    deliverableSummary:
      "Tracks conflicts resolved, stale records purged, retrieval hit-rate trends, and top 5–10 knowledge gaps closed.",
    artifact: {
      title: "1-Page Executive Knowledge Health Scorecard",
      subtitle: "Monthly Retrieval Ops Deliverable",
      kpis: [
        { label: "Conflicts Resolved", value: "14 Flagged", tone: "ok" },
        { label: "Stale Vectors Purged", value: "1,240", tone: "accent" },
        { label: "Retrieval Hit-Rate", value: "94.2% (+8%)", tone: "ok" },
      ],
      columns: ["Hygiene Area", "Action Completed", "Verified Impact"],
      rows: [
        ["Tariff PDF Conflict", "Quarantined superseded 2024 tariff", "0 conflicting citations"],
        ["Fine-Print Chunking", "Repaired multi-page table splits", "Caveats attached to rules"],
        ["Missing Knowledge List", "Top 7 escalated FAQs drafted", "Escalations reduced"],
      ],
      footnote: "Benchmark questions re-run post-indexing to confirm retrieval lift.",
    },
    imagePlaceholderLabel: "Service IV — RAG Contradiction Audit & Vector Hygiene Loop",
    imagePlaceholderAspect: "16 / 10",
  },
  {
    slug: "maker-checker",
    code: "SERVICE V",
    pillar: "reliability",
    pillarLabel: "AI Reliability Engineering",
    format: "2-Week Sprint",
    targetBuyer: "CTO · Compliance · Legal",
    name: "The 'AI Maker-Checker' Layer",
    shortName: "The \"AI Maker-Checker\" Layer",
    navMeta: "2-Week Sprint",
    tagline: "Bolt a lightweight, invisible <1s gatekeeper behind your existing AI to catch and repair high-stakes mistakes before users see them.",
    summary:
      "Non-invasive 60–100 lines of Python or TypeScript middleware with zero core AI rewrite. Combines ~5ms deterministic code checks with a cross-family mini-model verifier and silent auto-repair.",
    heroMetricHighlight: "<1s added latency · 60–100 lines of middleware",
    metrics: [
      { value: "<1s", label: "Added latency for high-stakes checks — 0ms bypass for casual chat" },
      { value: "~5 ms", label: "Stage 1 deterministic code check at ₹0 cost" },
      { value: "60–100", label: "Lines of Python or TypeScript middleware—zero core AI rewrite" },
      { value: "1 Retry", label: "Hard cap on silent auto-repair before clean human/safe fallback" },
    ],
    timelineEyebrow: "Architecture & Sprint",
    timelineTitle: "How the <1s two-stage gatekeeper works.",
    timeline: [
      {
        when: "Step 01",
        title: "Trigger Routing · 2-Hour Workshop",
        body: "Casual chat bypasses at 0ms delay. High-stakes intents like rupee amounts, refunds, and legal commitments enter the Checker funnel against 10–15 non-negotiable rules.",
      },
      {
        when: "Step 02",
        title: "Stage 1: Code Check · ~5 ms",
        body: "Deterministic code catches black-and-white violations: forbidden phrases, missing GST or disclaimers, PII leaks like Aadhaar, PAN, and phone, and math errors.",
      },
      {
        when: "Step 03",
        title: "Stage 2: Cross-Family Mini-Model",
        body: "A fast, skeptical mini-model (Temp = 0, from a different model family to avoid shared blind spots) verifies every claim and figure against retrieved source documents.",
      },
      {
        when: "Step 04",
        title: "Silent Auto-Repair · Cap: 1 Retry",
        body: "Flawed drafts trigger one instant rewrite with exact flaw feedback, re-verified by the Checker. If still flawed, traffic escalates cleanly to human or safe fallback.",
      },
      {
        when: "Step 05",
        title: "Middleware & Scorecard Handover",
        body: "Deployed in 60–100 lines of Python/TypeScript middleware returning a clean JSON/Pydantic pass/fail switch, buffering streaming replies behind 'Checking latest policy details...'.",
      },
    ],
    stack: [
      { name: "Python / TypeScript Middleware", role: "60–100 lines wrapping existing AI with zero rewrite" },
      { name: "Pydantic / JSON Switch", role: "Clean pass/fail contract & streaming buffer" },
      { name: "Deterministic Rules Engine", role: "~5ms PII, GST & math checks" },
      { name: "Cross-Family Mini-Model", role: "Temp = 0 fact verification against source docs" },
    ],
    deliverableTitle: "The 'Errors Prevented' Executive Scorecard",
    deliverableSummary:
      "Automated monthly proof of ROI logging every intercepted draft, rule violated, and auto-repaired outcome before customers saw them.",
    artifact: {
      title: "The 'Errors Prevented' Executive Scorecard",
      subtitle: "Automated Monthly ROI & Compliance Proof",
      kpis: [
        { label: "Errors Caught", value: "380 Drafts", tone: "accent" },
        { label: "Silent Repairs", value: "94.7%", tone: "ok" },
        { label: "Stage 1 Latency", value: "~5 ms", tone: "ok" },
      ],
      columns: ["Rule Violated", "Intercepted Drafts", "Resolution"],
      rows: [
        ["Missing GST / Disclaimer", "142 drafts", "Silently auto-repaired"],
        ["PII Leak", "89 drafts", "Masked & re-verified"],
        ["Source Doc Mismatch", "149 drafts", "Rewritten or escalated"],
      ],
      footnote: "Example outcome: '380 policy and pricing errors silently caught and fixed before customers saw them.'",
    },
    imagePlaceholderLabel: "Service V — Two-Stage Maker-Checker Middleware Architecture",
    imagePlaceholderAspect: "16 / 10",
  },
];

export const COST_LEAKS = [
  {
    code: "01",
    category: "Cost Leak",
    title: "Token Bloat",
    body: "Oversized system prompts, full-doc stuffing, redundant conversation history, and verbose tool schemas inflating every call.",
  },
  {
    code: "02",
    category: "Cost Leak",
    title: "Uncached Prompts",
    body: "The same static instructions, few-shot examples, and reference blocks sent—and paid for—on every single API call.",
  },
  {
    code: "03",
    category: "Cost Leak",
    title: "Frontier Over-Reliance",
    body: "Expensive frontier models handling classification, extraction, and simple FAQs that fast mini-models solve at a fraction of the cost.",
  },
];

export const RELIABILITY_LEAKS = [
  {
    code: "04",
    category: "Reliability Leak",
    title: "Runaway Agent Loops",
    body: "Agents stuck in circular reasoning or retry loops burning budgets overnight or executing unvalidated write actions on downstream APIs.",
  },
  {
    code: "05",
    category: "Reliability Leak",
    title: "Rotting RAG Knowledge Bases",
    body: "Conflicting PDFs, superseded SOPs, and stale vector embeddings quietly degrading retrieval accuracy and causing hallucinations.",
  },
  {
    code: "06",
    category: "Reliability Leak",
    title: "Unverified High-Stakes Outputs",
    body: "Unchecked pricing, refund, legal, or PII-exposed drafts reaching customers directly without deterministic or cross-model verification.",
  },
];

export const ENGAGEMENT_PHASES = [
  {
    n: "01",
    phase: "Phase 1 · Week 0",
    title: "30-Min Architecture & Spend Diagnostic",
    body: "Review current LLM providers, agent workflows, RAG architecture, and monthly API spend to select the highest-ROI starting sprint.",
    who: "CFO · CTO · Engineering",
  },
  {
    n: "02",
    phase: "Phase 2 · Weeks 1–2",
    title: "Fixed-Scope Implementation Sprint",
    body: "Deploy Service I (Caching & Telemetry), Service III (Agent Hardening), or Service V (Maker-Checker) in 14 days with zero core product rewrite.",
    who: "CTO · Engineering",
  },
  {
    n: "03",
    phase: "Phase 3 · Ongoing",
    title: "Managed FinOps & Retrieval Retainers",
    body: "Transition into Service II (Quarterly Model-Arbitrage) and Service IV (Monthly Knowledge Hygiene) for compounding savings and sustained accuracy.",
    who: "CFO · CTO · Product",
  },
];

export const ENGINEERING_APPROACH = [
  {
    title: "Fixed-Scope 2-Week Sprints",
    body: "Rapidly instrument telemetry, caching, agent guardrails, or Maker-Checker middleware without rewriting core application logic.",
  },
  {
    title: "Continuous Managed Retainers",
    body: "Ongoing quarterly model-arbitrage migrations and monthly RAG knowledge hygiene so cost and accuracy never drift.",
  },
  {
    title: "Zero-Regression Quality Gates",
    body: "Every optimization is benchmarked with Promptfoo, Ragas, and Pydantic schemas before touching production traffic.",
  },
  {
    title: "Board-Ready Unit Economics & ROI",
    body: "Executive dashboards tracking cost-per-transaction, cache hit rates, retrieval health, and compliance errors prevented.",
  },
];

export const REALITY_POINTS = [
  {
    title: "Invisible Token Burn",
    body: "Oversized frontier models, uncached system prompts, and bloated RAG contexts inflate invoices without per-workflow visibility.",
  },
  {
    title: "Model Lock-In & Migration Fear",
    body: "Teams avoid upgrading to newer, cheaper models because they lack regression testing across accuracy, JSON schemas, and latency.",
  },
  {
    title: "Runaway Agent Loops & Tool Risks",
    body: "Agents get stuck in retry loops, burn budgets overnight, or execute unvalidated write actions on downstream APIs.",
  },
  {
    title: "Rotting Knowledge & Hallucinations",
    body: "Conflicting PDFs, stale vector embeddings, and unverified high-stakes outputs erode user trust and create compliance exposure.",
  },
];

export const FAQS = [
  {
    q: "Will cutting cost hurt quality?",
    a: "No change ships without being tested against your own quality benchmarks. If a cheaper setup does worse, we don't recommend it.",
  },
  {
    q: "Do you need access to our data?",
    a: "We need billing and usage metadata, not your customers' data. Where prompts or outputs are needed for quality testing, we work inside your environment under your controls.",
  },
  {
    q: "Which models and vendors do you work with?",
    a: "All the major model providers, open-weight models and the main cloud platforms. We have no reseller deals, so our advice is independent.",
  },
];

export const SOLVE_FIRST_OPTIONS = [
  "Reduce LLM API Spend",
  "Safely Switch to Cheaper Models",
  "Harden Production Agents",
  "Fix RAG Accuracy / Stale Docs",
  "Add Policy & Compliance Guardrails",
];

