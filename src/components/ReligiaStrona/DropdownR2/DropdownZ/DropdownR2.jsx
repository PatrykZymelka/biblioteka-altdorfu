import { useState } from "react";
import "./DropdownR2.styles.css";

function DropdownIt({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["", "Cud", "Błogosławieństwo"];
  return (
    <div className="dropdownR">
      <div className="d-buttonR" onClick={(e) => setIsActive(!isActive)}>
        Typ: {selected}
        <span />
      </div>
      {isActive && (
        <div className="d-contentZ">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="d-itemR"
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
