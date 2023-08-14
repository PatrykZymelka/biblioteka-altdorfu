import { Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import PageMenu from './components/page-menu/page-menu.jsx'
import pages from './Json/pages.json'

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
      </div>
    );
  };
}

export default App;
