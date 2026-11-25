import { Link } from "@tanstack/react-router";
import { SERVICES } from "../../data/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Link to="/" aria-label="Kolofon.ai home">
          <img
            src="/logo-horizontal-reversed.svg"
            alt="Kolofon.ai"
            className="footer-logo"
          />
        </Link>
        <div className="footer-links">
          <Link to="/" className="caption muted">
            Home
          </Link>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}` as "/services/ai-cost-audit"}
              className="caption muted"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="caption muted">
        contact@kolofon.ai · Rooted in Kerala, built for the world. ©{" "}
        {new Date().getFullYear()} Kolofon Prosperity AI Pvt. Ltd.
      </p>
    </footer>
  );
}

