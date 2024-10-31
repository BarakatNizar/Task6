import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='*' element={<App />}/>
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>,
)
