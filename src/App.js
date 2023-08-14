import { Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import PageMenu from './components/page-menu/page-menu.jsx'
import Pages from './Json/pages.json'

class App extends Component {
  
  constructor(){
    super();
    this.state ={
      PagesInfo: []
    }
  };
  
  componentDidMount(){
    Pages.map((input) => (
      PagesInfo = input;
    )

  }

  render(){
    return(
    console.log(this.PagesInfo)
    );
  };
}

export default App;
