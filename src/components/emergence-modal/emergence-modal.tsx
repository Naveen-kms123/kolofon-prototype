import { useState } from "react";
import Dialog from "../ui/dialog/dialog";
import "./emergence-modal.css";

interface EmergenceModalProps {
  onClose?: () => void;
  onExplore?: () => void;
  onViewAgenda?: () => void;
}

export default function EmergenceModal({
  onClose,
  onExplore,
  onViewAgenda,
}: EmergenceModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleExplore = () => {
    setIsOpen(false);
    onExplore?.();
  };

  const handleAgenda = () => {
    setIsOpen(false);
    onViewAgenda?.();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={handleClose}
      ariaLabelledBy="emergence-title"
      ariaDescribedBy="emergence-desc"
      closeAriaLabel="Close Emergence 2026 Announcement"
      className="emergence-modal"
    >
      <div className="emergence-content">
        <div className="emergence-brand">
          <div className="emergence-brand-wrap">
            <div className="emergence-logo-row">
              <span className="emergence-logo-text">emergence</span>
              <svg
                className="emergence-leaf"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 4c-5.5 0-11 2.5-14.5 7.5S2 21 2 21s6.5 1 11.5-2.5S20 9.5 20 4z"
                  fill="var(--accent)"
                />
              </svg>
            </div>
            <span className="emergence-year">2026</span>
          </div>
        </div>
        <h2 id="emergence-title" className="emergence-title">
          Real
          <br />
          problems.
          <br />
          <span className="accent">Working AI.</span>
        </h2>

        <p id="emergence-desc" className="emergence-desc">
          A 5-Day Executive Strategy Retreat and a parallel{" "}
          <span className="accent-highlight">
            2-Day Developer Prototyping Bootcamp
          </span>
          , ending with production-ready AI systems.
        </p>

        <div className="emergence-stats">
          <div className="emergence-stat">
            <span className="emergence-stat-num">35</span>
            <span className="emergence-stat-label">AI decision-makers</span>
          </div>
          <div className="emergence-stat-div" />
          <div className="emergence-stat">
            <span className="emergence-stat-num">65</span>
            <span className="emergence-stat-label">Engineers</span>
          </div>
          <div className="emergence-stat-div" />
          <div className="emergence-stat">
            <span className="emergence-stat-num">1</span>
            <span className="emergence-stat-label">Final room</span>
          </div>
        </div>

        <div className="emergence-pills">
          <div className="emergence-pill">
            <svg
              className="emergence-pill-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="emergence-pill-text">17 – 21 NOV 2026</span>
          </div>

          <div className="emergence-pill emergence-pill-venue">
            <svg
              className="emergence-pill-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="emergence-pill-col">
              <span className="emergence-pill-title">TAJ VIVANTA</span>
              <span className="emergence-pill-sub">THIRUVANANTHAPURAM</span>
            </div>
          </div>
        </div>

        <div className="emergence-actions">
          <a
            href="https://emergence.kolofon.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="emergence-btn-primary"
            onClick={handleExplore}
          >
            EXPLORE EMERGENCE 2026
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 7h12M8 2l5 5-5 5" />
            </svg>
          </a>
          <a
            href="https://emergence.kolofon.ai/agenda"
            target="_blank"
            rel="noopener noreferrer"
            className="emergence-btn-secondary"
            onClick={handleAgenda}
          >
            View agenda →
          </a>
        </div>
      </div>

      <div className="emergence-visual">
        <img
          src="/emergence-artwork.png"
          alt="Emergence 2026 - Boardroom meets Build Room in Thiruvananthapuram"
          className="emergence-artwork-img"
        />
      </div>
    </Dialog>
  );
}
