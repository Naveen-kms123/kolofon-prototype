import DiagnosticCta from "../components/sections/diagnostic-cta";
import ExecutiveSummary from "../components/sections/executive-summary";
import Faq from "../components/sections/faq";
import Hero from "../components/sections/hero";
import HowWeWork from "../components/sections/how-we-work";
import ProblemLeaks from "../components/sections/problem-leaks";
import ServiceMatrix from "../components/sections/service-matrix";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ExecutiveSummary />
      <ProblemLeaks />
      <ServiceMatrix />
      <HowWeWork />
      <Faq />
      <DiagnosticCta />
    </main>
  );
}

