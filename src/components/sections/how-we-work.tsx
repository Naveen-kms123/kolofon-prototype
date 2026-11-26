import {
  ENGAGEMENT_PHASES,
  ENGINEERING_APPROACH,
  REALITY_POINTS,
} from "../../data/services";
import ImagePlaceholder from "../ui/image-placeholder";

export default function HowWeWork() {
  return (
    <section className="section light" id="how-we-work">
      <div className="approach">
        <div>
          <div className="section-head">
            <p className="eyebrow accent">How we work · Sprints vs. retainers</p>
            <h2 className="display-l">
              Start with a 2-week sprint, scale with managed governance.
            </h2>
            <p className="body-l muted section-sub">
              A low-friction path from rapid cost and safety wins to continuous
              enterprise AI operations.
            </p>
          </div>
          <div style={{ marginTop: "var(--space-8)" }}>
            <ImagePlaceholder
              label="Engagement Model — Week 0 Diagnostic → 2-Week Sprint → Ongoing Retainers"
              aspectRatio="4 / 3"
              caption="Visual placeholder · Replace with engineering / architecture photo or diagram"
            />
          </div>
        </div>

        <ol className="steps">
          {ENGAGEMENT_PHASES.map((p) => (
            <li key={p.n} className="step">
              <div className="step-head">
                <span className="step-n mono">{p.n}</span>
                <span className="eyebrow accent">{p.phase}</span>
              </div>
              <h3 className="heading">{p.title}</h3>
              <p className="body muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="slide2-container">
        <div className="section-head">
          <p className="eyebrow accent">Executive summary</p>
          <h2 className="display-l">
            Solving the two walls of enterprise production AI.
          </h2>
          <p className="body-l muted section-sub">
            Once AI moves past pilot stage, enterprises face runaway API bills and
            silent quality/safety failures.
          </p>
        </div>

        <div className="slide2-grid">
          <div className="slide2-col con">
            <div className="slide2-col-meta">
              <span className="slide2-chip con">✕ The Problem</span>
              <p className="eyebrow slide2-col-eyebrow con">
                The production reality · Why teams stall
              </p>
            </div>
            <div className="slide2-items">
              {REALITY_POINTS.map((item) => (
                <div key={item.title} className="slide2-item">
                  <h3 className="subheading slide2-item-title">
                    <span className="slide2-icon con" aria-hidden="true">✕</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="body muted slide2-item-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="slide2-col pro">
            <div className="slide2-col-meta">
              <span className="slide2-chip pro">✓ The Solution</span>
              <p className="eyebrow slide2-col-eyebrow pro">
                The Kolofon.ai engineering approach
              </p>
            </div>
            <div className="slide2-items">
              {ENGINEERING_APPROACH.map((item) => (
                <div key={item.title} className="slide2-item">
                  <h3 className="subheading slide2-item-title">
                    <span className="slide2-icon pro" aria-hidden="true">✓</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="body muted slide2-item-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

