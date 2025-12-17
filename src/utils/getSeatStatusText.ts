import type { Ticket } from '@/types/ticket'

export const getSeatStatusText = (status: Ticket['seatStatus']) => {
  const statusMap: Record<Ticket['seatStatus'], string> = {
    SOLD: '판매완료',
    RESERVED: '예약중',
    AVAILABLE: '예약가능',
  }
  return statusMap[status]
}
