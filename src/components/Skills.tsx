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
import pythtonimg from '/src/assets/python.png'
import csharpimg from '/src/assets/csharp.png'
import unityimg from '/src/assets/unity.png'
import background from '/src/assets/background4.gif'

const TileStyling:string = "bg-neutral-700 drop-shadow-lg rounded-md h-36 w-36 md:h-56 md:w-56 mx-4 hover:drop-shadow-glow transition-all  duration-150 hover:scale-105 hover:rotate-2 ease-in-out"

export function Skills() {
    return (
        <div id="skills" className="w-full relative h-auto min-h-screen overflow-hidden flex flex-col m-auto py-20 justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${background})`, }}>
            
            <div className="pb-7 text-white text-center z-10">
                <h1 className="text-4xl font-bold border-b-4 border-b-indigo-400 inline">Skills</h1>
                <h3 className="pt-4"> Some of my experience includes</h3>
            </div>
            
            <div className="grid-cols-2 md:grid-cols-4 grid gap-y-10 place-items-center w-auto text-center mx-auto z-10">
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">HTML5</h3>
                    <img className="px-8" src={htmlimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">CSS</h3>
                    <img className="px-8" src={cssimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">Javascript</h3>
                    <img className="px-8" src={javascriptimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">React</h3>
                    <img className="px-8" src={reactimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">C++</h3>
                    <img className="px-8 " src={cppimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">Java</h3>
                    <img className="px-8" src={javaimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">Tailwind</h3>
                    <img className="px-8" src={tailwindimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">Github</h3>
                    <img className="px-8" src={githubimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">Python</h3>
                    <img className="px-8" src={pythtonimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">MongoDB</h3>
                    <img className="px-8" src={mongodbimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">C#</h3>
                    <img className="px-8" src={csharpimg}></img>
                </div>
                <div className={TileStyling}>
                    <h3 className="text-white font-extrabold py-2">Unity</h3>
                    <img className="px-8" src={unityimg}></img>
                </div>
            </div>

            <div className='bg-neutral-950/75 filter backdrop-blur-md absolute top-0 left-0 w-full object-cover h-full object-center lg:object-left transition-all z-0'></div>
        </div>
    )
}

export default Skills