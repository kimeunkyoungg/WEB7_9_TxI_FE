import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";

// 임시 이벤트 페이지 (나중에 구현)
function EventsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">이벤트 페이지</h1>
        <p className="text-gray-600">곧 출시 예정입니다</p>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/events",
  component: EventsPage,
});
