import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import MyPage from "@/pages/MyPage";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/my-page",
  component: MyPage,
});
