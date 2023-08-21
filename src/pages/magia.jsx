import { Component } from "react";
import magia from "../Json/magia.json";
import ItemList from "../components/item-list/item-list";
import "./Pages-Styles/magia.styles.css";
import SearchBox from "../components/search-box/search-box.component"

class Magia extends Component{
    constructor(){
        super();
        this.state ={
          Magia: [],
          searchBar: ''
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

        const fileteredMagia = Magia.filter((zaklęcie) => {
            return zaklęcie.nazwa.toLowerCase().includes(searchBar);
            });

        return(
            <div>
                <div className="searchBoxBackground">
                    <SearchBox
                    onChangeHandler = {onSearchChange} 
                    className = {'search-box'} 
                    placeholder = {'Nazwa zaklęcia'}/>
                </div>
                <div className="Container">
                    {fileteredMagia.map(item =>{
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