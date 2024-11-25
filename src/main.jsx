import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { VideoProvider } from './Components/VideoContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </VideoProvider>
  </React.StrictMode>,
)
