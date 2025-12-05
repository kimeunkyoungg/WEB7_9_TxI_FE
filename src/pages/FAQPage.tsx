import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Ticket, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "WaitFair는 어떻게 공정한 티켓팅을 보장하나요?",
    answer:
      "WaitFair는 사전 등록과 랜덤 큐 시스템을 사용합니다. 등록 마감 후 무작위로 순번을 배정하여 네트워크 속도나 기기 성능과 관계없이 모든 사용자에게 동등한 기회를 제공합니다.",
  },
  {
    question: "사전 등록은 언제 시작하나요?",
    answer:
      "각 이벤트마다 사전 등록 기간이 다릅니다. 이벤트 상세 페이지에서 등록 시작 및 마감 시간을 확인할 수 있습니다. 보통 이벤트 1주일 전부터 시작됩니다.",
  },
  {
    question: "암표를 어떻게 방지하나요?",
    answer:
      "Dynamic QR 코드와 소유권 체인 시스템을 사용합니다. 티켓은 실시간으로 변경되는 QR 코드로 발급되며, 모든 거래 이력이 기록되어 외부 거래와 위조를 원천 차단합니다.",
  },
  {
    question: "티켓 구매 후 환불이 가능한가요?",
    answer:
      "이벤트 시작 7일 전까지 전액 환불이 가능합니다. 7일 이내에는 주최자 정책에 따라 부분 환불 또는 환불이 불가할 수 있습니다. 자세한 내용은 각 이벤트의 환불 정책을 확인해주세요.",
  },
  {
    question: "대기 순번은 어떻게 확인하나요?",
    answer:
      "로그인 후 마이페이지에서 실시간으로 대기 순번과 예상 대기 시간을 확인할 수 있습니다. WebSocket 기반 실시간 알림으로 순번이 가까워지면 푸시 알림을 받을 수 있습니다.",
  },
  {
    question: "봇이나 매크로는 어떻게 차단하나요?",
    answer:
      "디바이스 핑거프린팅, 행동 패턴 분석, CAPTCHA 등 다층 보안 시스템을 운영합니다. 비정상적인 접근이나 자동화된 요청은 실시간으로 감지되어 차단됩니다.",
  },
  {
    question: "플랫폼 내에서 티켓을 재판매할 수 있나요?",
    answer:
      "네, 가능합니다. WaitFair는 안전한 플랫폼 내 재판매 시스템을 제공합니다. 모든 거래는 투명하게 기록되며, 주최자가 설정한 가격 범위 내에서만 거래가 가능합니다.",
  },
  {
    question: "모바일에서도 이용할 수 있나요?",
    answer:
      "네, WaitFair는 반응형 웹으로 제작되어 PC, 태블릿, 스마트폰 모두에서 원활하게 이용 가능합니다. 모바일 앱도 개발 중이며 곧 출시될 예정입니다.",
  },
];

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </span>
          <h3 className="font-semibold text-gray-900">{faq.question}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed pl-12">{faq.answer}</p>
        </div>
      )}
    </Card>
  );
}

export default function FAQPage() {
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
            <Link
              to="/events"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              이벤트
            </Link>
            <Link
              to="/faq"
              className="text-sm text-blue-600 font-medium transition-colors"
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

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              자주 묻는 질문
            </h1>
            <p className="text-lg text-gray-600">
              WaitFair 이용에 대한 궁금한 점을 확인해보세요
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-gray-600 mb-6">
            고객 지원팀이 언제든 도와드리겠습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">고객 지원 문의</Button>
            <Link to="/">
              <Button variant="outline" size="lg">
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
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
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-gray-900 transition-colors"
                  >
                    요금제
                  </a>
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
                <li>
                  <a
                    href="#support"
                    className="hover:text-gray-900 transition-colors"
                  >
                    고객 지원
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="hover:text-gray-900 transition-colors"
                  >
                    문서
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">회사</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#about"
                    className="hover:text-gray-900 transition-colors"
                  >
                    회사 소개
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-gray-900 transition-colors"
                  >
                    연락처
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-gray-900 transition-colors"
                  >
                    개인정보처리방침
                  </a>
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
