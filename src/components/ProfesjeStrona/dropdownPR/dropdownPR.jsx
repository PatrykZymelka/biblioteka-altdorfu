import {useState} from "react";
import "./dropdownPR.styles.css"

function DropdownIt({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = ["","Dworzanie", "Mieszczanie", "Uczeni",  "Łotrzykowie",  "Pospólstwo", "Wędrowcy", "Wodniacy", "Wojownicy"]
    return(
        <div className="dropdown">
            <div className="d-button" onClick={(e) =>
            setIsActive(!isActive)}>
                Klasa: {selected}
                <span />
            </div>
            {isActive && (
            <div className="d-content">
                {options.map((option) => (
                    <div onClick={(e) => {
                            setSelected(option);
                            setIsActive(false);
                        }}
                        className="d-item">
                        {option} 
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}
export default DropdownIt;