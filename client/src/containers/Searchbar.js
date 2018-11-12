import '../styles/Searchbar.css';
import React, { Component } from 'react';


class Searchbar extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      term: ''
    }
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }
  onChangeSearch(e) {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  }
  render() {
    return(
      <div>
        <input 
          id="navbar-right-searchbar" 
          placeholder="search..." 
          onChange={this.onChangeSearch}/>
      </div>
    )
  }
}


export default Searchbar;