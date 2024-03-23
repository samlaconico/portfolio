import React from "react"
import ProjectCards from "./ProjectCards"
import horrorgame from '/src/assets/horrorgame.png'
import horrorgamegif from '/src/assets/horrorgame.gif'
import petspace from '/src/assets/petspace.png'
import petspacegif from '/src/assets/petspacegif.gif'
import anithemes from '/src/assets/anithemes.png'
import anithemesgif from '/src/assets/anithemes.gif'
import background from '/src/assets/background3.gif'

const ProjectData = [
    {
        name: "PetSpace",
        description: "PetSpace is a mobile app for both iOS and Android based around streamlining the application process for fostering both cats and dogs.",
        tech: "React Native, Node.js, Firebase, Expo, Git",
        img: petspace,
        gif: petspacegif
    },
    {
        name: "The Last Patient",
        description: "The Last Patient is a 90s style survival horror game, reminiscent of PSX classics like Resident Evil and Silent Hill. ",
        tech: "Unity, Blender, C#, Git LFS",
        img: horrorgame,
        gif: horrorgamegif
    },
    {
        name: "Anime Theme Search",
        description: "Search and instantly play a wide range of anime openings and endings.",
        tech: "React, Tailwind, JSON:API",
        img: anithemes,
        gif: anithemesgif
    }
]

export function Projects() {
    return (
        <div 
            id="projects" 
            className="relative w-full md:h-auto min-h-screen overflow-hidden h-auto px-10 py-10 justify-center flex bg-center bg-no-repeat bg-cover flex-col m-auto" 
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="pb-7 text-white text-center z-10">
                <h1 className="text-4xl font-bold border-b-4 border-b-indigo-400 inline">
                    Projects
                </h1>
                <h3 className="pt-4">
                    Projects I've worked on (more to come!) 
                </h3>
            </div>

            <div className="flex-col flex z-10">
                <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-center m-auto gap-x-8 gap-y-8 place-items-center">
                    {ProjectData.map((item, idx)=>(
                        <ProjectCards
                            title={item.name}
                            img={item.img}
                            gif={item.gif}
                            description={item.description}
                            tech={item.tech}
                            key={idx}
                        />
                    ))}
                </div>

                <div className="text-white drop-shadow-glow text-2xl self-center py-6">
                    <p>...and this site!</p>
                </div>
            </div>
            
            

            <div className='bg-neutral-950/75 filter backdrop-blur-md absolute top-0 left-0 w-full object-cover h-full object-center lg:object-left transition-all z-0'></div>
        </div>
    )
}

export default Projects