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
    <div className="overscroll-x-none">
      
      <Header title={"Pookiefolio"}/>
      
      <div className="">
        <Home/> 
        <AboutMe/> 
        <Skills/> 
        <Projects/>
      </div>
    </div>
  )
}

export default App
