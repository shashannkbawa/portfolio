import React, { useRef } from 'react'

import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { About } from './components/About';
import { SideNavbar } from './components/SideNavbar'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact';


function App() {
  const aboutRef = useRef();
  const projectRef = useRef();

  const handleScroll1 = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleScroll2 = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">

      <div className='top-part' >
        <Navbar ></Navbar>
        <button onClick={handleScroll1}>click me</button>
        <button onClick={handleScroll2}>click me</button>
        <Home  ></Home>
      </div>
      <div ref={aboutRef} >

        <About></About>


      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>




    </div>
  )
}

export default App
