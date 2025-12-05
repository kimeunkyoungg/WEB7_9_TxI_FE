import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Shield, Users, Clock, Ticket, TrendingUp, Lock } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">WaitFair</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/events" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              이벤트
            </Link>
            <Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
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

      
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
              WaitFair 차세대 예매 플랫폼
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              공정한 티켓팅,
              <br />
              <span className="text-blue-600">모두에게 평등한 기회</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              사전 등록과 랜덤 큐로 속도 경쟁을 없애고, 강화된 보안으로 암표와 위조를 원천 차단합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button size="lg" className="text-base">
                  이벤트 둘러보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 WaitFair인가?</h2>
            <p className="text-lg text-gray-600">공정하고 투명하며 안전한 예매 경험을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">공정한 티켓팅</h3>
              <p className="text-gray-600 leading-relaxed">
                사전 등록과 랜덤 큐로 네트워크 속도나 기기 성능과 관계없이 모두에게 동등한 기회를 제공합니다.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">암표 원천 차단</h3>
              <p className="text-gray-600 leading-relaxed">
                Dynamic QR과 소유권 체인으로 외부 거래와 위조를 완벽하게 방지합니다.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">봇·매크로 차단</h3>
              <p className="text-gray-600 leading-relaxed">
                디바이스 핑거프린팅과 행동 패턴 분석으로 비정상적인 접근을 실시간 차단합니다.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">실시간 대기열</h3>
              <p className="text-gray-600 leading-relaxed">
                WebSocket 기반 실시간 알림으로 내 순번과 예상 대기 시간을 즉시 확인할 수 있습니다.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">투명한 거래</h3>
              <p className="text-gray-600 leading-relaxed">
                플랫폼 내 재판매 관리와 거래 이력 추적으로 모든 거래를 투명하게 검증합니다.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <Ticket className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">범용 대기열 인프라</h3>
              <p className="text-gray-600 leading-relaxed">
                콘서트, 팝업스토어, 한정판 드롭 등 다양한 산업에 확장 가능한 시스템입니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">이렇게 작동합니다</h2>
            <p className="text-lg text-gray-600">간단한 4단계로 공정한 티켓팅을 경험하세요</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">사전 등록</h3>
                <p className="text-gray-600 leading-relaxed">
                  본인 인증 후 원하는 이벤트에 사전 등록하세요. 새벽 접속 경쟁은 이제 없습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">랜덤 큐 배정</h3>
                <p className="text-gray-600 leading-relaxed">
                  등록 마감 후 공정한 무작위 셔플로 대기 순번이 배정됩니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">순번 기반 입장</h3>
                <p className="text-gray-600 leading-relaxed">
                  실시간 알림으로 내 차례를 확인하고 자동으로 예매 페이지에 입장합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">안전한 입장</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dynamic QR로 위조 불가능한 티켓을 받고 안전하게 이벤트에 입장하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">지금 바로 공정한 티켓팅을 경험하세요</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            암표 걱정 없이, 봇 경쟁 없이, 모두에게 평등한 기회를 제공하는 WaitFair
          </p>
          <Link to="/events">
            <Button size="lg" className="text-base">
              이벤트 둘러보기
            </Button>
          </Link>
        </div>
      </section>

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
              <p className="text-sm text-gray-600 leading-relaxed">공정하고 투명한 티켓팅의 새로운 기준</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">제품</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/events" className="hover:text-gray-900 transition-colors">
                    이벤트
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">지원</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/faq" className="hover:text-gray-900 transition-colors">
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
    </div>
  );
}
