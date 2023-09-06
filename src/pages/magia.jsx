import magia from "../Json/magia.json";
import ItemList from "../components/item-list/item-list";
import "./Pages-Styles/magia.styles.css";
import SearchBox from "../components/search-box/search-box.component"
import Dropdown from "../components/dropdown/dropdownIt/dropdownIt";
import {useState} from 'react';
import { useEffect } from "react";

const Magia = () =>{
    
    const [searchField, setSearchField] = useState('');
    const [Magia, setMagia] = useState([]);
    const [NameFilter, setNameFilter] = useState(Magia);
    const [selected, setSelected] = useState("Choose");
    const [selectedMagia, setSelectedMagia] = useState([])

    useEffect(() =>{
        setMagia(magia)
    }, []);

    useEffect(() =>{
        const sM = Magia.filter((item) =>{
            return item.typ.includes(selected);
        })
        setSelectedMagia(sM);   
    }, [selected])

    useEffect(() =>{
        const newNameChange = selectedMagia.filter((item) =>{
            return item.nazwa.toLowerCase().includes(searchField);
        })
        setNameFilter(newNameChange);
    }, [Magia, searchField,selectedMagia]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }
    
    return(
        <div className="Page">
            <div className="searchBoxBackground">
                <div>
                    <SearchBox
                    onChangeHandler = {onSearchChange} 
                    className = {'search-box'} 
                    placeholder = {'Nazwa zaklęcia'}/>
                </div>
                <div>
                    <Dropdown 
                    selected={selected} 
                    className="drop"
                    setSelected={setSelected}/>
                    
                </div>
            </div>
            
            <div className="Container">
                {NameFilter.map(item =>{
                    return(
                        <ItemList Mlist={item}/>
                    );
                })}
            </div>
        </div>
    )
}


export default Magia;