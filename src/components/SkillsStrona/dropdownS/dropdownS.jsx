import {useState} from "react";
import "./dropdownS.styles.css"

function DropdownIt({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = ["","Podstawowa", "Zaawansowana"]
    return(
        <div className="dropdownS">
            <div className="d-button" onClick={(e) =>
            setIsActive(!isActive)}>
                Typ: {selected}
                <span />
            </div>
            {isActive && (
            <div className="d-contentS">
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