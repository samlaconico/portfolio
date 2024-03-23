import React, { useState } from "react"

type ProjectCardParams = {
    title:string,
    img:string,
    gif:string
    description:string,
    tech:string,
}


export function ProjectCards({title, img, gif, description, tech}:ProjectCardParams) {
    const [image, setImage] = useState(img);
    const changeImage = () => {
        if (image != gif) {
            setImage(gif)
        } else {
            setImage(img);
        }
    }

    return (
        <div 
            className="bg-white max-w-[35rem] h-[30rem] rounded-xl text-center flex-col shadow-xl transition-all duration-150 hover:scale-105 ease-in-out"
        >
            <img 
                className="object-cover object-center drp  w-full h-3/5 rounded-t-xl" 
                src={image}
                onMouseOut={changeImage} 
                onMouseOver={changeImage} 
            >        
            </img>
            <h1 className="text-2xl max-h-[100px] font-semibold pt-2">
                {title}
            </h1>
            <div className="overflow-y-auto overflow-x-hidden no-scrollbar max-h-[8rem] px-3 font-light">
                <h3 className="font-medium">
                        Made with {tech}
                </h3>
                <p className="pt-1">
                    {description}
                </p>
            </div>
            
        </div>
    )
}

export default ProjectCards