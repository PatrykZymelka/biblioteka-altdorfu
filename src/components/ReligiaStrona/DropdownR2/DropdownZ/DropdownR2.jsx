import { useState } from "react";
import "./DropdownR2.styles.css";

function DropdownIt({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["", "Cud", "Błogosławieństwo"];
  return (
    <div className="dropdown">
      <div className="d-button" onClick={(e) => setIsActive(!isActive)}>
        Typ: {selected}
        <span />
      </div>
      {isActive && (
        <div className="d-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="d-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DropdownIt;
