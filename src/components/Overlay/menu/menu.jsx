import React, {Component} from 'react';
import "./menu.styles.css"
import { Link} from "react-router-dom";

class Menu extends Component {
  constructor(props, context) {
    super(props, context);
 
  this.state = {
    visible: false
  };
}
  render() {
    const { visible } = this.state;
    return (
      <div className='all'>
            <div id='slide_nav'>     
                <p id="slide_nav_button" onClick={() => this.setState({visible: !visible })}>☰</p>
            </div>
            <div>
                <ul className='slide_menu' style={{ display: (visible ? 'grid' : 'none') }}>
                    <Link to="/magia" className="text">
                        Magia
                    </Link>
                    <Link to="/profesje" className="text">
                        Profesje
                    </Link>
                    <Link to="/talenty" className="text">
                        Talenty
                    </Link>
                    <Link to="/umiejętności" className="text">
                        Umiejętności
                    </Link>
                    
                </ul>
          </div>
      </div>
    );
  }
}
export default Menu;