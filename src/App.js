import { Component } from "react";
import "./App.css";
import PageMenu from "./components/Overlay/page-menu/page-menu";
import pages from "./Json/pages.json";
import { Route, Routes } from "react-router-dom";
import BibliotekaAltforfu from "./pages/biblioteka-altdorfu.jsx";
import Magia from "./pages/magia";
import Profesje from "./pages/profesje";
import Talenty from "./pages/talenty";
/* 
import Lore from './pages/lore';
import Zasady from './pages/zasady'; 
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      PagesInfo: [],
    };
  }

  componentDidMount() {
    this.setState({
      PagesInfo: pages,
    });
  }

  render() {
    const { PagesInfo } = this.state;
    return (
      <div className="App">
        <div className="Top">
          <PageMenu PagesInfo={PagesInfo} />
        </div>
        <div className="Bot">
          <Routes>
            <Route path="/" element={<BibliotekaAltforfu />} />
            <Route path="/magia" element={<Magia />} />
            <Route path="/profesje" element={<Profesje />} />
            <Route path="/talenty" element={<Talenty />} />
            {/* 
          <Route path="/lore" element={<Lore/>} />
          <Route path="/zasady" element={<Zasady/>} />
          */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
