import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext.jsx'

const root = document.getElementById('root')

root.classList.add('bg-background')
createRoot(root).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
