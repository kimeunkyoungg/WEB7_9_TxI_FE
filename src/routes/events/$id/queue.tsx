import { createRoute } from '@tanstack/react-router'
import { Route as eventsIdRoute } from '../$id'
import QueuePage from '@/pages/QueuePage'
import { requireAuth } from '@/utils/auth'

export const Route = createRoute({
  getParentRoute: () => eventsIdRoute,
  path: 'queue',
  beforeLoad: ({ location }) => requireAuth(location),
  component: QueuePage,
})
