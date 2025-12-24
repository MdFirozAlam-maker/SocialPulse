import React from 'react'
import AppProvider from './context/AppProvider'
import Header from './Components/Header'
import Feed from './Components/Feed'
import Sidebar from './Components/Sidebar'
import "./App.css"

const App = () => {
  return (
  <div className="app">
  <AppProvider>
    <div className="app-container">
      <Header />
      <div className="layout">
        <Feed />
        <Sidebar />
      </div>
    </div>
  </AppProvider>
</div>

  )
}

export default App
