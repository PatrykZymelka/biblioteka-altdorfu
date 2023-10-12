import { Component } from "react";
import PageButtons from "./page-buttons/page-buttons";
import "./page-menu.styles.css";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo.png"
import Media from 'react-media';
import React, { Fragment } from 'react';
import Menu from "../menu/menu"


class PageMenu extends Component{

render(){
    const { PagesInfo } = this.props;
    return(
        <div className="bar">
            
            <nav className="menu">
            <Link to={"/"} id={"asdfqweqwe"}>
                <img src={logo} alt="logo" className="Logo"/>
            </Link>
            <Media queries={{
                small: "(max-width: 800px)",
                large: "(min-width: 801px)"
              }}>
                {matches => (
                  <Fragment>
                    {matches.small && <div className="burger"><Menu/></div>}
                    {matches.large && 
                        <div className="Bar">{PagesInfo.map(item =>{
                        return(
                            <PageButtons PagesInfo ={item} className="item" key={PagesInfo.id}/>
                        );
                    })}</div>}
                  </Fragment>
                )}
              </Media>
                
            
            </nav>
          
        </div>
    )
}
}

export default PageMenu;