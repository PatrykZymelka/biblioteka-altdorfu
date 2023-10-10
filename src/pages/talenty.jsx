import { useState } from "react";
import { useEffect } from "react";
import talents from "../Json/talents.json";
import "./Pages-Styles/talenty.styles.css";
import SearchBox from "../components/MagiaStrona/search-box/search-box.component";
import ItemList from "../components/TalentyStrona/item-listT/item-listT.jsx";

const Talenty = () => {
  const [searchField, setSearchField] = useState("");
  const [Talent, setTalent] = useState([]);
  const [NameFilter, setNameFilter] = useState(Talent);
  useEffect(() => {
    const result = talents.sort((a, b) => a.name.localeCompare(b.name));
    setTalent(result);
  }, []);

  useEffect(() => {
    const filteredItems = Talent.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const sortedItems = filteredItems.sort((a, b) => {
      const aLower = a.name.toLowerCase();
      const bLower = b.name.toLowerCase();
      const aStartsWithSearch = aLower.startsWith(searchField.toLowerCase()) ? -1 : 0;
      const bStartsWithSearch = bLower.startsWith(searchField.toLowerCase()) ? -1 : 0;
  
      return aStartsWithSearch - bStartsWithSearch || aLower.localeCompare(bLower);
    });
  
    setNameFilter(sortedItems);
  }, [Talent, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="Page">
      <div className="SideBar">
        <h1> S</h1>
      </div>
      <div className="Center">
        <div className="searchBoxBackgroundT">
          <div>
            <SearchBox
              onChangeHandler={onSearchChange}
              className="search-box"
              placeholder={"Nazwa"}
            />
          </div>
        </div>

        <div className="Container">
          {NameFilter.map((item) => {
            return <ItemList className="Item" Mlist={item} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};

export default Talenty;
