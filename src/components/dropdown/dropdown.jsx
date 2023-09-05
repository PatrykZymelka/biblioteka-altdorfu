import DropdownIt from "./dropdownIt/dropdownIt";
import { useState } from "react";
import "./dropdown.styles.css"
export default function Dropdown() {
    const [selected, setSelected] = useState("Choose");
    return(
        <div classname="Dropdown">
            <DropdownIt selected={selected} setSelected={setSelected}/>
        </div>
    )
}