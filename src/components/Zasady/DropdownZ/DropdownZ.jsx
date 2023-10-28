import { useState } from "react";
import "./DropdownZ.styles.css";

function DropdownIt({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "",
    "Walka",
    "Ruch",
    "Stan",
    "Rany",
    "Przeznaczenie i Bohater",
  ];
  return (
    <div className="dropdownZ">
      <div className="d-buttonZ" onClick={(e) => setIsActive(!isActive)}>
        Kategoria: {selected}
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
