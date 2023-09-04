import {useState} from "react";

function DropdownIt({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = ["Światła", "Cieni", "Ognia"]
    return(
        <div className="dropdown">
            <div className="d-button" onClick={(e) =>
            setIsActive(!isActive)}>
                {selected}
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