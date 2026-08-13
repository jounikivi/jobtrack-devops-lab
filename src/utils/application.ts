import type {
  ApplicationStatusFilter,
  ApplicationSummary,
  JobApplication,
  NewJobApplication,
} from '../types/application'

export function createJobApplication(
  application: NewJobApplication,
): JobApplication {
  return {
    ...application,
    id: crypto.randomUUID(),
  }
}

export function addJobApplication(
  applications: JobApplication[],
  application: NewJobApplication,
): JobApplication[] {
  return [...applications, createJobApplication(application)]
}

export function deleteJobApplication(
  applications: JobApplication[],
  applicationId: string,
): JobApplication[] {
  return applications.filter(
    (application) => application.id !== applicationId,
  )
}

export function updateJobApplication(
  applications: JobApplication[],
  application: JobApplication,
): JobApplication[] {
  return applications.map((app) =>
    app.id === application.id ? application : app,
  )
}

export function filterJobApplications(
  applications: JobApplication[],
  statusFilter: ApplicationStatusFilter,
): JobApplication[] {
  if (statusFilter === 'all') {
    return applications
  }

  return applications.filter(
    (application) => application.status === statusFilter,
  )
}

export function calculateApplicationSummary(
  applications: JobApplication[],
): ApplicationSummary {
  const initialSummary: ApplicationSummary = {
    total: applications.length,
    byStatus: {
      planned: 0,
      applied: 0,
      'awaiting-response': 0,
      interview: 0,
      rejected: 0,
      closed: 0,
    },
  }

  return applications.reduce((summary, application) => {
    summary.byStatus[application.status] += 1
    return summary
  }, initialSummary)
}
