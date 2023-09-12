import magia from "../Json/magia.json";
import ItemList from "../components/item-list/item-list";
import "./Pages-Styles/magia.styles.css";
import SearchBox from "../components/search-box/search-box.component"
import Dropdown from "../components/dropdown/dropdownIt/dropdownIt";
import DropdownPZ from "../components/dropdownPZ/dropdownPZ"
import {useState} from 'react';
import { useEffect } from "react";

const Magia = () =>{
    
    const [searchField, setSearchField] = useState('');
    const [Magia, setMagia] = useState([]);
    const [NameFilter, setNameFilter] = useState(Magia);
    const [selected, setSelected] = useState("");
    const [selectedPZ, setSelectedPZ] = useState("");
    const [selectedPunkty, setSelectedPunkty] = useState([]);
    const [selectedMagia, setSelectedMagia] = useState([])
    
    useEffect(() =>{
        const result = magia.sort((a,b) => a.nazwa.localeCompare(b.nazwa))
        setMagia(result); 
        
    }, []);

    useEffect(() =>{
        const PZ = Magia.filter((item) =>{
            return item.pz.includes(selectedPZ);
        })
        setSelectedPunkty(PZ);   
    }, [ Magia, searchField, selected, selectedPZ])

    

    useEffect(() =>{
        const sM = selectedPunkty.filter((item) =>{
            return item.typ.includes(selected);
        })
        setSelectedMagia(sM);   
    }, [selected, Magia, searchField, selectedPunkty])

    useEffect(() =>{
        const newNameChange = selectedMagia.filter((item) =>{
            return item.nazwa.toLowerCase().includes(searchField);
        })
        setNameFilter(newNameChange);
    }, [Magia, searchField,selectedMagia,selectedPZ]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    
    
    return(
        <div className="Page">
            <div>
                <h1 className="SideBar"> S</h1>
            </div>
            <div className="Center">
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
                    <div>
                        <DropdownPZ
                        selectedPZ={selectedPZ} 
                        className="drop"
                        setSelectedPZ={setSelectedPZ}
                        />
                    </div>
                </div>
                
                <div className="Container">
                    {NameFilter.map(item =>{
                        return(
                            <ItemList className="Item" Mlist={item}/>
                        );
                    })}
                </div>
            </div>
            <div >
                <h1 className="SideBar">S</h1>
            </div>
        </div>
        
    )
}


export default Magia;