import { useState } from "react";
import { COST_LEAKS, RELIABILITY_LEAKS } from "../../data/services";

type LeakTab = "all" | "cost" | "reliability";

export default function ProblemLeaks() {
  const [tab, setTab] = useState<LeakTab>("all");

  const items =
    tab === "cost"
      ? COST_LEAKS
      : tab === "reliability"
      ? RELIABILITY_LEAKS
      : [...COST_LEAKS, ...RELIABILITY_LEAKS];

  return (
    <section className="section" id="leaks">
      <div className="section-head">
        <p className="eyebrow accent">The Production Reality (Why Teams Stall)</p>
        <h2 className="display-l">Where Production AI Breaks.</h2>
        <p className="body-l muted section-sub">
          Separate the budget leaks from the trust leaks—we engineer fixes for
          both across your existing stack.
        </p>
      </div>

      <div className="tabs-row" role="tablist" aria-label="Production AI leak categories">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "all"}
          className={`tab-btn ${tab === "all" ? "active" : ""}`}
          onClick={() => setTab("all")}
        >
          All 6 Leaks
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "cost"}
          className={`tab-btn ${tab === "cost" ? "active" : ""}`}
          onClick={() => setTab("cost")}
        >
          Cost Leaks (3)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "reliability"}
          className={`tab-btn ${tab === "reliability" ? "active" : ""}`}
          onClick={() => setTab("reliability")}
        >
          Reliability Leaks (3)
        </button>
      </div>

      <ul className="leaks">
        {items.map((item) => (
          <li key={item.code} className="leak-card">
            <div className="leak-card-top">
              <span className="mono accent">{item.code}</span>
              <span className="chip">{item.category}</span>
            </div>
            <h3 className="subheading">{item.title}</h3>
            <p className="body muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

