import { Component } from "react";
/* import MagAnimatic from "../components/HomeStrona/magAnimatic/magAnimatic";
import Koło from "../Images/Koło.png"; */
import "./Pages-Styles/biblioteka-altdorfu.styles.css"
class Home extends Component{
    render(){
        return(
            <div className="Strona">
{               /*<div className="Magia">
                    <h1 className="napis">KOLEGIA MAGII</h1>
                    <div className="Koło-background">
                        <MagAnimatic/>
                        <img src={Koło} className="Koło" alt="Koło"/>
                    </div>
                </div> */}
                <div classname="Welcome">
                    <h2 className="opis">Jego Imperialna Mość, Monarcha Karl-Franz, Pan na wszystkich Wysokościach i Nizinach, Prawdziwy Dziedzic Sigmara i Wywyższony Władca Imperium wita was w</h2>
                    <h1 className="Title">
                        Wielkiej Bibliotece Altdorfu
                    </h1>
                </div>
            </div>
        )
    }
}

export default Home;
