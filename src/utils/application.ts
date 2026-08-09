import type {
  ApplicationStatusFilter,
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
