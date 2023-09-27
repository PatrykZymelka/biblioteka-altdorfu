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
          <strong className="BeginP">Nazwa: {name}</strong>
        </h1>
        <h1 className="MagicText">
          <strong className="BeginT">Max Liczba Talentu: {maksimum}</strong>
        </h1>
        <h1 className="MagicText">
          <strong className="BeginT">test: {tests}</strong>
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
