import { Component } from "react";
import "./App.css";
import Header from "./components/Overlay/header/header";
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
          <Header />
          <PageMenu PagesInfo={PagesInfo} />
        </div>
        <div className="Bot">
          <Routes>
            <Route
              path="/biblioteka-altdorfu"
              element={<BibliotekaAltforfu />}
            />
            <Route path="/biblioteka-altdorfu/magia" element={<Magia />} />
            <Route
              path="/biblioteka-altdorfu/profesje"
              element={<Profesje />}
            />
            <Route path="/biblioteka-altdorfu/talenty" element={<Talenty />} />
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
