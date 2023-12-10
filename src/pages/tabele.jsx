import "./Pages-Styles/tabele.styles.css";
import tabeleM from "../Json/tabeleM.json";
import TabeleList from "../components/TabeleStrona/TabeleList";
import SearchBox from "../components/SearchBoxA/SearchBoxA";
import { useState, useEffect } from "react";

const Tabele = () => {
  const [searchField, setSearchField] = useState("");
  const [NameFilter, setNameFilter] = useState(tabeleM);

  useEffect(() => {
    const filteredItems = tabeleM.filter((item) => {
      return item.tytuł.toLowerCase().includes(searchField.toLowerCase());
    });
    const sortedItems = filteredItems.sort((a, b) => {
      const aLower = a.tytuł.toLowerCase();
      const bLower = b.tytuł.toLowerCase();
      const aStartsWithSearch = aLower.startsWith(searchField.toLowerCase())
        ? -1
        : 0;
      const bStartsWithSearch = bLower.startsWith(searchField.toLowerCase())
        ? -1
        : 0;

      return (
        aStartsWithSearch - bStartsWithSearch || aLower.localeCompare(bLower)
      );
    });

    setNameFilter(sortedItems);
  }, [searchField]);

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
          <SearchBox
            onChangeHandler={onSearchChange}
            className="search-box"
            placeholder={"Tabela"}
          />
        </div>
        <div className="Container">
          {NameFilter.map((item) => {
            return <TabeleList className="Item" Mlist={item} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};

export default Tabele;
