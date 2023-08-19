import { Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import PageMenu from './components/page-menu/page-menu.jsx'
import pages from './Json/pages.json';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home.jsx';
import Lore from './pages/lore';
import Magia from './pages/magia';
import Profesje from './pages/profesje';
import Zasady from './pages/zasady';

class App extends Component {
  
  constructor(){
    super();
    this.state ={
      PagesInfo: []
    }
  };
  
  componentDidMount(){
    this.setState({
      PagesInfo: pages
    })
  }

  render(){
    const {PagesInfo} = this.state;
    return (
      <div className="App">
        <Header/>
        <PageMenu PagesInfo = {PagesInfo}/>
        <div className='Container'>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/lore" element={<Lore/>} />
          <Route path="/magia" element={<Magia/>} />
          <Route path="/profesje" element={<Profesje/>} />
          <Route path="/zasady" element={<Zasady/>} />
        </Routes>
        </div>
      </div>
    );
  };
}

export default App;
