import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField:""
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then( res =>  this.setState({monsters: res}));
  }
  
  handleSearch(e){
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">    
        <SearchBox placeholder="Search Monsters" searchCallback= { this.handleSearch } />
        <CardList monsters= { filteredMonsters } />
      </div>
    );
  }
}

export default App;
