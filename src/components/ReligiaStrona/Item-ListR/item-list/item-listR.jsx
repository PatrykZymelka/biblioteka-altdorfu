import "./item-listR.sytles.css";
import { useState } from "react";

const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { nazwa, id, zasięg, cel, czas, typ, opis, rodzaj, source } = props.Mlist;
  function typPicker(rodzaj, typ) {
    if (rodzaj === "Cud") {
      return typ;
    } else {
      var l = typ.length - 1;
      var Result = "";
      for (let i = 1; i <= l; i++) {
        Result = Result + typ[i] + " ";
      }
      return Result;
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
          className="Item-List-Cont-BottomR"
          onClick={(e) => setIsActive(!isActive)}
        >
          <h1 className="MagicText">{opis}</h1>
          <h1 className="MagicText">Źródło: {source}</h1>
        </div>
      )}
    </div>
  );
};

export default ItemList;
