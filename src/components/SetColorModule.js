import React, { Component } from "react";
import ColorPane from "./ColorPane";

class SetColorModule extends Component {
  handleNumberChange = (e) => {
    let color = e.target.name;
    let value = e.target.value === "" ? "" : Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    this.props.onNumberChange(color, value);
  };

  render() {
    return (
      <>
        <ColorPane color={this.props.color} />
        <form style={{ width: "150px" }}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Red:</span>
            </div>
            <input
              type="number"
              className="form-control"
              name="red"
              value={this.props.color.red}
              disabled={this.props.disabled}
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Green:</span>
            </div>
            <input
              type="number"
              className="form-control"
              name="green"
              value={this.props.color.green}
              disabled={this.props.disabled}
              onChange={this.handleNumberChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Blue:</span>
            </div>
            <input
              type="number"
              className="form-control"
              name="blue"
              value={this.props.color.blue}
              disabled={this.props.disabled}
              onChange={this.handleNumberChange}
            />
          </div>
        </form>
      </>
    );
  }
}

export default SetColorModule;
