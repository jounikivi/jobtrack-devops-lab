import AppHeader from './components/AppHeader'
import EmptyState from './components/EmptyState'
import './App.css'

function App() {
  return (
    <>
      <AppHeader />
      <main className="app-main">
        <EmptyState />
      </main>
    </>
  )
}

export default App
