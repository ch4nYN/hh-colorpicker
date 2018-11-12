import '../styles/ColorSwatch.css';
import React, { Component } from 'react';
import { connect } from 'react';

class ColorSwatch extends Component {
  pick(e) {
    console.log(e.target)
  }
  render() {
    return(
      <div className="hh-colorboard-swatch" style={{backgroundColor: this.props.color}} onClick={(e) => this.pick(e)}>
        <div className="hh-colorboard-swatch-desc">
          {this.props.color}

        </div>
      </div>
    );
  }
}

export default ColorSwatch;