import React, { Component } from "react";
import ColorPane from "./ColorPane";

class SetColorModule extends Component {
  handleNumberChange = (e) => {
    let color = e.target.name;
    let value = Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    this.props.onNumberChange(color, value);
  };

  render() {
    return (
      <>
        <ColorPane
          red={this.props.red}
          green={this.props.green}
          blue={this.props.blue}
        />
        <form>
          <label htmlFor="red">R: </label>
          <input
            type="number"
            name="red"
            value={this.props.red}
            min={0}
            max={255}
            onChange={this.handleNumberChange}
          />
          <br />
          <label htmlFor="green">G: </label>
          <input
            type="number"
            name="green"
            value={this.props.green}
            min={0}
            max={255}
            onChange={this.handleNumberChange}
          />
          <br />
          <label htmlFor="blue">B: </label>
          <input
            type="number"
            name="blue"
            value={this.props.blue}
            min={0}
            max={255}
            onChange={this.handleNumberChange}
          />
        </form>
      </>
    );
  }
}

export default SetColorModule;
