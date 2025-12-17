import { eventsApi } from '@/api/events'
import { PageErrorFallback } from '@/components/common/ErrorFallback'
import { LoadingFallback } from '@/components/common/LoadingFallback'
import { Button } from '@/components/ui/Button'
import type { EventCategory, EventStatus } from '@/types/event'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { EventCard } from './EventCard'
import { EventFilterSection } from './EventFiliterSection'

export default function EventsPage() {
  const [statusFilter, setStatusFilter] = useState<EventStatus | undefined>(undefined)
  const [categoryFilter, setCategoryFilter] = useState<EventCategory | undefined>(undefined)

  const { data } = useSuspenseQuery({
    queryKey: ['events', { status: statusFilter, category: categoryFilter }],
    queryFn: () =>
      eventsApi.getEvents({
        status: statusFilter,
        category: categoryFilter,
        pageable: {
          page: 0,
          size: 20,
        },
      }),
  })

  const events = data.data.content

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">진행 중인 이벤트</h1>
            <p className="text-lg text-gray-600">공정한 방식으로 원하는 이벤트에 참여하세요</p>
          </div>
        </div>
      </section>
      <EventFilterSection
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        setStatusFilter={setStatusFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ErrorBoundary FallbackComponent={PageErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">표시할 이벤트가 없습니다.</p>
                  </div>
                ) : (
                  events.map((event) => <EventCard key={event.id} event={event} />)
                )}
              </div>
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">원하는 이벤트를 찾지 못하셨나요?</h2>
          <p className="text-gray-600 mb-6">새로운 이벤트가 계속 추가되고 있습니다</p>
          <Link to="/">
            <Button variant="outline" size="lg">
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
