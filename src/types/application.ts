export type ApplicationStatus =
  | 'planned'
  | 'applied'
  | 'awaiting-response'
  | 'interview'
  | 'rejected'
  | 'closed'

export interface JobApplication {
  id: string
  company: string
  position: string
  applicationDate: string
  status: ApplicationStatus
  notes: string
}
