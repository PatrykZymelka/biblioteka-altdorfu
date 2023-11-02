import "./item-listB.styles.css"
import { useState } from "react";

const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { nazwa, id, cena, obciążenie, dostępność, zasięg, typ, obrażenia, cechy, source, opis} = props.Mlist;

  return (
    <div key={id} className="ItemB">
      <div
        className="Item-List-Cont-TopB"
        onClick={(e) => setIsActive(!isActive)}
      >
          <h1 className="MagicText">
            <strong className="BeginB">{nazwa}</strong>
          </h1>
          <h1 className="MagicText">
            <strong className="BeginB">Typ:</strong> {typ}
          </h1>
          <h1 className="MagicText">
            <strong className="BeginB">Cena:</strong> {cena}
          </h1>
          <h1 className="MagicText">
            <strong className="BeginB">Obc.:</strong> {obciążenie}
          </h1>
         
          <h1 className="MagicText">
            <strong className="BeginB">Zasięg:</strong> {zasięg}
          </h1>
          <h1 className="MagicText">
            <strong className="BeginB">Obrażenia:</strong> {obrażenia}
          </h1>
          <h1 className="MagicText">
            <strong className="BeginB">Cechy:</strong> {cechy}
          </h1>  
        </div>
      
      {isActive && (
        <div className="Item-List-Cont-BottomB"
          onClick={(e) => setIsActive(!isActive)}>
             <h1 className="MagicText">
            <strong className="BeginB">Dostępność:</strong> {dostępność}
          </h1>
            <h1 className="MagicText">
            {opis}
          </h1>
            <h1 className="MagicText">
            <strong className="BeginB">Źródło:</strong> {source}
          </h1>  
        </div>
      )}
    </div>
  );
};

export default ItemList;
