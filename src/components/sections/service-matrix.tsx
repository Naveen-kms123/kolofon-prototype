import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SERVICES, type EngagementFormat } from "../../data/services";

type MatrixTab = EngagementFormat;

const TABS: { id: MatrixTab; label: string; desc: string }[] = [
  {
    id: "2-Week Sprint",
    label: "2-Week Fixed-Scope Sprints",
    desc: "Fast, non-invasive implementation: Caching & Telemetry, Agent Hardening, and the Maker-Checker Layer.",
  },
  {
    id: "Managed Retainer",
    label: "Managed Retainers",
    desc: "Ongoing governance: Quarterly Model-Arbitrage Switchover and Monthly Knowledge Hygiene & Retrieval Ops.",
  },
  {
    id: "4-Week Diagnostic",
    label: "4-Week AI Cost Audit",
    desc: "Entry diagnostic for enterprises with unmapped multi-team spend.",
  },
];

export default function ServiceMatrix() {
  const [activeTab, setActiveTab] = useState<MatrixTab>("2-Week Sprint");
  const currentTab = TABS.find((t) => t.id === activeTab)!;
  const filtered = SERVICES.filter((s) => s.format === activeTab);

  return (
    <section className="section light alt" id="service-matrix">
      <div className="section-head">
        <p className="eyebrow accent">Service architecture</p>
        <h2 className="display-l">
          Modular offerings across two core pillars.
        </h2>
        <p className="body-l muted section-sub">
          Mix and match fixed-duration implementation sprints with ongoing
          managed operations—or start with a 4-week cost audit.
        </p>
      </div>

      <div className="tabs-row" role="tablist" aria-label="Service engagement formats">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={activeTab === t.id}
            className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="body muted" style={{ marginTop: "var(--space-4)" }}>
        {currentTab.desc}
      </p>

      <div className="matrix-grid">
        {filtered.map((s) => (
          <article key={s.slug} className="service-card">
            <div>
              <div className="service-card-meta">
                <span className="badge-accent">{s.format}</span>
              </div>
              <p
                className="eyebrow accent"
                style={{ marginTop: "var(--space-4)" }}
              >
                {s.code} · {s.pillarLabel}
              </p>
              <h3 className="heading" style={{ marginTop: "var(--space-2)" }}>
                {s.name}
              </h3>
              <p className="body muted" style={{ marginTop: "var(--space-3)" }}>
                {s.summary}
              </p>

              <ul className="service-tags">
                {s.stack.map((tool) => (
                  <li key={tool.name} className="chip">
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-metric-line">
              <span className="mono accent" style={{ fontWeight: 700 }}>
                {s.heroMetricHighlight}
              </span>
              <div style={{ marginTop: "var(--space-3)" }}>
                <Link
                  to={`/services/${s.slug}` as "/services/caching-token-telemetry"}
                  className="btn btn-primary btn-sm"
                >
                  View Architecture &amp; Deliverable →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

