import React, { useState } from "react"

type ProjectCardParams = {
    title:string,
    img:string,
    gif:string
    description:string,
}


export function ProjectCards({title, img, gif, description}:ProjectCardParams) {

    const [image, setImage] = useState(img);
    const changeImage = () => {
        if (image != gif) {
            setImage(gif)
        } else {
            setImage(img);
        }
    }

    return (
        <div className="bg-white max-w-[35rem] h-[30rem] rounded-xl items-start content-start text-center justify-start flex-col shadow-xl">
            
            <img className="object-cover object-center drp  w-full h-3/5 rounded-t-xl" onMouseOut={changeImage} onMouseOver={changeImage} src={image}></img>
            <h1 className="text-3xl max-h-[100px] font-semibold pt-2">{title}</h1>
            <p className="overflow-y-scroll max-h-[8rem] py-2 px-6">
                {description}
            </p>
        </div>
    )
}

export default ProjectCards