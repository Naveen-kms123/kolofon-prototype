import { ENGAGEMENT_PHASES, ENGINEERING_APPROACH } from "../../data/services";
import ImagePlaceholder from "../ui/image-placeholder";

export default function HowWeWork() {
  return (
    <section className="section light" id="how-we-work">
      <div className="approach">
        <div>
          <div className="section-head">
            <p className="eyebrow accent">How We Work · Sprints vs. Retainers</p>
            <h2 className="display-l">
              Start with a 2-Week Sprint, Scale with Managed Governance.
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
              <span className="chip">{p.who}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="approach-pillars">
        {ENGINEERING_APPROACH.map((item) => (
          <div key={item.title} className="approach-pillar">
            <p className="eyebrow accent">✓ Kolofon.ai Standard</p>
            <h3 className="subheading">{item.title}</h3>
            <p className="body muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

