import type {
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
