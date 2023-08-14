import { Component } from "react";
import "./page-buttons.styles.css";

class PageButtons extends Component{
    render(){
        const {id,title} = this.props.PagesInfo
        return(
            <div className={`pages`}
            key={id}>
                <h1>{title}</h1>
            </div>
        )
    }


}

export default PageButtons;