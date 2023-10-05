import "./item-listR.sytles.css";
import { useState } from "react";

const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { category, path, subclasses } = props.Mlist;

  return (
    <div key={path} className="ItemP">
      <div
        className="Item-List-Cont-TopP"
        onClick={(e) => setIsActive(!isActive)}
      >
        <h1 className="MagicText">
          <strong className="BeginP">
            Profesja: <span className="title">{path}</span>
          </strong>
        </h1>
        <h1 className="MagicText">
          <strong className="BeginP">
            Klasa: <span className="title">{category}</span>
          </strong>
        </h1>
      </div>

      {isActive && (
        <div
          className="Item-List-Cont-BottomP"
          
        >
          {subclasses.map((item) => {
            return (
              <div className="poziom">
                <strong className="higher">
                  <strong className="P">Nazwa:</strong>{" "}
                  <strong className="lower">{item.subclassname}</strong>
                </strong>
                <strong className="higher">
                  <strong className="P">Status: </strong>
                  <strong className="lower">{item.status}</strong>
                </strong>
                <strong className="higher">
                  <strong className="P">Umiejętności:</strong>
                  {item.skills.map((s) => {
                    return <strong className="lower"> {s},</strong>;
                  })}
                </strong>

                <strong className="higher">
                  <strong className="P">Talenty:</strong>
                  {item.talents.map((s) => {
                    return <strong className="lower"> {s},</strong>;
                  })}
                </strong>
                <strong className="higher">
                  <strong className="P">Ekwipunek:</strong>
                  {item.equipment.map((s) => {
                    return <strong className="lower"> {s},</strong>;
                  })}
                </strong>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItemList;
