import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import RootLayout from "./components/layout/root-layout";
import HomePage from "./pages/home-page";
import ServicePage from "./pages/service-page";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const costAuditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/ai-cost-audit",
  component: () => <ServicePage slug="ai-cost-audit" />,
});

const cachingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/caching-token-telemetry",
  component: () => <ServicePage slug="caching-token-telemetry" />,
});

const arbitrageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/model-arbitrage",
  component: () => <ServicePage slug="model-arbitrage" />,
});

const agentHardeningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/agent-hardening",
  component: () => <ServicePage slug="agent-hardening" />,
});

const knowledgeHygieneRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/knowledge-hygiene",
  component: () => <ServicePage slug="knowledge-hygiene" />,
});

const makerCheckerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/maker-checker",
  component: () => <ServicePage slug="maker-checker" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  costAuditRoute,
  cachingRoute,
  arbitrageRoute,
  agentHardeningRoute,
  knowledgeHygieneRoute,
  makerCheckerRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
