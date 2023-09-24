import "./item-list.sytles.css";
import { useState } from "react";

const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { nazwa, id, pz, zasięg, cel, czas, typ, opis} = props.Mlist;
  return (
    <div key={id} className="Item">
      <div
        className="Item-List-Cont-Top"
        onClick={(e) => setIsActive(!isActive)}
      >
        <h1 className="MagicText">
          {/* <img src={`../Images/CieńSymbol.svg`} alt="logo" className="logo" key={id}/> */}
          <strong className="Begin">{nazwa}</strong>
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">PZ:</strong> {pz}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Zasięg:</strong> {zasięg}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Cel:</strong> {cel}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Czas:</strong> {czas}
        </h1>
        <h1 className="MagicText">
          <strong className="Begin">Szkoła Magi:</strong> {typ}
        </h1>
      </div>
      {isActive && (
        <div className="Item-List-Cont-Bottom">
          <h1 className="MagicText">{opis}</h1>
        </div>
      )}
    </div>
  );
};

export default ItemList;
