import React from "react"
import ProjectCards from "./ProjectCards"
import horrorgame from '/src/assets/horrorgame.png'
import horrorgamegif from '/src/assets/horrorgame.gif'
import petspace from '/src/assets/petspace.png'
import petspacegif from '/src/assets/petspacegif.gif'

const ProjectData = {
    
}

export function Projects() {
    return (
        <div id="projects" className="px-8 md:px-48 pt-16 justify-center w-full h-auto min-h-screen text-center">

            <div className="pb-7 text-white text-center z-10">
                <h1 className="text-4xl font-bold border-b-4 border-b-indigo-400 inline">Projects</h1>
                <h3 className="pt-4"> Projects I've worked on </h3>
            </div>

            <div className="flex-col">
                <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 place-items-center">
                    <ProjectCards title={"Pookie"} img={petspace} gif={petspacegif} description={" My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area."}/>
                    <ProjectCards title={"Pookie"} img={petspace} gif={petspacegif} description={" My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area."}/>
                    <ProjectCards title={"Pookie"} img={horrorgame} gif={horrorgamegif} description={" My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area. My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area.  My name is Sam Laconico I am a software engineer located in the Los Angeles area."}/>
                </div>
            </div>

        </div>
    )
}

export default Projects