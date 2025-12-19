export type PreRegisterStatus = 'REGISTERED' | 'CANCELLED'

export interface PreRegister {
  id: number
  eventId: number
  userId: number
  status: PreRegisterStatus
  createdAt: string
}
