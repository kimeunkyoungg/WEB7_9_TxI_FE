import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import MyTicketsPage from "@/pages/MyTicketsPage";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/my-tickets",
  component: MyTicketsPage,
});
