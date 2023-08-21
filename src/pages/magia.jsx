import { Component } from "react";
import magia from "../Json/magia.json";
import ItemList from "../components/item-list/item-list";
import "./Pages-Styles/magia.styles.css";

class Magia extends Component{
    constructor(){
        super();
        this.state ={
          Magia: []
        }
    };

    componentDidMount(){
        this.setState({
          Magia: magia
        })
    }
      
    render(){
        const Mlist = this.state.Magia;
        return(
            <div className="Container">
                {Mlist.map(item =>{
                    return(
                        <ItemList Mlist={item}/>
                    );
                })}
            </div>
        )
    }
}

export default Magia;