import React from "react"
import reactimg from '/src/assets/react.png'
import htmlimg from '/src/assets/html.png'
import javascriptimg from '/src/assets/javascript.png'
import mongodbimg from '/src/assets/mongo.png'
import tailwindimg from '/src/assets/tailwind.png'
import cssimg from '/src/assets/css.png'
import githubimg from '/src/assets/github.png'
import cppimg from '/src/assets/cpp.png'
import javaimg from '/src/assets/java.png'



export function Skills() {
    return (
        <div className="w-full h-auto flex flex-col max-w-[1000px] m-auto py-10">
            
            <div className="pb-7 text-white text-center">
                <h1 className="text-4xl font-bold border-b-4 border-b-indigo-400 inline">Skills</h1>
                <h3 className="pt-4"> Some of my experience includes</h3>
            </div>
                <div className="grid-cols-2 md:grid-cols-3 grid gap-y-10 place-items-center text-center justify-between">
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >HTML5</h3>
                        <img className="px-8" src={htmlimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >CSS</h3>
                        <img className="px-8" src={cssimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >Javascript</h3>
                        <img className="px-8" src={javascriptimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >React</h3>
                        <img className="px-8" src={reactimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >C++</h3>
                        <img className="px-8 " src={cppimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >Java</h3>
                        <img className="px-8" src={javaimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >Tailwind</h3>
                        <img className="px-8" src={tailwindimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >Github</h3>
                        <img className="px-8" src={githubimg}></img>
                    </div>
                    <div className="bg-neutral-700 shadow-2xl rounded-md h-56 w-56">
                        <h3 className="text-white font-extrabold py-2" >MongoDB</h3>
                        <img className="px-8" src={mongodbimg}></img>
                    </div>
                </div>
        </div>
    )
}

export default Skills