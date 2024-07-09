import React from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
     <Navbar />
      <MainContent />
    </div>
  )
}
export default App
