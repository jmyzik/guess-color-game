import React, { Component } from "react";

class ColorPane extends Component {
  computeColorCode(red, green, blue) {
    let redCode = (red < 16 ? "0" : "") + red.toString(16);
    let greenCode = (green < 16 ? "0" : "") + green.toString(16);
    let blueCode = (blue < 16 ? "0" : "") + blue.toString(16);
    return "#" + redCode + greenCode + blueCode;
  }

  render() {
    const color = this.computeColorCode(
      this.props.red,
      this.props.green,
      this.props.blue
    );
    return (
      <div
        style={{ backgroundColor: color, height: "200px", width: "200px" }}
      ></div>
    );
  }
}

export default ColorPane;
