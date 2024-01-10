import React, { useState } from "react"
import haruhi from '/src/assets/haruhi.png'
import haruhigif from '/src/assets/haruhi.gif'

type ProjectCardParams = {
    title:string,
    img:string,
    description:string,
}


function ProjectCards({title, img, description}:ProjectCardParams) {

    const [image, setImage] = useState(haruhi);
    const changeImage = () => {
        if (image != haruhigif) {

            setImage(haruhigif)
        } else {
            setImage(haruhi);
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