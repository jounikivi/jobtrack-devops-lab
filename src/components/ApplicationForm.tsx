import type { FormEvent } from 'react'
import { APPLICATION_STATUS_LABELS } from '../constants/applicationStatus'
import type {
  ApplicationStatus,
  NewJobApplication,
} from '../types/application'

interface ApplicationFormProps {
  onAddApplication: (application: NewJobApplication) => void
}

function ApplicationForm({
  onAddApplication,
}: ApplicationFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const application: NewJobApplication = {
      company: String(formData.get('company')).trim(),
      position: String(formData.get('position')).trim(),
      applicationDate: String(formData.get('applicationDate')),
      status: String(formData.get('status')) as ApplicationStatus,
      notes: String(formData.get('notes')).trim(),
    }

    onAddApplication(application)
    form.reset()
  }

  return (
    <section
      className="application-form-card"
      aria-labelledby="application-form-card-title"
    >
      <h2 id="application-form-card-title">Lisää hakemus</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="company">Työnantaja</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="position">Haettava tehtävä</label>
          <input
            id="position"
            name="position"
            type="text"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="applicationDate">Hakupäivä</label>
          <input
            id="applicationDate"
            name="applicationDate"
            type="date"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="status">Hakemuksen tila</label>
          <select
            id="status"
            name="status"
            defaultValue="planned"
            required
          >
            {Object.entries(APPLICATION_STATUS_LABELS).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ),
            )}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="notes">Muistiinpanot</label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
          />
        </div>
        <div className="form-actions">
          <button
            className="primary-button"
            type="submit"
          >
            Lisää hakemus
          </button>
        </div>
      </form>
    </section>
  )
}

export default ApplicationForm
