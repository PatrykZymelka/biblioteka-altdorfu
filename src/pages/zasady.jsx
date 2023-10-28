import rules from "../Json/rules.json";
import { useState } from "react";
import { useEffect } from "react";
import SearchBoxS from "../components/SkillsStrona/search-boxS/search-box.component";
import ItemListZ from "../components/Zasady/ItemZ/ItemZ";
import DropdownZ from "../components/Zasady/DropdownZ/DropdownZ";

const Zasady = () => {
  const [searchField, setSearchField] = useState("");
  const [Rule, setRule] = useState([]);
  const [NameFilter, setNameFilter] = useState(Rule);
  const [selected, setSelected] = useState("");
  const [selectedSkill, setSelectedSkill] = useState([]);

  useEffect(() => {
    const result = rules.sort((a, b) => a.Name.localeCompare(b.Name));
    setRule(result);
  }, []);

  useEffect(() => {
    const SC = Rule.filter((item) => {
      return item.Category.includes(selected);
    });
    setSelectedSkill(SC);
  }, [selected, Rule, searchField]);

  useEffect(() => {
    const filteredItems = selectedSkill.filter((item) => {
      return item.Name.toLowerCase().includes(searchField.toLowerCase());
    });
    const sortedItems = filteredItems.sort((a, b) => {
      const aLower = a.Name.toLowerCase();
      const bLower = b.Name.toLowerCase();
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
  }, [Rule, searchField, selectedSkill]);

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
        <div className="searchBoxBackgroundP">
          <div>
            <DropdownZ
              selected={selected}
              className="drop1"
              setSelected={setSelected}
            />
          </div>
          <div>
            <SearchBoxS
              onChangeHandler={onSearchChange}
              className="search-box"
              placeholder={"Nazwa"}
            />
          </div>
        </div>

        <div className="Container">
          {NameFilter.map((item) => {
            return <ItemListZ className="Item" Mlist={item} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};
export default Zasady;
