import { Ticket } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Ticket className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">WaitFair</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              공정하고 투명한 티켓팅의 새로운 기준
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">제품</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  to="/events"
                  className="hover:text-gray-900 transition-colors"
                >
                  이벤트
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">지원</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2025 WaitFair. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
