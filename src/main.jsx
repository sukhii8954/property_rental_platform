import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  as Router} from 'react-router-dom'
import { AuthProvider } from './Contexts/AuthContext.jsx'
import { CardProvider } from './Contexts/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <CardProvider>
       <App/>
        </CardProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
