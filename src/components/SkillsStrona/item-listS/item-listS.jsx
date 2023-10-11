import "./item-listS.sytles.css";
import { useState } from "react";

const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { skill_name, typ, description } = props.Mlist;

  return (
    <div key={skill_name} className="ItemT">
      <div
        className="Item-List-Cont-TopT"
        onClick={(e) => setIsActive(!isActive)}
      >
        <h1 className="MagicText">
          <strong className="BeginP">
            Nazwa: <span className="title">{skill_name}</span>
          </strong>
        </h1>
        <h1 className="MagicText">
          <strong className="BeginT">
            Rodzaj: <span className="title">{typ}</span>
          </strong>
        </h1>
      </div>

      {isActive && (
        <div
          className="Item-List-Cont-BottomT"
          onClick={(e) => setIsActive(!isActive)}
        >
          <h1 className="MagicText">
            <strong className="BeginT">{description}</strong>
          </h1>
        </div>
      )}
    </div>
  );
};

export default ItemList;
