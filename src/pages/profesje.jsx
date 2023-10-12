import { useState } from "react";
import { useEffect } from "react";
import classes from "../Json/classes_mod.json";
import "./Pages-Styles/profesje.styles.css";
import DropdownPR from "../components/ProfesjeStrona/dropdownPR/dropdownPR.jsx";
import SearchBox from "../components/ProfesjeStrona/search-box-PR/search-boxPR";
import ItemlistPR from "../components/ProfesjeStrona/item-list-PR/item-listR.jsx";

const Profesje = () => {
  const [searchField, setSearchField] = useState("");
  const [Class, setClass] = useState([]);
  const [NameFilter, setNameFilter] = useState(Class);
  const [selected, setSelected] = useState("");
  const [selectedClass, setSelectedClass] = useState([]);

  useEffect(() => {
    const result = classes.sort((a, b) => a.path.localeCompare(b.path));
    setClass(result);
  }, []);

  useEffect(() => {
    const SC = Class.filter((item) => {
      return item.category.includes(selected);
    });
    setSelectedClass(SC);
  }, [selected, Class, searchField]);

  useEffect(() => {
    const filteredItems = selectedClass.filter((item) => {
      return item.path.toLowerCase().includes(searchField.toLowerCase());
    });
    const sortedItems = filteredItems.sort((a, b) => {
      const aLower = a.path.toLowerCase();
      const bLower = b.path.toLowerCase();
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
  }, [Class, searchField, selectedClass]);

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
        <div className="searchBoxBackgroundR">
          <div>
            <DropdownPR
              selected={selected}
              className="drop1"
              setSelected={setSelected}
            />
          </div>
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
            return <ItemlistPR className="Item" Mlist={item} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};

export default Profesje;
