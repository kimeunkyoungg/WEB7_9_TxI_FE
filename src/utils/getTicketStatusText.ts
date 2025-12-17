import type { Ticket } from '@/types/ticket'

export const getTicketStatusText = (status: Ticket['ticketStatus']) => {
  const statusMap: Record<Ticket['ticketStatus'], string> = {
    DRAFT: '임시저장',
    PAID: '결제완료',
    ISSUED: '발급완료',
    USED: '사용완료',
    FAILED: '실패',
  }
  return statusMap[status]
}
