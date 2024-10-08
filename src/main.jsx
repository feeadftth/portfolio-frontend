import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')

root.classList.add('bg-background')
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
