import bronie from "../Json/bronie.json";
import ItemList from "../components/BronieStrona/item-listB";
import "./Pages-Styles/magia.styles.css";
import SearchBox from "../components/SearchBoxA/SearchBoxA";
import Dropdown from "../components/DropdownA/DropdownA";
import { useState } from "react";
import { useEffect } from "react";

const Bronie = () => {
  const [searchField, setSearchField] = useState("");
  const [Broń, setBroń] = useState([]);
  const [NameFilter, setNameFilter] = useState(Broń);
  const [selected, setSelected] = useState("");
  const [selectedtyp, setSelectedtyp] = useState("");
  const [selectedPunkty, setSelectedPunkty] = useState([]);
  const [selectedMagia, setSelectedMagia] = useState([]);

  useEffect(() => {
    const result = bronie.sort((a, b) => a.typ.localeCompare(b.typ));
    setBroń(result);
  }, []);

  useEffect(() => {
    const typ = Broń.filter((item) => {
      return item.typ.includes(selectedtyp);
    });
    setSelectedPunkty(typ);
  }, [Broń, searchField, selected, selectedtyp]);

  useEffect(() => {
    const sM = selectedPunkty.filter((item) => {
      return item.rodzaj.includes(selected);
    });
    setSelectedMagia(sM);
  }, [selected, Broń, searchField, selectedPunkty]);

  useEffect(() => {
    const filteredItems = selectedMagia.filter((item) => {
      return item.nazwa.toLowerCase().includes(searchField.toLowerCase());
    });
    setNameFilter(filteredItems);
  }, [Broń, searchField, selectedMagia, selectedtyp]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const rodzaj = ["", "Broń Biała", "Broń Zasięgowa", "Amunicja"];
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
          +
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
