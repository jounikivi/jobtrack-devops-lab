export type ApplicationStatus =
  | 'planned'
  | 'applied'
  | 'awaiting-response'
  | 'interview'
  | 'rejected'
  | 'closed'

export type ApplicationStatusFilter = ApplicationStatus | 'all'

export interface JobApplication {
  id: string
  company: string
  position: string
  applicationDate: string
  status: ApplicationStatus
  notes: string
}

export type NewJobApplication = Omit<JobApplication, 'id'>

export interface ApplicationSummary {
  total: number
  byStatus: Record<ApplicationStatus, number>
}
