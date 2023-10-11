import {useState} from "react";
import "./dropdownPZ.styles.css"

function DropdownIt({selectedPZ, setSelectedPZ}){
    const [isActive, setIsActive] = useState(false);
    const options = ["", "1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10","11", "12", "13", "14"]
    return(
        <div className="dropdown">
            <div className="d-button" onClick={(e) =>
            setIsActive(!isActive)}>
                PZ: {selectedPZ}
                <span />
            </div>
            {isActive && (
            <div className="d-content">
                {options.map((option) => (
                    <div onClick={(e) => {
                            setSelectedPZ(option);
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