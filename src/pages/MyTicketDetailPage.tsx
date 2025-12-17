import { ticketsApi } from '@/api/tickets'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { formatDateTime } from '@/utils/format'
import { getSeatStatusText } from '@/utils/getSeatStatusText'
import { getTicketStatusBadgeClass } from '@/utils/getTicketStatusBadgeClass'
import { getTicketStatusText } from '@/utils/getTicketStatusText'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, useParams } from '@tanstack/react-router'
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  CreditCard,
  MapPin,
  Ticket as TicketIcon,
} from 'lucide-react'

export default function MyTicketDetailPage() {
  const { ticketId } = useParams({ from: '/tickets/$ticketId' })

  const { data } = useSuspenseQuery({
    queryKey: ['ticket', ticketId],
    queryFn: () => ticketsApi.getMyTicketDetail(ticketId),
  })

  const ticket = data.data

  const issuedDateTime = formatDateTime(ticket.issuedAt)
  const usedDateTime = ticket.usedAt ? formatDateTime(ticket.usedAt) : null

  return (
    <>
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-3">
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />내 티켓 목록으로
          </Link>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge className={`mb-3 ${getTicketStatusBadgeClass(ticket.ticketStatus)}`}>
              {getTicketStatusText(ticket.ticketStatus)}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{ticket.eventTitle}</h1>
            <p className="text-lg opacity-90">
              좌석: {ticket.seatGrade} - {ticket.seatCode}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">티켓 정보</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TicketIcon className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">티켓 번호</p>
                    <p className="text-gray-600">#{ticket.ticketId}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">좌석 정보</p>
                    <p className="text-gray-600">
                      {ticket.seatGrade} - {ticket.seatCode}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      좌석 상태: {getSeatStatusText(ticket.seatStatus)}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">발급 일시</p>
                    <p className="text-gray-600">
                      {issuedDateTime.date} {issuedDateTime.time}
                    </p>
                  </div>
                </div>
                {usedDateTime && (
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">사용 일시</p>
                      <p className="text-gray-600">
                        {usedDateTime.date} {usedDateTime.time}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">결제 금액</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {ticket.seatPrice.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">티켓 상태</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-semibold">티켓 상태</p>
                    <p className="text-sm text-gray-600 mt-1">현재 티켓의 발급 및 사용 상태</p>
                  </div>
                  <Badge className={getTicketStatusBadgeClass(ticket.ticketStatus)}>
                    {getTicketStatusText(ticket.ticketStatus)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-semibold">좌석 상태</p>
                    <p className="text-sm text-gray-600 mt-1">현재 좌석의 예약 상태</p>
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 border-gray-300">
                    {getSeatStatusText(ticket.seatStatus)}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">티켓 번호</span>
                  <span className="text-lg font-bold text-gray-900">#{ticket.ticketId}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">상태</span>
                  <Badge className={getTicketStatusBadgeClass(ticket.ticketStatus)}>
                    {getTicketStatusText(ticket.ticketStatus)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">결제 금액</span>
                  <span className="text-xl font-bold text-blue-600">
                    {ticket.seatPrice.toLocaleString()}원
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 mb-1">좌석 등급</p>
                  <p className="text-xl font-bold text-blue-900">{ticket.seatGrade}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">좌석 번호</p>
                  <p className="text-xl font-bold text-gray-900">{ticket.seatCode}</p>
                </div>
              </div>

              <Button className="w-full mb-3" size="lg" asChild>
                <Link to="/events/$id" params={{ id: String(ticket.eventId) }}>
                  이벤트 상세보기
                </Link>
              </Button>

              {ticket.ticketStatus === 'ISSUED' && (
                <Button variant="outline" className="w-full">
                  QR 코드 보기
                </Button>
              )}
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
