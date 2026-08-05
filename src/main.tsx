import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element was not found')
}

// StrictMode enables additional development checks without affecting production.
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
