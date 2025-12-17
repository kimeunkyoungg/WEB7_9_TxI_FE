import MyTicketsPage from '@/pages/MyTicketsPage'
import { requireAuth } from '@/utils/auth'
import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/my-tickets',
  beforeLoad: ({ location }) => requireAuth(location),
  component: MyTicketsPage,
})
