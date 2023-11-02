import { Component } from "react";
import "./App.css";
import PageMenu from "./components/Overlay/page-menu/page-menu";
import pages from "./Json/pages.json";
import { Route, Routes } from "react-router-dom";
import BibliotekaAltforfu from "./pages/biblioteka-altdorfu.jsx";
import Magia from "./pages/magia";
import Profesje from "./pages/profesje";
import Talenty from "./pages/talenty";
import Skills from "./pages/umiejętności";
import Zasady from "./pages/zasady";
import TopScroll from "./TopScroll";
import Religia from "./pages/religia";
import Bronie from "./pages/bronie";

/* 
import Lore from './pages/lore';

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
        <div className="ttop">
          <PageMenu PagesInfo={PagesInfo} />
        </div>
        <div className="Bot">
          <TopScroll>
            <Routes>
              <Route path="/" element={<BibliotekaAltforfu />} />
              <Route path="/magia" element={<Magia />} />
              <Route path="/religia" element={<Religia />} />
              <Route path="/profesje" element={<Profesje />} />
              <Route path="/bronie" element={<Bronie />} />
              <Route path="/talenty" element={<Talenty />} />
              <Route path="/umiejętności" element={<Skills />} />
              <Route path="/zasady" element={<Zasady />} />
            </Routes>
          </TopScroll>
        </div>
      </div>
    );
  }
}

export default App;
