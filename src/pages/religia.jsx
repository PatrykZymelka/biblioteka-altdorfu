import religia from "../Json/religia.json";
import ItemList from "../components/ReligiaStrona/Item-ListR/item-list/item-listR";
import "./Pages-Styles/religia.styles.css";
import SearchBox from "../components/SearchBoxA/SearchBoxA";
import Dropdown from "../components/DropdownA/DropdownA";
import { useState } from "react";
import { useEffect } from "react";

const Religia = () => {
  const [searchField, setSearchField] = useState("");
  const [Religia, setReligia] = useState([]);
  const [NameFilter, setNameFilter] = useState(Religia);
  const [Rodzaj, setRodzaj] = useState([]);
  const [selectedR, setSelectedR] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedMagia, setSelectedMagia] = useState([]);

  useEffect(() => {
    const result = religia.sort((a, b) => a.nazwa.localeCompare(b.nazwa));
    setReligia(result);
  }, []);
  useEffect(() => {
    const R = Religia.filter((item) => {
      return item.rodzaj.includes(selectedR);
    });
    setRodzaj(R);
  }, [Religia, searchField, selected, selectedR]);

  useEffect(() => {
    const sM = Rodzaj.filter((item) => {
      return item.typ.includes(selected);
    });
    setSelectedMagia(sM);
  }, [selected, Rodzaj, Religia, searchField]);

  useEffect(() => {
    const filteredItems = selectedMagia.filter((item) => {
      return item.nazwa.toLowerCase().includes(searchField.toLowerCase());
    });
    const sortedItems = filteredItems.sort((a, b) => {
      const aLower = a.nazwa.toLowerCase();
      const bLower = b.nazwa.toLowerCase();
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
  }, [Religia, searchField, selectedMagia]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const bogowie = [
    "",
    "Manann",
    "Morr",
    "Myrmidia",
    "Ranald",
    "Rhya",
    "Shallya",
    "Sigmar",
    "Taal",
    "Ulryk",
    "Verena",
  ];
  const typy = ["", "Cud", "Błogosławieństwo"];

  return (
    <div className="Page">
      <div className="SideBar">
        <h1> S</h1>
      </div>
      <div className="Center">
        <div className="searchBoxBackgroundR">
          <SearchBox
            onChangeHandler={onSearchChange}
            className="search-box"
            placeholder={"Nazwa"}
          />
          <Dropdown
            selected={selected}
            className="drop1"
            setSelected={setSelected}
            options={bogowie}
            title="Bóg"
          />
          <Dropdown
            selected={selectedR}
            className="drop1"
            setSelected={setSelectedR}
            options={typy}
            title="Typ"
          />
        </div>

        <div className="Container">
          {NameFilter.map((item) => {
            return <ItemList className="Item" Mlist={item} key={religia.id} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};

export default Religia;
