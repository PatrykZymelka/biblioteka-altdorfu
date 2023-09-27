import CS from "../Images/CieńSymbol.svg";
import MS from "../Images/MetalSymbol.svg";
import NS from "../Images/NieboSymbol.svg";
import OS from "../Images/OgieńSymbol.svg"
import ŚmS from "../Images/ŚmierćSymbol.svg";
import ŚwS from "../Images/ŚwiatłoSymbol.svg";
import ZS from "../Images/ZwierzęSymbol.svg";
import ŻS from "../Images/ŻycieSymbol.svg";
import { Component } from "react";

class ImgMag extends Component{
    renderSwitch(typ){
        
        switch(typ) {
            case "Cieni":
              return <img src={CS} alt="img" className="mimg"/>
            case "Metalu":
              return <img src={MS} alt="img" className="mimg"/>
            case "Niebios":
              return <img src={NS} alt="img" className="mimg"/>
            case "Ognia":
              return <img src={OS} alt="img" className="mimg"/>
            case "Śmierci":
              return <img src={ŚmS} alt="img" className="mimg"/>
            case "Światła":
              return <img src={ŚwS} alt="img" className="mimg"/>
            case "Zwierząt":
                return <img src={ZS} alt="img" className="mimg"/>
            case "Życia":
                return <img src={ŻS} alt="img" className="mimg"/>
            default:
              return <img src={MS} alt="img" className="mimg"/>
        }
    }
    render(){
        const {typ} = this.props;
     return(
        <div>
            {this.renderSwitch(typ)}
        </div>
     )
}
}

  export default ImgMag;