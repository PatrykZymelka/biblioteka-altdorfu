import "./Cechy.styles.css";
const Cechy = (props) => {
  const list = props.cechy;
  const l = ["WW", "US", "S", "Wt", "I", "Zw", "Zr", "Int", "SW", "Ogł"];
  return (
    <div className="Tabela">
      <div className="TopCechy">
        {l.map((item) => {
          return (
            <div className="it">
              <h1 className="i">{item}</h1>
            </div>
          );
        })}
      </div>
      <div className="BotCechy">
        {list.map((item) => {
          return (
            <div className="it">
              <h1 className="i">{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cechy;
