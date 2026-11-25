export default function ExecutiveSummary() {
  return (
    <section className="section tension light">
      <div className="tension-head">
        <p className="eyebrow accent">Executive Summary</p>
        <p className="editorial">
          Solving the Two Walls of{" "}
          <span className="hl">Enterprise Production AI.</span>
        </p>
        <p className="body-l muted tension-sub">
          Once AI moves past pilot stage, enterprises face runaway API bills and
          silent quality/safety failures. We turn invisible LLM token burn into
          governed unit economics—and wrap production AI agents and RAG
          pipelines with enterprise-grade reliability.
        </p>
      </div>

      <div className="pillars-grid">
        <article className="pillar-card">
          <p className="eyebrow accent">Pillar 01</p>
          <h2 className="heading">AI Efficiency Intelligence (AI FinOps)</h2>
          <p className="body muted">
            Telemetry, Caching, Routing &amp; Quarterly Model Arbitrage
          </p>
        </article>
        <article className="pillar-card">
          <p className="eyebrow accent">Pillar 02</p>
          <h2 className="heading">AI Reliability Engineering</h2>
          <p className="body muted">
            Agent Hardening, Monthly Knowledge Hygiene &amp; Maker-Checker
            Guardrails
          </p>
        </article>
      </div>
    </section>
  );
}

