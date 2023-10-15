import { useState } from "react";
import "./ItemZ.styles.css";
const ItemList = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { Name, Category, Description } = props.Mlist;

  return (
    <div key={Name} className="ItemZ">
      <div
        className="Item-List-Cont-TopZ"
        onClick={(e) => setIsActive(!isActive)}
      >
        <h1 className="MagicText">
          <strong className="BeginZ">
            Nazwa: <span className="title">{Name}</span>
          </strong>
        </h1>
        <h1 className="MagicText">
          <strong className="BeginZ">
            Kategoria: <span className="title">{Category}</span>
          </strong>
        </h1>
      </div>

      {isActive && (
        <div
          className="Item-List-Cont-BottomZ"
          onClick={(e) => setIsActive(!isActive)}
        >
          <h1 className="MagicText">
            <strong className="BeginZ">{Description}</strong>
          </h1>
        </div>
      )}
    </div>
  );
};

export default ItemList;
