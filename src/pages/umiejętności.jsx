import skills from "../Json/skills.json";
import { useState } from "react";
import { useEffect } from "react";
import SearchBox from "../components/SearchBoxA/SearchBoxA";
import ItemListS from "../components/SkillsStrona/item-listS/item-listS";
import Dropdown from "../components/DropdownA/DropdownA";

const Umiejętności = () => {
  const [searchField, setSearchField] = useState("");
  const [Skill, setSkill] = useState([]);
  const [NameFilter, setNameFilter] = useState(Skill);
  const [selected, setSelected] = useState("");
  const [selectedSkill, setSelectedSkill] = useState([]);

  useEffect(() => {
    const result = skills.sort((a, b) =>
      a.skill_name.localeCompare(b.skill_name)
    );
    setSkill(result);
  }, []);

  useEffect(() => {
    const SC = Skill.filter((item) => {
      return item.typ.includes(selected);
    });
    setSelectedSkill(SC);
  }, [selected, Skill, searchField]);

  useEffect(() => {
    const filteredItems = selectedSkill.filter((item) => {
      return item.skill_name.toLowerCase().includes(searchField.toLowerCase());
    });
    const sortedItems = filteredItems.sort((a, b) => {
      const aLower = a.skill_name.toLowerCase();
      const bLower = b.skill_name.toLowerCase();
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
  }, [Skill, searchField, selectedSkill]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const options = ["", "Podstawowa", "Zaawansowana"];

  return (
    <div className="Page">
      <div className="SideBar">
        <h1> S</h1>
      </div>
      <div className="Center">
        <div className="searchBoxBackgroundP">
          <SearchBox
            onChangeHandler={onSearchChange}
            className="search-box"
            placeholder={"Nazwa"}
          />
          <Dropdown
            selected={selected}
            className="drop1"
            setSelected={setSelected}
            options={options}
            title="Rodzaj"
          />
        </div>

        <div className="Container">
          {NameFilter.map((item) => {
            return <ItemListS className="Item" Mlist={item} />;
          })}
        </div>
      </div>
      <div className="SideBar">
        <h1>S</h1>
      </div>
    </div>
  );
};
export default Umiejętności;
