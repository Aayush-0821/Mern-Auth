import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Navbar />
      <Header />
    </div>
  )
}

export default Home