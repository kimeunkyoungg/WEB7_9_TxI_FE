import { apiClient } from '@/lib/axios'
import type { ApiResponse } from '@/types/api'
import type { Ticket } from '@/types/ticket'

export const ticketsApi = {
  getMyTickets: async (): Promise<ApiResponse<Ticket[]>> => {
    const response = await apiClient.get<ApiResponse<Ticket[]>>('/tickets/my')

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },

  getMyTicketDetail: async (ticketId: string): Promise<ApiResponse<Ticket>> => {
    const response = await apiClient.get<ApiResponse<Ticket>>(`/tickets/my/${ticketId}/details`)

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },
}
