import "./menu.styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Titles from "../../../Json/pages.json";

function Menu() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="all">
      <div className="slide_nav">
        <p className="slide_nav_button" onClick={toggleClass}>
          ☰
        </p>
      </div>
      <div className="sm">
        <ul className={isActive ? "slide_menu" : "inv"} onClick={toggleClass}>
          {Titles.map((item) => {
            return (
              <Link to={item.link} className="text">
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Menu;
