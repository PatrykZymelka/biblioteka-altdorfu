import { Component } from "react";
import MagAnimatic from "../components/magAnimatic/magAnimatic"
import Koło from "../Images/Koło.png";
import "./Pages-Styles/biblioteka-altdorfu.styles.css"
class Home extends Component{
    render(){
        return(
            <div className="Strona">
                <div className="Magia">
                    
                    <h1 className="napis">KOLEGIA MAGII</h1>
                    <div className="Koło-background">
                        <MagAnimatic/>
                        <img src={Koło} className="Koło" alt="Koło"/>
                    </div>
                </div>
                <h1>That is all</h1>
            </div>
        )
    }
}

export default Home;