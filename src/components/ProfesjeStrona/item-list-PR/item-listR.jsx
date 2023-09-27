import "./item-listR.sytles.css";
import { useState } from "react";


const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { category, path, subclasses} = props.Mlist;

  return (
    <div key={path} className="Item">
      <div
        className="Item-List-Cont-Top"
        onClick={(e) => setIsActive(!isActive)}
      >
          <h1 className="MagicText">
            <strong className="Begin">Profesja: {path}</strong>
          </h1>
          <h1 className="MagicText">
            <strong className="Begin">Klasa: {category}</strong>
          </h1>
          
        </div>
      
      {isActive && (
        <div className="Item-List-Cont-Bottom"
        onClick={(e) => setIsActive(!isActive)}>
          {subclasses.map((item) =>{
            return(
              <div className="poziom">
                <strong className="higher"><strong className="Begin">Nazwa:</strong> <strong className="lower">{item.subclassname}</strong></strong>
                <strong className="higher"><strong className="Begin">Status: </strong><strong className="lower">{item.status}</strong></strong>
                <strong className="higher"><strong className="Begin">Umiejętności:</strong>
                {item.skills.map((s) =>{
                  return(<strong className="lower"> {s},</strong>)
                })
                }</strong>
                
                
                <strong className="higher"><strong className="Begin">Talenty:</strong>
                {item.talents.map((s) =>{
                  return(<strong className="lower"> {s},</strong>)
                })
                }</strong>
                <strong className="higher"><strong className="Begin">Ekwipunek:</strong>
                {item.equipment.map((s) =>{
                  return(<strong className="lower"> {s},</strong>)
                })
                }</strong>
              </div>
            )
          })
          }
        </div>
      )}
    </div>
  );
};

export default ItemList;
