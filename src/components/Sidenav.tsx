import React, {useState} from "react";

const Sidenav = () => {
    const [sideNav, setSideNav] = useState(false);
    const toggleNav = () => {
        setSideNav(!sideNav);
    }


    return (
        <div>
            <p> sideNav </p>
        </div>
    )
}

export default Sidenav