import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, Users as UsersIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Event {
  id: number;
  title: string;
  artist: string;
  date: string;
  location: string;
  image: string;
  price: string;
  status: "예매중" | "예매예정" | "마감";
  registrationDeadline?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "2025 콘서트 투어",
    artist: "아티스트 A",
    date: "2025.01.15 (수)",
    location: "서울 올림픽공원 체조경기장",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
    price: "99,000원~",
    status: "예매중",
    registrationDeadline: "2025.01.10",
  },
  {
    id: 2,
    title: "K-POP 페스티벌 2025",
    artist: "Various Artists",
    date: "2025.02.20 (목)",
    location: "인천 영종도 국제공연장",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
    price: "150,000원~",
    status: "예매예정",
    registrationDeadline: "2025.02.15",
  },
  {
    id: 3,
    title: "팝업스토어: 한정판 운동화 드롭",
    artist: "스니커즈 브랜드 X",
    date: "2025.01.25 (토)",
    location: "성수동 팝업스토어",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
    price: "180,000원",
    status: "예매중",
    registrationDeadline: "2025.01.22",
  },
  {
    id: 4,
    title: "클래식 오케스트라 신년음악회",
    artist: "서울 심포니 오케스트라",
    date: "2025.03.05 (수)",
    location: "예술의전당 콘서트홀",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=300&fit=crop",
    price: "50,000원~",
    status: "예매예정",
    registrationDeadline: "2025.02.28",
  },
  {
    id: 5,
    title: "뮤지컬 갈라쇼 2025",
    artist: "뮤지컬 스타들",
    date: "2025.01.18 (토)",
    location: "블루스퀘어 신한카드홀",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
    price: "120,000원~",
    status: "마감",
  },
  {
    id: 6,
    title: "인디 음악 페스티벌",
    artist: "인디 밴드 모음",
    date: "2025.02.10 (월)",
    location: "홍대 라이브홀",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
    price: "30,000원",
    status: "예매중",
    registrationDeadline: "2025.02.05",
  },
];

function EventCard({ event }: { event: Event }) {
  const statusColors = {
    예매중: "bg-blue-100 text-blue-700 border-blue-300",
    예매예정: "bg-green-100 text-green-700 border-green-300",
    마감: "bg-gray-100 text-gray-600 border-gray-300",
  };

  return (
    <Link to="/events/$id" params={{ id: String(event.id) }}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <Badge
            className={`absolute top-3 right-3 ${statusColors[event.status]}`}
          >
            {event.status}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{event.artist}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
            {event.registrationDeadline && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <UsersIcon className="w-4 h-4" />
                <span>등록 마감: {event.registrationDeadline}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">
              {event.price}
            </span>
            <Button
              size="sm"
              disabled={event.status === "마감"}
              className={event.status === "마감" ? "opacity-50 cursor-not-allowed" : ""}
            >
              {event.status === "마감" ? "마감됨" : "사전 등록"}
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default function EventsPage() {
  return (
    <>
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">진행 중인 이벤트</h1>
            <p className="text-lg text-gray-600">
              공정한 방식으로 원하는 이벤트에 참여하세요
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="sm">
              전체
            </Button>
            <Button variant="outline" size="sm">
              예매중
            </Button>
            <Button variant="outline" size="sm">
              예매예정
            </Button>
            <Button variant="outline" size="sm">
              콘서트
            </Button>
            <Button variant="outline" size="sm">
              팝업스토어
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            원하는 이벤트를 찾지 못하셨나요?
          </h2>
          <p className="text-gray-600 mb-6">
            새로운 이벤트가 계속 추가되고 있습니다
          </p>
          <Link to="/">
            <Button variant="outline" size="lg">
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
