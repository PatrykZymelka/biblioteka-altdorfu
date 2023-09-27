import {useState} from "react";
import "./dropdownlt.styles.css"

function DropdownIt({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = ["", "Cieni", "Metalu", "Niebios", "Ognia",  "Śmierci", "Światła",  "Zwierząt", "Życia"]
    return(
        <div className="dropdown">
            <div className="d-button" onClick={(e) =>
            setIsActive(!isActive)}>
                Tradycja: {selected}
                <span className="fas fa caret-down"/>
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