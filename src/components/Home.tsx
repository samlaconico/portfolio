import React from "react"
import background from '/src/assets/background.png'
import { TiSocialLinkedin, TiMail, TiSocialGithub } from "react-icons/ti"

export function Home() {
    return (
        <>
            <div id="home" className='relative w-full h-screen min-h-screen bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${background})`}}>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center text-white z-20'>
                    <h1 className='text-3xl md:text-6xl text-center font-bold pb-3 z-20'>Sam Laconico</h1>
                    <h2 className='text-2xl md:text-3xl z-20'>Creative. Programmer. Pookie</h2>
                    <h2 className='text-2xl md:text-3xl z-20'>Connect with me</h2>
                    <div className='p-1 text-5xl flex gap-3 z-20'>
                        <a href='https://www.linkedin.com/in/sam-laconico-971b70275/'><TiSocialLinkedin/></a>
                        <a href='mailto:samlaconico@gmail.com'><TiMail/></a>
                        <a href='https://github.com/samlaconico'><TiSocialGithub/></a>
                    </div>
                </div>
                <div className='bg-neutral-950/40 absolute top-0 left-0 w-full object-cover h-full object-center lg:object-left transition-all z-0'></div>
            </div>
        </>
    )
}

export default Home