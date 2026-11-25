import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { useState } from "react";
import EmergenceModal from "../emergence-modal/emergence-modal";
import Footer from "./footer";
import Nav from "./nav";

export default function RootLayout() {
  const [emergenceOpen, setEmergenceOpen] = useState(false);

  return (
    <>
      <Nav onOpenEmergence={() => setEmergenceOpen(true)} />
      {emergenceOpen && (
        <EmergenceModal
          onClose={() => setEmergenceOpen(false)}
          onExplore={() => setEmergenceOpen(false)}
          onViewAgenda={() => setEmergenceOpen(false)}
        />
      )}
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

