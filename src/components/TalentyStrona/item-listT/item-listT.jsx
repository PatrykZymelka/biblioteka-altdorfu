import "./item-listT.sytles.css";
import { useState } from "react";

const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { name, maksimum, tests, description } = props.Mlist;

  return (
    <div key={name} className="ItemT">
      <div
        className="Item-List-Cont-TopT"
        onClick={(e) => setIsActive(!isActive)}
      >
        <h1 className="MagicText">
          <strong className="BeginP">
            Nazwa: <span className="title">{name}</span>
          </strong>
        </h1>
        <h1 className="MagicText">
          <strong className="BeginT">
            Max: <span className="title">{maksimum}</span>
          </strong>
        </h1>
      </div>

      {isActive && (
        <div
          className="Item-List-Cont-BottomT"
          onClick={(e) => setIsActive(!isActive)}
        >
          <h1 className="MagicText">
            <strong className="BeginT">
              Test: <span className="title">{tests}</span>
            </strong>
          </h1>
          <h1 className="MagicText">
            <strong className="BeginT">{description}</strong>
          </h1>
        </div>
      )}
    </div>
  );
};

export default ItemList;
