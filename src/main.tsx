import React from 'react'
import ReactDOM from 'react-dom/client'
import './normalize.css'
//import './index.css'
import { App } from './App'
import { NewApp } from './NewApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <NewApp />
  </React.StrictMode>
)
