import "./TabeleList.styles.css";
import { useState } from "react";

function TabeleList(props) {
  const [isActive, setIsActive] = useState(false);
  const { tytuł, items, idB } = props.Mlist;

  return (
    <div className="ItemT" key={idB}>
      <div
        className="Item-List-Cont-TopT"
        onClick={(e) => setIsActive(!isActive)}
      >
        <h1>{tytuł}</h1>
      </div>

      {isActive && (
        <div
          className="Item-List-Cont-BottomT"
          onClick={(e) => setIsActive(!isActive)}
        >
          {items.map((item) => {
            return (
              <div key={item.id} className="grid">
                <div className="b">
                  <strong className="BeginB">{item.nr}</strong>
                </div>
                <div className="m">
                  <strong className="BeginB">{item.opis}</strong>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TabeleList;
