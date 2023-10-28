import "./item-listR.sytles.css";
import { useState } from "react";

const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { nazwa, id, zasięg, cel, czas, typ, opis, rodzaj } = props.Mlist;
  function typPicker(rodzaj, typ) {
    let result;
    if (rodzaj === "Cud") {
      return typ;
    } else {
      return "Wiele";
    }
  }
  return (
    <div key={id} className="ItemR">
      <div
        className="Item-List-Cont-TopR"
        onClick={(e) => setIsActive(!isActive)}
      >
        <h1 className="MagicText">
          <strong className="Begin">{nazwa}</strong>
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Bóg:</strong> {typPicker(rodzaj, typ)}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Cel:</strong> {cel}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Zasięg:</strong> {zasięg}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Czas:</strong> {czas}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Typ:</strong> {rodzaj}
        </h1>
      </div>

      {isActive && (
        <div
          className="Item-List-Cont-Bottom"
          onClick={(e) => setIsActive(!isActive)}
        >
          <h1 className="MagicText">{opis}</h1>
        </div>
      )}
    </div>
  );
};

export default ItemList;
