import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidenav from './components/Sidenav'
import background from './assets/background.png'

import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overflow-x-hidden">

      <Header title='Portfolio'/>
      <div className="overflow-y-scroll snap-proximity md:snap-mandatory snap-y w-full h-screen">
        <div className='snap-center'> 
          <Home/> 
        </div>
        <div className='snap-center'> 
          <AboutMe/> 
        </div>
        <div className='snap-center'> 
          <Skills/> 
        </div>
        <div className='snap-center'> 
          <Projects/> 
        </div>
      </div>
    </div>
  )
}

export default App
