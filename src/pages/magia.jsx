import magia from "../Json/magia.json";
import ItemList from "../components/MagiaStrona/item-list/item-list";
import "./Pages-Styles/magia.styles.css";
import SearchBox from "../components/SearchBoxA/SearchBoxA";
import Dropdown from "../components/DropdownA/DropdownA";
import { useState } from "react";
import { useEffect } from "react";

const Magia = () => {
  const [searchField, setSearchField] = useState("");
  const [Magia, setMagia] = useState([]);
  const [NameFilter, setNameFilter] = useState(Magia);
  const [selected, setSelected] = useState("");
  const [selectedPZ, setSelectedPZ] = useState("");
  const [selectedPunkty, setSelectedPunkty] = useState([]);
  const [selectedMagia, setSelectedMagia] = useState([]);

  useEffect(() => {
    const result = magia.sort((a, b) => a.nazwa.localeCompare(b.nazwa));
    setMagia(result);
  }, []);

  useEffect(() => {
    const PZ = Magia.filter((item) => {
      return item.pz.includes(selectedPZ);
    });
    setSelectedPunkty(PZ);
  }, [Magia, searchField, selected, selectedPZ]);

  useEffect(() => {
    const sM = selectedPunkty.filter((item) => {
      return item.typ.includes(selected);
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
  }, [Magia, searchField, selectedMagia, selectedPZ]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const szkoły = [
    "",
    "Cieni",
    "Metalu",
    "Niebios",
    "Ognia",
    "Śmierci",
    "Światła",
    "Zwierząt",
    "Życia",
  ];
  const pz = [
    "",
    "1 ",
    "2 ",
    "3 ",
    "4 ",
    "5 ",
    "6 ",
    "7 ",
    "8 ",
    "9 ",
    "10",
    "11",
    "12",
    "13",
    "14",
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
            selected={selected}
            className="drop1"
            setSelected={setSelected}
            options={szkoły}
            title="Tradycje"
          />
          <Dropdown
            selected={selectedPZ}
            className="drop1"
            setSelected={setSelectedPZ}
            options={pz}
            title="PZ"
          />
        </div>

        <div className="Container">
          {NameFilter.map((item) => {
            return <ItemList className="Item" Mlist={item} key={magia.id} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};

export default Magia;
