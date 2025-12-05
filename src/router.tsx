import { createRouter } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";
import { Route as indexRoute } from "./routes/index";
import { Route as faqRoute } from "./routes/faq";
import { Route as eventsRoute } from "./routes/events";

const routeTree = rootRoute.addChildren([indexRoute, faqRoute, eventsRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
