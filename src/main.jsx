import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './main.css'
import App from './App.jsx'
import { myStore } from './store/store.js'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
    <Provider store={myStore} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)
