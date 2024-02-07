import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidenav from './components/Sidenav'
import background from './assets/background.png'

import Header from './components/Header'
import Projects from './components/Projects'
import { TiSocialLinkedin, TiMail, TiSocialGithub } from "react-icons/ti"
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overscroll-x-none">
      <Header title={"Pookiefolio"}/>

      <img className="w-full object-cover h-screen object-center lg:object-left transition-all"src={background}></img>
      <div className='bg-slate-600/50 absolute top-0 left-0 w-full object-cover h-screen object-center lg:object-left transition-all'></div>

      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center text-white'>
          <h1 className='text-3xl md:text-6xl text-center font-bold pb-3'>Sam Laconico</h1>
          <h2 className='text-2xl md:text-3xl'>Creative. Programmer. Pookie</h2>
          <h2 className='text-2xl md:text-3xl'>Connect with me</h2>
          <div className='p-1 text-5xl flex gap-3'>
            <a href='https://www.linkedin.com/in/sam-laconico-971b70275/'><TiSocialLinkedin/></a>
            <a href='mailto:samlaconico@gmail.com'><TiMail/></a>
            <a href='https://github.com/samlaconico'><TiSocialGithub/></a>
          </div>
        </div>
        
      </div>
      
      <AboutMe/>
      <Skills/>
      <Projects/>
      <AboutMe/>

    </div>
  )
}

export default App
