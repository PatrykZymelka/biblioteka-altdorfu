import skills from "../Json/skills.json";
import { useState } from "react";
import { useEffect } from "react";
import SearchBoxS from "../components/SkillsStrona/search-boxS/search-box.component";
import ItemListS from "../components/SkillsStrona/item-listS/item-listS";
import DropdownS from "../components/SkillsStrona/dropdownS/dropdownS";

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
  return (
    <div className="Page">
      <div className="SideBar">
        <h1> S</h1>
      </div>
      <div className="Center">
        <div className="searchBoxBackgroundP">
          <div>
            <DropdownS
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
