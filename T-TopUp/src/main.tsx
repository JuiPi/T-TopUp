import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Homepage from './Homepage.tsx'
import Aboutus from './Aboutus.tsx'
import './Homepage.css'
import './Aboutus.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Aboutus />
  </React.StrictMode>,
)
