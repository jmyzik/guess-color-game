import React, { Component } from "react";

class Results extends Component {
  render() {
    let randomRed = this.props.randomColor.red;
    let randomGreen = this.props.randomColor.green;
    let randomBlue = this.props.randomColor.blue;
    let userRed = this.props.userColor.red;
    let userGreen = this.props.userColor.green;
    let userBlue = this.props.userColor.blue;
    let redDiff = Math.abs(randomRed - userRed);
    let greenDiff = Math.abs(randomGreen - userGreen);
    let blueDiff = Math.abs(randomBlue - userBlue);

    return (
      <>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.props.onButtonClick}
          hidden={!this.props.hidden}
        >
          Display Results
        </button>
        <br />
        <table className="table table-sm" hidden={this.props.hidden}>
          <thead className="thead-light">
            <tr>
              <th></th>
              <th>Our color</th>
              <th>Your color</th>
              <th>Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Red</strong>
              </td>
              <td>{randomRed}</td>
              <td>{userRed}</td>
              <td>{redDiff}</td>
            </tr>
            <tr>
              <td>
                <strong>Green</strong>
              </td>
              <td>{randomGreen}</td>
              <td>{userGreen}</td>
              <td>{greenDiff}</td>
            </tr>
            <tr>
              <td>
                <strong>Blue</strong>
              </td>
              <td>{randomBlue}</td>
              <td>{userBlue}</td>
              <td>{blueDiff}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td />
              <td>
                <strong>Total:</strong>
              </td>
              <td>{redDiff + greenDiff + blueDiff}</td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}

export default Results;
