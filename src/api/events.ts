import { apiClient } from '@/lib/axios'
import type { ApiResponse } from '@/types/api'
import type { Event, GetEventsParams, PageResponse } from '@/types/event'
import type { PreRegister } from '@/types/preRegister'

export const eventsApi = {
  getEvents: async (params: GetEventsParams): Promise<ApiResponse<PageResponse<Event>>> => {
    const queryParams = new URLSearchParams()

    if (params.status) {
      queryParams.append('status', params.status)
    }

    if (params.category) {
      queryParams.append('category', params.category)
    }

    queryParams.append('page', params.pageable.page.toString())
    queryParams.append('size', params.pageable.size.toString())

    if (params.pageable.sort && params.pageable.sort.length > 0) {
      for (const sortParam of params.pageable.sort) {
        queryParams.append('sort', sortParam)
      }
    }

    const response = await apiClient.get<ApiResponse<PageResponse<Event>>>(
      `/events?${queryParams.toString()}`,
    )

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },

  getEventById: async (eventId: string): Promise<ApiResponse<Event>> => {
    const response = await apiClient.get<ApiResponse<Event>>(`/events/${eventId}`)

    if (response.data.status === '404 NOT_FOUND') {
      throw Error(response.data.message)
    }

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },

  getPreRegisterCount: async (eventId: string): Promise<ApiResponse<number>> => {
    const response = await apiClient.get<ApiResponse<number>>(
      `/events/${eventId}/pre-registers/count`,
    )

    if (response.data.status === '404 NOT_FOUND') {
      throw Error(response.data.message)
    }

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },

  getPreRegisterStatus: async (eventId: string): Promise<ApiResponse<boolean>> => {
    const response = await apiClient.get<ApiResponse<boolean>>(
      `/events/${eventId}/pre-registers/status`,
    )

    if (response.data.status === '401 UNAUTHORIZED') {
      throw Error(response.data.message)
    }

    if (response.data.status === '500 INTERNAL_SERVER_ERROR') {
      throw Error(response.data.message)
    }

    return response.data
  },

  createPreRegister: async (eventId: string): Promise<ApiResponse<PreRegister>> => {
    const response = await apiClient.post<ApiResponse<PreRegister>>(
      `/events/${eventId}/pre-registers`,
    )

    if (response.data.status === '400 BAD_REQUEST') {
      throw Error(response.data.message)
    }

    if (response.data.status === '401 UNAUTHORIZED') {
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
