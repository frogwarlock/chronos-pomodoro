import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // boas práticas usar garante que enquanto a aplicação está em desenvolvimento ela funcione corretamente
  <StrictMode> 
    <App />
  </StrictMode>,
)
