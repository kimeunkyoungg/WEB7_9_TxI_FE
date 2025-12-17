import { ticketsApi } from '@/api/tickets'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { formatDateTime } from '@/utils/format'
import { getTicketStatusBadgeClass } from '@/utils/getTicketStatusBadgeClass'
import { getTicketStatusText } from '@/utils/getTicketStatusText'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Calendar, Ticket as TicketIcon } from 'lucide-react'

export default function MyTicketsPage() {
  const { data } = useSuspenseQuery({
    queryKey: ['myTickets'],
    queryFn: () => ticketsApi.getMyTickets(),
  })

  const tickets = data.data
  const activeTickets = tickets.filter(
    (ticket) => ticket.ticketStatus === 'ISSUED' || ticket.ticketStatus === 'PAID',
  )
  const pastTickets = tickets.filter(
    (ticket) => ticket.ticketStatus === 'USED' || ticket.ticketStatus === 'FAILED',
  )

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">내 티켓</h1>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">진행 예정</TabsTrigger>
            <TabsTrigger value="past">지난 티켓</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {activeTickets.length === 0 ? (
              <div className="text-center py-12 text-gray-600">
                <TicketIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>진행 예정인 티켓이 없습니다</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">
                {activeTickets.map((ticket) => (
                  <Card key={ticket.ticketId} className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold">{ticket.eventTitle}</h3>
                        <Badge className={getTicketStatusBadgeClass(ticket.ticketStatus)}>
                          {getTicketStatusText(ticket.ticketStatus)}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <TicketIcon className="w-4 h-4" />
                          <span>
                            좌석: {ticket.seatGrade} - {ticket.seatCode}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>발급일: {formatDateTime(ticket.issuedAt).date}</span>
                        </div>
                      </div>
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">가격</p>
                        <p className="text-lg font-bold text-blue-600">
                          {ticket.seatPrice.toLocaleString()}원
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1" asChild>
                          <Link
                            to="/my-tickets/$ticketId"
                            params={{ ticketId: String(ticket.ticketId) }}
                          >
                            티켓 상세보기
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            {pastTickets.length === 0 ? (
              <div className="text-center py-12 text-gray-600">
                <TicketIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>지난 티켓이 없습니다</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">
                {pastTickets.map((ticket) => (
                  <Card key={ticket.ticketId} className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold">{ticket.eventTitle}</h3>
                        <Badge className={getTicketStatusBadgeClass(ticket.ticketStatus)}>
                          {getTicketStatusText(ticket.ticketStatus)}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <TicketIcon className="w-4 h-4" />
                          <span>
                            좌석: {ticket.seatGrade} - {ticket.seatCode}
                          </span>
                        </div>
                        {ticket.usedAt && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>사용일: {formatDateTime(ticket.usedAt).date}</span>
                          </div>
                        )}
                      </div>
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">가격</p>
                        <p className="text-lg font-bold text-gray-600">
                          {ticket.seatPrice.toLocaleString()}원
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1" asChild>
                          <Link
                            to="/my-tickets/$ticketId"
                            params={{ ticketId: String(ticket.ticketId) }}
                          >
                            티켓 상세보기
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
