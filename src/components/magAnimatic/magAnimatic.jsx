import React from "react";
import "./magAnimatic.styles.css"
import Sun from "../../Images/Sun.PNG"

function magAnimatic() {
    return(
        <div className="ContAnim">
            <img src={Sun} alt="Sun" className="Sun"/>
        </div>
    )
}

export default magAnimatic;