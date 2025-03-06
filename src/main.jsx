import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Component/App'
import { ContextFuntion } from './context/context'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextFuntion>
    <App/>
    </ContextFuntion>
  </StrictMode>,
)
