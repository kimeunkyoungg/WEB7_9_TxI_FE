import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import EventDetailPage from "@/pages/EventDetailPage";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/events/$id",
  component: EventDetailPage,
});
