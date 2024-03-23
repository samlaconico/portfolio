import React, {useEffect, useState, useRef} from "react"
import { TiHome, TiThMenu } from "react-icons/ti";


type HeaderParams = {
    title:string
}

export function Header({title}:HeaderParams) {

    const [nav, useNav] = useState(false);
    const navRef = useRef(nav);
    const [bg, setBg] = useState(false);
    
    const setNav = () => {
        navRef.current = !nav;
        useNav(!nav);
        if (window.scrollY <= window.innerHeight*.65) {
            setBg(!nav);
        }
    }

    const changeBg = () => {
        if (!navRef.current) {
            if (window.scrollY >= window.innerHeight*.65) {
                setBg(true);
            } else {
                setBg(false);
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBg);
    }, [navRef.current]);

    return (
        <div 
            className={
                bg 
                    ? "top-0 px-2 py-5 z-50 fixed w-full flex text-white items-center md:flex-row transition-all bg-neutral-900 ease-in-out" 
                    : "top-0 px-2 py-5 z-50 fixed w-full flex text-white items-center md:flex-row transition-all ease-in-out"
            }
        >
            
            <button 
                onClick={() => {const element = document.getElementById('home'); element?.scrollIntoView({behavior: 'smooth'})}} 
                className="text-3xl mx-7 font-bold transition-all ease-in-out"
            >
                <TiHome></TiHome>
            </button>
            
            {/*default navigator*/}
            <div className="hidden lg:flex top-0 items-center ml-0 md:ml-auto text-2xl md:text-3xl font-medium lg:pr-6 lg:ml-auto transition-all ease-in">
                <button 
                    onClick={() => {
                        const element = document.getElementById('about-me'); 
                        element?.scrollIntoView({behavior: 'smooth'})
                    }} 
                    className="px-3 hover:underline underline-offset-[6px] hover:drop-shadow-glow transition ease-in-out duration-1000"
                >
                    About Me
                </button>

                <button 
                    onClick={() => {
                        const element = document.getElementById('skills'); 
                        element?.scrollIntoView({behavior: 'smooth'})
                    }} 
                    className="px-3 hover:underline underline-offset-[6px] hover:drop-shadow-glow transition ease-in-out duration-1000"
                >
                    Skills
                </button>

                <button 
                    onClick={() => {
                        const element = document.getElementById('projects'); 
                        element?.scrollIntoView({behavior: 'smooth'})
                    }} 
                    className="px-3 hover:underline underline-offset-[6px] hover:drop-shadow-glow transition ease-in-out duration-1000"
                >
                    Projects
                </button>
                
                <a 
                    href="https://drive.google.com/file/d/1Wb-g9G1K0KhZZPGCyh-iiu_UYYB2-l8i/view" 
                    className="px-3 hover:underline underline-offset-[6px] hover:drop-shadow-glow transition ease-in-out duration-1000"
                >     
                    Resume
                </a>
            </div>

            <div 
                onClick={setNav} 
                className="hover:cursor-pointer z-50 ml-auto mr-5 text-4xl lg:hidden"
            >
                <TiThMenu/>
            </div>

            {/* mobile navigator */}
            <ul 
                onClick={setNav} 
                className={nav ? "absolute top-full left-0 w-full auto bg-neutral-900 justify-center text-center flex flex-col items-center rounded-b-2xl " : "hidden top-0 "}
            >
                <li className="py-6 font-bold text-3xl">
                    <button 
                        onClick={() => {
                            const element = document.getElementById('about-me'); 
                            element?.scrollIntoView({behavior: 'smooth'})
                        }} 
                        className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000 hover:underline underline-offset-[6px]"
                    >
                        About Me
                    </button>
                </li>
                <li className="py-6 font-bold text-3xl">
                    <button 
                        onClick={() => {
                            const element = document.getElementById('skills'); 
                            element?.scrollIntoView({behavior: 'smooth'})
                        }} 
                        className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000 hover:underline underline-offset-[6px]"
                    >
                        Skills
                    </button>
                </li>
                <li className="py-6 font-bold text-3xl">
                    <button 
                        onClick={() => {
                            const element = document.getElementById('projects'); 
                            element?.scrollIntoView({behavior: 'smooth'})
                        }} 
                        className="px-3 hover:font-bold hover:drop-shadow-glow transition ease-in-out duration-1000 hover:underline underline-offset-[6px]"
                    >
                        Projects
                    </button>
                </li>
                <li className="py-6 font-bold text-3xl">
                    <a 
                        href="https://drive.google.com/file/d/1Wb-g9G1K0KhZZPGCyh-iiu_UYYB2-l8i/view" 
                        className="px-3 hover:underline underline-offset-[6px] hover:drop-shadow-glow transition ease-in-out duration-1000"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header