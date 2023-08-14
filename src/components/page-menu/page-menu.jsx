import { Component } from "react";
import './page-menu.styles.css';
import PageButtons from "../page-buttons/page-buttons";

class PageMenu extends Component{

render(){
    const { PagesInfo } = this.props;
    return(
        <div className="menu">
            {PagesInfo.map(item =>{
                return(
                    <PageButtons PagesInfo ={item} className="item"/>
                );
            })}
        </div>
    )
}
}

export default PageMenu;