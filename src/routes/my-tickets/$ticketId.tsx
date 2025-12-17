import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import MyTicketDetailPage from "@/pages/MyTicketDetailPage";
import { requireAuth } from "@/utils/auth";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/my-tickets/$ticketId",
  beforeLoad: ({ location }) => requireAuth(location),
  component: MyTicketDetailPage,
});
