import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "../../data/services";

interface NavProps {
  onOpenEmergence: () => void;
}

export default function Nav({ onOpenEmergence }: NavProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const finopsServices = SERVICES.filter((s) => s.pillar === "finops");
  const reliabilityServices = SERVICES.filter((s) => s.pillar === "reliability");

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="nav">
      <Link to="/" className="nav-logo" aria-label="Kolofon.ai home">
        <img src="/logo-horizontal-reversed.svg" alt="Kolofon.ai" />
      </Link>

      <nav className="nav-links" aria-label="Primary">
        <div className="nav-dropdown-wrap" ref={dropdownRef}>
          <button
            type="button"
            className="nav-dropdown-trigger"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={() => setDropdownOpen((v) => !v)}
          >
            Services
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
              style={{
                transform: dropdownOpen ? "rotate(180deg)" : "none",
                transition: "transform 0.15s ease",
              }}
            >
              <path d="M2.5 4.5L6 8l3.5-3.5" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="nav-mega" role="menu">
              <div className="nav-mega-col">
                <p className="eyebrow accent nav-mega-head">
                  AI Efficiency Intelligence (AI FinOps)
                </p>
                {finopsServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}` as "/services/ai-cost-audit"}
                    className="nav-mega-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="nav-mega-title">{s.shortName}</span>
                    <span className="nav-mega-meta">{s.navMeta}</span>
                  </Link>
                ))}
              </div>

              <div className="nav-mega-col">
                <p className="eyebrow accent nav-mega-head">
                  AI Reliability Engineering
                </p>
                {reliabilityServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}` as "/services/agent-hardening"}
                    className="nav-mega-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="nav-mega-title">{s.shortName}</span>
                    <span className="nav-mega-meta">{s.navMeta}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <a href="/#how-we-work" className="nav-link">
          How We Work
        </a>

        <button
          type="button"
          className="nav-dropdown-trigger"
          onClick={onOpenEmergence}
        >
          Emergence
        </button>

        <a href="#diagnostic" className="btn btn-primary btn-sm">
          Book a Diagnostic
        </a>
      </nav>

      <div className="nav-mobile-actions">
        <a href="#diagnostic" className="btn btn-primary btn-sm">
          Book a Diagnostic
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-drawer" role="dialog" aria-label="Mobile navigation">
          <div className="nav-mobile-group">
            <p className="eyebrow accent">AI Efficiency Intelligence (AI FinOps)</p>
            {finopsServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}` as "/services/ai-cost-audit"}
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                <span className="body">{s.shortName}</span>
                <span className="mono muted">{s.format}</span>
              </Link>
            ))}
          </div>

          <div className="nav-mobile-group">
            <p className="eyebrow accent">AI Reliability Engineering</p>
            {reliabilityServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}` as "/services/agent-hardening"}
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                <span className="body">{s.shortName}</span>
                <span className="mono muted">{s.format}</span>
              </Link>
            ))}
          </div>

          <div className="nav-mobile-group">
            <a
              href="/#how-we-work"
              className="nav-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              <span className="body">How We Work (Sprints vs. Retainers)</span>
            </a>
            <button
              type="button"
              className="nav-mobile-link"
              style={{ background: "none", borderLeft: 0, borderRight: 0, borderTop: 0, textAlign: "left", color: "inherit", cursor: "pointer" }}
              onClick={() => {
                setMobileOpen(false);
                onOpenEmergence();
              }}
            >
              <span className="body">Emergence (Events &amp; Community)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
