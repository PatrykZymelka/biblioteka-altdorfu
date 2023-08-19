import { Component } from "react";
import PageButtons from "./page-buttons/page-buttons";
import "./page-menu.styles.css";

class PageMenu extends Component{

render(){
    const { PagesInfo } = this.props;
    return(
        <nav className="menu">
            {PagesInfo.map(item =>{
                return(
                    <PageButtons PagesInfo ={item} className="item"/>
                );
            })}
        </nav>
    )
}
}

export default PageMenu;