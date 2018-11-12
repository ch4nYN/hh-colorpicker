import React from 'react';
import logoSrc from '../assets/logo-symbol.svg';
import Searchbar from '../containers/Searchbar';

const Navbar = () => {
  const style = {
    height: '60px',
    width: '100%',
    backgroundColor: '#363B3C',
    display: 'table'
  }
  return(
    <nav style={style}>
      <ul style={{margin: '0', display: 'table-cell', height: '60px', verticalAlign: 'middle'}}>
        <a href="/"><img src={logoSrc} alt="logo" style={{marginTop:'3px'}} /></a>
      </ul>
      <ul style={{margin: '0', display: 'table-cell', verticalAlign: 'middle'}}>
        <Searchbar />
      </ul>
    </nav>
  );
}

export default Navbar;
