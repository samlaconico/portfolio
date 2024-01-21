import React, {useState} from "react"
import { TiThMenu } from "react-icons/ti";


type HeaderParams = {
    title:string
}

export function Header({title}:HeaderParams) {

    const[nav, useNav] = useState(false);

    const setNav = () => {
        useNav(!nav);
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
            <h1 className="text-3xl px-7 py-7 font-bold transition-all ease-in-out">{title}</h1>
            
            
            <div className="hidden lg:flex top-0 items-center ml-0 md:ml-auto text-2xl md:text-3xl font-medium lg:pr-6 lg:ml-auto transition-all ease-in">
                <a href="#home" className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Resume</a>
                <a href="#portfolio" className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Projects</a>
                <a href="#links" className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000">Links</a>
            </div>

            <div onClick={setNav} className="hover:cursor-pointer z-50 ml-auto pr-5 text-4xl lg:hidden">
                <TiThMenu/>
            </div>

            <ul className={nav ? "absolute top-full left-0 w-full auto bg-gray-600 justify-center text-center flex flex-col items-center " : "hidden top-0 "}>
                <li className="py-6 font-bold text-3xl"><a href="https://www.google.com">Resume</a></li>
                <li className="py-6 font-bold text-3xl"><a href="https://www.google.com">Projects</a></li>
                <li className="py-6 font-bold text-3xl"><a href="https://www.google.com">Links</a></li>
            </ul>
        </div>
    )
}

export default Header