import { Component } from "react";
import PageButtons from "./page-buttons/page-buttons";
import "./page-menu.styles.css";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo.png"



class PageMenu extends Component{

render(){
    const { PagesInfo } = this.props;
    return(
        <div className="bar">
            
            <nav className="menu">
            <Link to={"/"} id={"asdfqweqwe"}>
                <img src={logo} alt="logo" className="Logo"/>
            </Link>
                {PagesInfo.map(item =>{
                    return(
                        <PageButtons PagesInfo ={item} className="item" key={PagesInfo.id}/>
                    );
                })}
            </nav>
          
        </div>
    )
}
}

export default PageMenu;