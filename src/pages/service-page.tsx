import { Link } from "@tanstack/react-router";
import DiagnosticCta from "../components/sections/diagnostic-cta";
import ImagePlaceholder from "../components/ui/image-placeholder";
import { SERVICES, type ServiceOffering } from "../data/services";

interface ServicePageProps {
  slug: ServiceOffering["slug"];
}

export default function ServicePage({ slug }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === slug) ?? SERVICES[0];
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      {/* Hero Strip */}
      <section className="service-hero">
        <div>
          <div className="service-hero-badges">
            <span className="badge-accent">{service.format}</span>
            <span className="chip">{service.targetBuyer}</span>
            <span className="eyebrow muted">{service.pillarLabel}</span>
          </div>

          <h1 className="display-xl" style={{ marginTop: "var(--space-4)" }}>
            {service.name}
          </h1>
          <p className="body-l muted" style={{ marginTop: "var(--space-4)", maxWidth: "620px" }}>
            {service.tagline}
          </p>

          <div className="hero-actions">
            <a href="#diagnostic" className="btn btn-primary">
              Book a 30-Min Diagnostic
            </a>
            <a href="#timeline" className="btn btn-secondary">
              See {service.format === "Managed Retainer" ? "5-Stage Process" : "Timeline"}
            </a>
          </div>

          <div className="service-metrics-grid">
            {service.metrics.map((m) => (
              <div key={m.label} className="metric-box">
                <span className="metric-val">{m.value}</span>
                <span className="caption muted">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <ImagePlaceholder
            label={service.imagePlaceholderLabel}
            aspectRatio={service.imagePlaceholderAspect}
            caption="Visual placeholder · Service architecture or hero illustration"
          />
        </div>
      </section>

      {/* The Visual Architecture / 5-Step Horizontal Timeline */}
      <section className="section light" id="timeline">
        <div className="section-head">
          <p className="eyebrow accent">{service.timelineEyebrow}</p>
          <h2 className="display-l">{service.timelineTitle}</h2>
          <p className="body-l muted section-sub">{service.summary}</p>
        </div>

        <ol className="h-timeline">
          {service.timeline.map((step) => (
            <li key={step.when} className="h-timeline-step">
              <span className="mono h-timeline-when">{step.when}</span>
              <h3 className="subheading">{step.title}</h3>
              <p className="body muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Under-the-Hood Stack */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow accent">Under-the-Hood Stack</p>
          <h2 className="display-l">
            Production &amp; open-source tooling we wire in.
          </h2>
          <p className="body-l muted section-sub">
            Zero vendor lock-in. We instrument proven observability, evaluation,
            and schema validation directly inside your environment.
          </p>
        </div>

        <div className="stack-grid">
          {service.stack.map((tool) => (
            <div key={tool.name} className="stack-card">
              <p className="eyebrow accent">Wired In</p>
              <h3 className="subheading">{tool.name}</h3>
              <p className="body muted">{tool.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board-Ready Deliverable Preview */}
      <section className="section light alt">
        <div className="deliverable-grid">
          <div>
            <p className="eyebrow accent">Board-Ready Deliverable Preview</p>
            <h2 className="display-l" style={{ marginTop: "var(--space-2)" }}>
              {service.deliverableTitle}
            </h2>
            <p className="body-l muted" style={{ marginTop: "var(--space-4)" }}>
              {service.deliverableSummary}
            </p>
            <div style={{ marginTop: "var(--space-8)" }}>
              <ImagePlaceholder
                label={`${service.name} — Executive Artifact Screenshot`}
                aspectRatio="16 / 9"
                caption="Visual placeholder · Optional full-resolution dashboard export"
              />
            </div>
          </div>

          <div className="artifact-mockup" aria-label={service.artifact.title}>
            <div className="artifact-header">
              <div>
                <p className="eyebrow accent">Kolofon.ai · Executive Artifact</p>
                <h3 className="subheading" style={{ marginTop: "4px" }}>
                  {service.artifact.title}
                </h3>
                <p className="caption muted">{service.artifact.subtitle}</p>
              </div>
              <span className="badge-accent">{service.format}</span>
            </div>

            <div className="artifact-kpis">
              {service.artifact.kpis.map((kpi) => (
                <div key={kpi.label} className="artifact-kpi">
                  <span className="mono muted" style={{ fontSize: "11px" }}>
                    {kpi.label}
                  </span>
                  <div
                    className={`subheading ${
                      kpi.tone === "accent"
                        ? "accent"
                        : kpi.tone === "ok"
                        ? "ok"
                        : ""
                    }`}
                    style={{ marginTop: "4px" }}
                  >
                    {kpi.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="artifact-rows">
              <div className="artifact-row head">
                <span>{service.artifact.columns[0]}</span>
                <span>{service.artifact.columns[1]}</span>
                <span>{service.artifact.columns[2]}</span>
              </div>
              {service.artifact.rows.map((row) => (
                <div key={row[0]} className="artifact-row">
                  <span>{row[0]}</span>
                  <span className="muted">{row[1]}</span>
                  <span className="ok">{row[2]}</span>
                </div>
              ))}
            </div>

            <p className="caption muted" style={{ marginTop: "var(--space-4)" }}>
              {service.artifact.footnote}
            </p>
          </div>
        </div>
      </section>

      {/* Related Offerings */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow accent">Next in Your Architecture</p>
          <h2 className="display-l">Pair with other sprints &amp; retainers.</h2>
        </div>
        <div className="matrix-grid">
          {related.map((r) => (
            <article key={r.slug} className="service-card">
              <div>
                <div className="service-card-meta">
                  <span className="badge-accent">{r.format}</span>
                  <span className="chip">{r.targetBuyer}</span>
                </div>
                <h3 className="subheading" style={{ marginTop: "var(--space-4)" }}>
                  {r.name}
                </h3>
                <p className="body muted" style={{ marginTop: "var(--space-2)" }}>
                  {r.summary}
                </p>
              </div>
              <Link
                to={`/services/${r.slug}` as "/services/ai-cost-audit"}
                className="btn btn-secondary btn-sm"
                style={{ alignSelf: "flex-start" }}
              >
                Explore {r.shortName} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <DiagnosticCta />
    </main>
  );
}

