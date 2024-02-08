import React from "react"
import background from '/src/assets/background2.gif'


export function AboutMe() {
    return (
        <>
        <div id="about-me" className="relative w-full md:h-screen overflow-hidden h-auto py-10 justify-center flex bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${background})`, }}>
                <div className="flex flex-col max-w-[1000px] py-6 text-xl lg:text-3xl font-light leading-8 md:leading-10 text-center justify-center items-center text-white z-20">
                    <div className="pb-4 text-left">
                        <h1 className="text-3xl lg:text-4xl font-bold border-b-4 border-b-indigo-400 inline">About Me</h1>
                    </div>
                    <div>
                        <img className="rounded-full border-indigo-400 border-4 my-6" src={"https://pbs.twimg.com/profile_images/1447111107412312068/OqwCuFnd_400x400.jpg"}></img>
                    </div>
                    <div className="mx-10 px-3 md:px-8 ">
                        <p>
                            My name is Sam Laconico I am a software engineer located in the Los Angeles area.
                            Although fans usually remember Light, L, or Ryuk's quotes, they're not the only characters capable of making astute observations or philosophical realizations. Soichiro may never be as iconic as his son, but his police officer career offers him an interesting insight into justice and criminal behavior.
                            My name is Sam Laconico I am a software engineer located in the Los Angeles area.
                            Although fans usually remember Light, L, or Ryuk's quotes, they're not the only characters capable of making astute observations or philosophical realizations. Soichiro may never be as iconic as his son, but his police officer career offers him an interesting insight into justice and criminal behavior.
                        </p>
                    </div>
                </div>
                <div className='bg-neutral-950/75 filter backdrop-blur-md absolute top-0 left-0 w-full object-cover h-full object-center lg:object-left transition-all z-0'></div>
        </div>
        </>
    )
}

export default AboutMe