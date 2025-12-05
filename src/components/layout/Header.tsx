import { Button } from "@/components/ui/Button";
import { Ticket } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

export function Header() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Ticket className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">WaitFair</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/events"
            className={`text-sm transition-colors ${
              isActive("/events")
                ? "text-blue-600 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            이벤트
          </Link>
          <Link
            to="/faq"
            className={`text-sm transition-colors ${
              isActive("/faq")
                ? "text-blue-600 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
