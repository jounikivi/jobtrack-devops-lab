import { useState } from 'react'
import AppHeader from './components/AppHeader'
import ApplicationForm from './components/ApplicationForm'
import EmptyState from './components/EmptyState'
import type {
  JobApplication,
  NewJobApplication,
} from './types/application'
import { addJobApplication } from './utils/application'
import './App.css'

function App() {
  const [applications, setApplications] = useState<JobApplication[]>([])

  function handleAddApplication(application: NewJobApplication) {
    setApplications((currentApplications) =>
      addJobApplication(currentApplications, application),
    )
  }

  return (
    <>
      <AppHeader />
      <main className="app-main">
        <ApplicationForm onAddApplication={handleAddApplication} />
        {applications.length === 0 && <EmptyState />}
      </main>
    </>
  )
}

export default App
