import React from 'react'
import './App.css'

import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { About } from './components/About';
import { Projects } from './components/Projects'
import { Contact } from './components/Contact';

function App() {


  return (
    <div className='scroll'>
      <div className='top-part scrolli'>
        <Navbar />
        <Home />
      </div>
      <div id="About" className='scrolli'>
        <About />
      </div>
      <div id="Projects" className='scrolli'>
        <Projects />
      </div>
      <div id="Contact" className='scrolli'>
        <Contact />
      </div>
    </div>

  )
}

export default App
