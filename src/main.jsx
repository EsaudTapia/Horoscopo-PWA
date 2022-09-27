import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppOroscopo from './AppOroscopo'
import ReloadPrompt from './ReloadPropmpt'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReloadPrompt/>
    <AppOroscopo />
  </React.StrictMode>
)
