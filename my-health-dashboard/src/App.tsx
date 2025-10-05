import { useState } from 'react'


import './App.css'
import AppLayout from './layout/AppLayout'
import Dashboard from './pages/dashboard'

function App() {
  

  return (
    <AppLayout
      children={<Dashboard/>} current='dashboard'/>
  )
}

export default App
