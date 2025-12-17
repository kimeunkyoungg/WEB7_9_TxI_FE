import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import type { Event, EventCategory, EventStatus } from '@/types/event'
import { Link } from '@tanstack/react-router'
import dayjs from 'dayjs'
import { Badge, Calendar, MapPin, UsersIcon } from 'lucide-react'

const EVENT_STATUS_MAP: Record<EventStatus, string> = {
  READY: '준비중',
  PRE_OPEN: '예매예정',
  QUEUE_READY: '대기중',
  OPEN: '예매중',
  CLOSED: '마감',
}

const EVENT_CATEGORY_MAP: Record<EventCategory, string> = {
  CONCERT: '콘서트',
  POPUP: '팝업스토어',
  DROP: '드롭',
}

const statusColors: Record<string, string> = {
  예매중: 'bg-blue-100 text-blue-700 border-blue-300',
  예매예정: 'bg-green-100 text-green-700 border-green-300',
  마감: 'bg-gray-100 text-gray-600 border-gray-300',
  준비중: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  대기중: 'bg-orange-100 text-orange-700 border-orange-300',
}

export function EventCard({ event }: { event: Event }) {
  const displayStatus = EVENT_STATUS_MAP[event.status]
  const formattedDate = dayjs(event.ticketOpenAt).format('YYYY.MM.DD (ddd)')
  const formattedDeadline = dayjs(event.preCloseAt).format('YYYY.MM.DD')
  const priceRange =
    event.minPrice === event.maxPrice
      ? `${event.minPrice.toLocaleString()}원`
      : `${event.minPrice.toLocaleString()}원~${event.maxPrice.toLocaleString()}원`

  return (
    <Link to="/events/$id" params={{ id: String(event.id) }}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          <Badge className={`absolute top-3 right-3 ${statusColors[displayStatus]}`}>
            {displayStatus}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {EVENT_CATEGORY_MAP[event.category] || event.category}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{event.place}</span>
            </div>
            {event.status !== 'CLOSED' && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <UsersIcon className="w-4 h-4" />
                <span>등록 마감: {formattedDeadline}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">{priceRange}</span>
            <Button
              size="sm"
              disabled={event.status === 'CLOSED'}
              className={event.status === 'CLOSED' ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {event.status === 'CLOSED' ? '마감됨' : '사전 등록'}
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  )
}
