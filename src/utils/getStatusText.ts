export const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    READY: '준비중',
    PRE_OPEN: '사전등록',
    QUEUE_READY: '대기',
    OPEN: '예매중',
    CLOSED: '마감',
  }
  return statusMap[status] || status
}
