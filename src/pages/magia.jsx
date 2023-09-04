import { Component } from "react";
import magia from "../Json/magia.json";
import ItemList from "../components/item-list/item-list";
import "./Pages-Styles/magia.styles.css";
import SearchBox from "../components/search-box/search-box.component"
import Dropdown from "../components/dropdown/dropdown";

class Magia extends Component{
    constructor(){
        super();
        this.state ={
          Magia: [],
          searchBar: '',
        }
    };

    componentDidMount(){
        this.setState({
          Magia: magia
        })
    }
    
    onSearchChange = (event) => 
    {const searchBar = event.target.value.toLowerCase();
    this.setState(
        () => {
        return{searchBar};
        });
    }

    render(){
        const {searchBar, Magia} = this.state;
        const {onSearchChange} = this;
    
        const NameFiler = Magia.filter((zaklęcie) => {
            return zaklęcie.nazwa.toLowerCase().includes(searchBar);
            });  

        return(
            <div className="Page">
                <div className="searchBoxBackground">
                    <SearchBox
                    onChangeHandler = {onSearchChange} 
                    className = {'search-box'} 
                    placeholder = {'Nazwa zaklęcia'}/>
                    <Dropdown/>
                </div>
                <div className="Container">
                    {NameFiler.map(item =>{
                        return(
                            <ItemList Mlist={item}/>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Magia;