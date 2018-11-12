import '../styles/ColorDashboard.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ColorSwatch from '../components/ColorSwatch';
class ColorBoard extends Component {
  
  renderColorList() {
    if (this.props.colorList.length === 0) {
      return <div> loading...</div>
    }
    var colorlist = this.props.colorList;
    return colorlist.map(color => {
      return <ColorSwatch color={color}/>
    })
  }
  render() {
    return(
      <div className="hh-colorboard">
        {this.renderColorList()} 
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { colorList: state.colorList }
}

export default connect(mapStateToProps)(ColorBoard);