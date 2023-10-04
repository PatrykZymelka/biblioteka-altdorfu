import React from "react";
import BackD from "../../../Images/Back-Death.png"
import "./magAnimatic.styles.css"
import BackS from "../../../Images/Back-Shadow.png"

function magAnimatic() {
    return(
        <div className="ContAnim">
            <img src={BackD} className="Death" alt="Mag"/>
            <img src={BackS} className="Shad" alt="Mag"/>
        </div>
    )
}

export default magAnimatic;