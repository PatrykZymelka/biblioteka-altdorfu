import { useState } from "react";
import "./DropdownA.styles.css";

function DropdownIt({ selected, setSelected, options, title }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="d-button" onClick={(e) => setIsActive(!isActive)}>
        {title}: {selected}
        <span className="fas fa caret-down" />
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
              key={options}
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
