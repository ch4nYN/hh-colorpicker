import '../styles/ColorList.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ColorList extends Component {
  componentDidMount() {
    this.props.getRandom();

    var lists = document.querySelectorAll('div > ul > li');
    lists.forEach(list => {
      list.addEventListener('click', (e) => {
        this.getColor(e.target.outerText);
      });
    });
  }
  randomize() {
    this.props.getRandom();
  }
  getColor(color) {
    this.props.getSpecific(color.toLowerCase())
  }
  render() {
    return(
      <div className="hh-colorlist">
        <ul>
          <button id="hh-colorlist-randomize" onClick={() => this.randomize()}>Random Color</button>
          <li>Red</li>
          <li>Orange</li>
          <li>Yellow</li>
          <li>Green</li>
          <li>Blue</li>
          <li>Purple</li>
          <li>Brown</li>
        </ul>
      </div>
    );
  }
}

export default connect(null, actions)(ColorList);