import { apiClient } from '@/lib/axios'
import type { ApiResponse } from '@/types/api'

export interface SeatSelectResponse {
  ticketId: number
  eventId: number
  seatId: number
  seatCode: string
  seatGrade: string
  seatPrice: number
  seatStatus: string
  ticketStatus: string
}

export const seatsApi = {
  selectSeat: async (
    eventId: string,
    seatId: string,
  ): Promise<ApiResponse<SeatSelectResponse>> => {
    const response = await apiClient.post<ApiResponse<SeatSelectResponse>>(
      `/events/${eventId}/seats/${seatId}/select`,
    )

    if (response.data.status === '400 BAD_REQUEST') {
      throw Error(response.data.message)
    }

    if (response.data.status === '404 NOT_FOUND') {
      throw Error(response.data.message)
    }

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },

  deselectSeat: async (eventId: string, seatId: string): Promise<ApiResponse<string>> => {
    const response = await apiClient.delete<ApiResponse<string>>(
      `/events/${eventId}/seats/${seatId}/select`,
    )

    if (response.data.status === '400 BAD_REQUEST') {
      throw Error(response.data.message)
    }

    if (response.data.status === '404 NOT_FOUND') {
      throw Error(response.data.message)
    }

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },
}
