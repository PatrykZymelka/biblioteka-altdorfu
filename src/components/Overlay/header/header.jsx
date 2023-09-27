import { Component } from "react";
import './header.styles.css';
import { Link } from "react-router-dom";

class Header extends Component{
    render() {
        return(
            <Link to="/biblioteka-altdorfu" className="Header">
                Wielka Biblioteka Altdorfu
            </Link>
        )
    }
}

export default Header;