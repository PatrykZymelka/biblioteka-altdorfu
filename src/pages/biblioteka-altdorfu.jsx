import { Component } from "react";
/* import MagAnimatic from "../components/HomeStrona/magAnimatic/magAnimatic";
import Koło from "../Images/Koło.png"; */
import "./Pages-Styles/biblioteka-altdorfu.styles.css";
import Title from "../Images/Title.png";

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
                    <img src={Title} alt="Witajcie W Wielkiej Bibliotece Altdorfu" className="Title"/>
                </div>
                
            </div>
        )
    }
}

export default Home;
