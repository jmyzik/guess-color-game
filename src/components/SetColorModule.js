import React, { Component } from "react";
import ColorPane from "./ColorPane";

class SetColorModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
  }

  handleNumberChange = (e) => {
    let color = e.target.name;
    let value = Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    this.setState({ [color]: value }, () => {
      console.log(color + ": " + value);
      console.log(this.state);
    });
  };

  render() {
    return (
      <>
        <ColorPane
          red={this.state.red}
          green={this.state.green}
          blue={this.state.blue}
        />
        <form>
          <label htmlFor="red">R: </label>
          <input
            type="number"
            id="red"
            name="red"
            value={this.state.red}
            min={0}
            max={255}
            onChange={this.handleNumberChange}
          />
          <br />
          <label htmlFor="green">G: </label>
          <input
            type="number"
            id="green"
            name="green"
            value={this.state.green}
            min={0}
            max={255}
            onChange={this.handleNumberChange}
          />
          <br />
          <label htmlFor="blue">B: </label>
          <input
            type="number"
            id="blue"
            name="blue"
            value={this.state.blue}
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
