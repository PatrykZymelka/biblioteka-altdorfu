import { Component } from "react";
import "./item-list.sytles.css";

class itemList extends Component{
    render(){
        const {nazwa, id, pz, zasięg, cel, czas, typ, opis } = this.props.Mlist;
        return(
            <div key={id} className="Item-List-Cont">
                <h1 className="MagicText">
                    Nazwa: {nazwa}
                </h1>
                <h1 className="MagicText">
                    PZ: {pz}
                </h1>
                <h1 className="MagicText">
                    Zasięg: {zasięg}
                </h1>
                <h1 className="MagicText">
                    Cel: {cel}
                </h1>
                <h1 className="MagicText">
                    Czas: {czas}
                </h1>
                <h1 className="MagicText">
                    Szkoła Magi: {typ}
                </h1>
                <h1 className="MagicText">
                    Opis: {opis}
                </h1>
            </div>
        )
    }
}

export default itemList;
