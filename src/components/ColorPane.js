import React, { Component } from "react";

class ColorPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: this.props.red,
      green: this.props.green,
      blue: this.props.blue
    };
  }

  computeColorCode(red, green, blue) {
    let redCode = (red < 16 ? "0" : "") + red.toString(16);
    let greenCode = (green < 16 ? "0" : "") + green.toString(16);
    let blueCode = (blue < 16 ? "0" : "") + blue.toString(16);
    return "#" + redCode + greenCode + blueCode;
  }

  render() {
    const color = this.computeColorCode(
      this.state.red,
      this.state.green,
      this.state.blue
    );
    console.log(color);
    return (
      <div
        style={{ backgroundColor: color, height: "200px", width: "200px" }}
      ></div>
    );
  }
}

export default ColorPane;
