import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  as Router} from 'react-router-dom'
import { AuthProvider } from './Contexts/AuthContext.jsx'
import { CardProvider } from './Contexts/Cart.jsx'
import store from './store.js'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Router>
      <Provider store = {store}>
      <AuthProvider>
        <CardProvider>
       <App/>
        </CardProvider>
      </AuthProvider>
      </Provider>
    </Router>
  </StrictMode>,
)
