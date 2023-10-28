import { useState } from "react";
import "./DropdownR.styles.css";

function DropdownIt({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "",
    "Manan",
    "Morr",
    "Myrmidia",
    "Ranald",
    "Rhyia",
    "Shallyia",
    "Sigmar",
    "Taal",
    "Ulryk",
    "Verena",
  ];
  return (
    <div className="dropdownZ">
      <div className="d-button" onClick={(e) => setIsActive(!isActive)}>
        Bóg: {selected}
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
