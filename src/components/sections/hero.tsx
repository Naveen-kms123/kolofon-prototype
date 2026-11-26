import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="hero" id="top">
      <video
        ref={videoRef}
        className="hero-video"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-scrim" />
      <div className="hero-content">
        <p className="eyebrow accent">
          AI Efficiency Intelligence &amp; Reliability Engineering
        </p>
        <h1 className="display-xl hero-title">
          Cut AI spend.{" "}
          <span className="accent">Harden production reliability.</span>
        </h1>
        <p className="body-l hero-sub">
          Our consultants find where your AI leaks budget and breaks trust. Our
          engineers ship the caching, routing, guardrails, and evaluation
          pipelines to fix both without rewriting your core product.
        </p>
        <div className="hero-actions">
          <a href="#diagnostic" className="btn btn-primary">
            Book a 30-Min Diagnostic
          </a>
          <a href="#service-matrix" className="btn btn-secondary">
            Explore 2-Week Sprints
          </a>
        </div>
      </div>
      <button
        type="button"
        className="hero-toggle"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
      >
        <span className="mono">{playing ? "Pause" : "Play"}</span>
      </button>
    </section>
  );
}

