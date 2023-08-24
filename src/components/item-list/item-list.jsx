import { Component } from "react";
import "./item-list.sytles.css";

class itemList extends Component{
    render(){
        const {nazwa, id, pz, zasięg, cel, czas, typ, opis } = this.props.Mlist;
        return(
            <div key={id} className="Item">
                <div className="Item-List-Cont-Top">
                    <h1 className="MagicText">
                        <strong>Nazwa:</strong> {nazwa}
                    </h1>
                    <h1 className="MagicText">
                        <strong>PZ:</strong> {pz}
                    </h1>
                    <h1 className="MagicText">
                        <strong>Zasięg:</strong> {zasięg}
                    </h1>
                    <h1 className="MagicText">
                        <strong>Cel:</strong> {cel}
                    </h1>
                    <h1 className="MagicText">
                        <strong>Czas:</strong> {czas}
                    </h1>
                    <h1 className="MagicText">
                        <strong>Szkoła Magi:</strong> {typ}
                    </h1>
                </div>
                <div className="Item-List-Cont-Bottom">
                    <h1 className="MagicText">
                        <strong>Opis:</strong> {opis}
                    </h1>
                </div>
            </div>
        )
    }
}

export default itemList;
