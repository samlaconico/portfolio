import React, {useState} from "react"
import { TiThMenu } from "react-icons/ti";


type HeaderParams = {
    title:string
}

export function Header({title}:HeaderParams) {

    const[nav, useNav] = useState(false);

    const setNav = () => {
        useNav(!nav);
        setBg(!nav);
    }

    const [bg, setBg] = useState(false);
    
    const changeBg = () => {
        if (window.scrollY >= window.innerHeight*.65) {
            setBg(true);
        } else {
            setBg(false);
        }
    }

    window.addEventListener("scroll", changeBg)

    return (
        <div className={bg ? "top-0 px-2 z-50 fixed w-full flex text-white items-center md:flex-row transition-all bg-neutral-900 ease-in-out" : "top-0 px-2 z-50 fixed w-full flex text-white items-center md:flex-row transition-all ease-in-out"} >
            <button onClick={() => {const element = document.getElementById('home'); element?.scrollIntoView({behavior: 'smooth'})}} className="text-3xl px-7 py-5 font-bold transition-all ease-in-out">{title}</button>
            
            
            <div className="hidden lg:flex top-0 items-center ml-0 md:ml-auto text-2xl md:text-3xl font-medium lg:pr-6 lg:ml-auto transition-all ease-in">
                <button onClick={() => {const element = document.getElementById('about-me'); element?.scrollIntoView({behavior: 'smooth'})}} className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">About Me</button>
                <button onClick={() => {const element = document.getElementById('projects'); element?.scrollIntoView({behavior: 'smooth'})}} className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Projects</button>
                <button onClick={() => {const element = document.getElementById('about-me'); element?.scrollIntoView({behavior: 'smooth'})}} className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Links</button>
                <a href="" className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Resume</a>
            </div>

            <div onClick={setNav} className="hover:cursor-pointer z-50 ml-auto pr-5 text-4xl lg:hidden">
                <TiThMenu/>
            </div>

            <ul onClick={setNav} className={nav ? "absolute top-full left-0 w-full auto bg-neutral-900 justify-center text-center flex flex-col items-center " : "hidden top-0 "}>
                <li className="py-6 font-bold text-3xl"><button onClick={() => {const element = document.getElementById('about-me'); element?.scrollIntoView({behavior: 'smooth'})}} className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">About Me</button></li>
                <li className="py-6 font-bold text-3xl"><button onClick={() => {const element = document.getElementById('projects'); element?.scrollIntoView({behavior: 'smooth'})}} className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Projects</button></li>
                <li className="py-6 font-bold text-3xl"><button onClick={() => {const element = document.getElementById('about-me'); element?.scrollIntoView({behavior: 'smooth'})}} className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Links</button></li>
                <li className="py-6 font-bold text-3xl"><a href="" className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Resume</a></li>
            </ul>
        </div>
    )
}

export default Header