import React, { Component } from "react";

class Results extends Component {
  render() {
    let randomRed = this.props.randomRed;
    let randomGreen = this.props.randomGreen;
    let randomBlue = this.props.randomBlue;
    let userRed = this.props.userRed;
    let userGreen = this.props.userGreen;
    let userBlue = this.props.userBlue;
    let redDiff = Math.abs(randomRed - userRed);
    let greenDiff = Math.abs(randomGreen - userGreen);
    let blueDiff = Math.abs(randomBlue - userBlue);

    return (
      <>
        <button type="button">Display results</button>
        <br />
        <table>
          <tr>
            <th></th>
            <th>Our color</th>
            <th>Your color</th>
            <th>Difference</th>
          </tr>
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
          <tr>
            <td />
            <td />
            <td>
              <strong>Total:</strong>
            </td>
            <td>{redDiff + greenDiff + blueDiff}</td>
          </tr>
        </table>
      </>
    );
  }
}

export default Results;
