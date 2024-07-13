import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Download from './components/Download'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Download/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
   
    </>
  )
}

export default App