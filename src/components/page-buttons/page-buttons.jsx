import { Component } from "react";
import "./page-buttons.styles.css";

class PageButtons extends Component{
    render(){
        const {id,name} = this.props.PagesInfo
        return(
            <div className={`pages`}
            key={id}>
                <h1>{name}</h1>
            </div>
        )
    }


}

export default PageButtons;