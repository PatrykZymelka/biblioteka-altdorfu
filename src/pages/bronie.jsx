import bronie from "../Json/bronie.json"
import ItemList from "../components/BronieStrona/item-listB";
import "./Pages-Styles/magia.styles.css";
import SearchBox from "../components/SearchBoxA/SearchBoxA";
import Dropdown from "../components/DropdownA/DropdownA";
import { useState } from "react";
import { useEffect } from "react";

const Bronie = () => {
  const [searchField, setSearchField] = useState("");
  const [Magia, setMagia] = useState([]);
  const [NameFilter, setNameFilter] = useState(Magia);
  const [selected, setSelected] = useState("");
  const [selectedtyp, setSelectedtyp] = useState("");
  const [selectedPunkty, setSelectedPunkty] = useState([]);
  const [selectedMagia, setSelectedMagia] = useState([]);

  useEffect(() => {
    const result = bronie.sort((a, b) => a.nazwa.localeCompare(b.nazwa));
    setMagia(result);
  }, []);

  useEffect(() => {
    const typ = Magia.filter((item) => {
      return item.typ.includes(selectedtyp);
    });
    setSelectedPunkty(typ);
  }, [Magia, searchField, selected, selectedtyp]);

  useEffect(() => {
    const sM = selectedPunkty.filter((item) => {
      return item.rodzaj.includes(selected);
    });
    setSelectedMagia(sM);
  }, [selected, Magia, searchField, selectedPunkty]);

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
  }, [Magia, searchField, selectedMagia, selectedtyp]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const rodzaj = [
    "",
    "Broń Biała",
    "Broń Zasięgowa",
    "Amunicja"
  ];
  const typ = [
    "",
    "Prosta",
    "Tarcza",
    "Kawaleryjskia",
    "Szermiercza",
    "Bijatyka",
    "Korbacze",
    "Parujące",
    "Drzewcowa",
    "Dwuręczna",
    "Łuk",
    "Kusze",
    "Prochowa",
    "Eksperymentalna",
    "Miotana",
    "Oplątująca",
    "Materiały Wybuchowe",
    "Proce",
    "Amunicja: Łuk",
    "Amunicja: Kusza",
    "Amunicja: Prochowa/Eksper.",
    "Amunicja: Proca",
  ];

  return (
    <div className="Page">
      <div className="SideBar">
        <h1> S</h1>
      </div>
      <div className="Center">
        <div className="searchBoxBackground">
          <SearchBox
            onChangeHandler={onSearchChange}
            className="search-box"
            placeholder={"Nazwa"}
          />
          <Dropdown
            selected={selectedtyp}
            className="drop1"
            setSelected={setSelectedtyp}
            options={typ}
            title="Typ"
          />
          <Dropdown
            selected={selected}
            className="drop1"
            setSelected={setSelected}
            options={rodzaj}
            title="Rodzaj"
          />
          
        </div>

        <div className="Container">
          {NameFilter.map((item) => {
            return <ItemList className="Item" Mlist={item} key={bronie.id} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};

export default Bronie;
