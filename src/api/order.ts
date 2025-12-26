import { apiClient } from '@/lib/axios'
import type { ApiResponse } from '@/types/api'

export interface CreateOrderRequest {
  amount: number
  eventId: number
  seatId: number
}

export interface CreateOrderResponse {
  orderId: number
  orderKey: string
  ticketId: number
  amount: number
}

export interface ConfirmPaymentRequest {
  orderId: number
  amount: number
  paymentKey: string
}

export interface ConfirmPaymentResponse {
  orderId: number
  orderKey: string
  orderNumber: string
  paymentKey: string
  paidAt: string
  orderStatus: string
  amount: number
  ticketId: number
  ticketStatus: string
  eventId: number
  eventTitle: string
  eventPlace: string
  eventDate: string
  seatId: number
  seatCode: string
  seatGrade: string
  seatPrice: number
  paymentMethod: string
}

export const orderApi = {
  createOrder: async (
    request: CreateOrderRequest,
  ): Promise<ApiResponse<CreateOrderResponse>> => {
    const response = await apiClient.post<ApiResponse<CreateOrderResponse>>(
      '/order',
      request,
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

  confirmPayment: async (
    request: ConfirmPaymentRequest,
  ): Promise<ApiResponse<ConfirmPaymentResponse>> => {
    const response = await apiClient.post<ApiResponse<ConfirmPaymentResponse>>(
      '/payment/confirm',
      request,
    )

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },
}
