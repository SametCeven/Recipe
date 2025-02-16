import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './main.css'
import App from './App.jsx'
import { myStore } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore} >
      <App />
    </Provider>
  </StrictMode>,
)
