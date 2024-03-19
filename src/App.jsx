import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LandingPage from './components/landingpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Footer/>
    </>
  )
}

export default App
