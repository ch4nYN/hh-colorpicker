import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ColorList from './containers/ColorList'
import ColorBoard from './containers/ColorBoard';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <ColorList />
        <ColorBoard />
      </div>
    );
  }
}

export default App;