import { FAQS } from "../../data/services";

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="section-head">
        <p className="eyebrow accent">Questions</p>
        <h2 className="display-l">What buyers ask us first.</h2>
      </div>
      <div>
        {FAQS.map((item) => (
          <details key={item.q} className="faq-item">
            <summary className="subheading">{item.q}</summary>
            <p className="body-l muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

