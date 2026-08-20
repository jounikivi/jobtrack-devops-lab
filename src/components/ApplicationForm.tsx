import { APPLICATION_STATUS_LABELS } from '../constants/applicationStatus'

function ApplicationForm() {
  return (
    <section
      className="application-form-card"
      aria-labelledby="application-form-card-title"
    >
      <h2 id="application-form-card-title">Lisää hakemus</h2>
      <form>
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
      </form>
    </section>
  )
}

export default ApplicationForm
