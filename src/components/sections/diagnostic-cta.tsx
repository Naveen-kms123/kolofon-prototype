import { useState, type FormEvent } from "react";
import { SOLVE_FIRST_OPTIONS } from "../../data/services";

export default function DiagnosticCta() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const solveFirst = f.getAll("solveFirst").join(", ") || "Not specified";
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nCompany: ${f.get("company")}\nRole: ${f.get("role")}\nMonthly AI spend: ${f.get("spend")}\nLooking to solve first: ${solveFirst}\n\n${f.get("message")}`;
    window.location.href = `mailto:contact@kolofon.ai?subject=${encodeURIComponent(
      "Kolofon.ai 30-Min Architecture & Spend Diagnostic"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section cta" id="diagnostic">
      <div>
        <p className="eyebrow">Start here · Phase 1 (Week 0)</p>
        <h2 className="display-l">
          Ready to cut AI spend and{" "}
          <span className="hl">harden production reliability?</span>
        </h2>
        <p className="body-l cta-sub">
          Schedule a 30-minute technical scoping session with Kolofon.ai to
          benchmark your token unit economics, audit agent guardrails, or deploy
          a Maker-Checker layer in two weeks.
        </p>
        <p className="mono muted" style={{ marginTop: "var(--space-6)", color: "var(--ink-muted-light)" }}>
          contact@kolofon.ai · www.kolofon.ai
        </p>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <label className="field">
          <span className="caption">Name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span className="caption">Work email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span className="caption">Company</span>
          <input name="company" required autoComplete="organization" />
        </label>
        <label className="field">
          <span className="caption">Role</span>
          <input name="role" autoComplete="organization-title" placeholder="CFO, CTO, VP Eng..." />
        </label>

        <div className="span-2" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span className="caption">What are you looking to solve first?</span>
          <div className="checkbox-group">
            {SOLVE_FIRST_OPTIONS.map((option) => (
              <label key={option} className="checkbox-pill">
                <input type="checkbox" name="solveFirst" value={option} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <label className="field span-2">
          <span className="caption">Approximate monthly AI spend</span>
          <select name="spend" defaultValue="">
            <option value="" disabled>
              Choose a range
            </option>
            <option>Not sure yet</option>
            <option>Under ₹10 lakh / $12k</option>
            <option>₹10 lakh – ₹1 crore / $12k – $120k</option>
            <option>Over ₹1 crore / $120k+</option>
          </select>
        </label>

        <label className="field span-2">
          <span className="caption">Current stack &amp; context</span>
          <textarea
            name="message"
            rows={3}
            placeholder="LLM providers, agent workflows, RAG setup, or key reliability concerns..."
          />
        </label>

        <div className="span-2 form-foot">
          <button type="submit" className="btn btn-primary">
            Book a 30-Min Diagnostic
          </button>
          {sent && (
            <p className="caption" role="status">
              Your email app should open with the diagnostic request ready to send to contact@kolofon.ai.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

