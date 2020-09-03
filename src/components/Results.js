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
    let result = redDiff + greenDiff + blueDiff;

    let resultText = "";

    if (result === 0) {
      resultText = "Unbelievable! You've hit it absolutely spot on!";
    } else if (result > 0 && result <= 10) {
      resultText = "Amazing! You were very, very close this time!";
    } else if (result > 10 && result <= 40) {
      resultText = "Good job! That was pretty close!";
    } else if (result > 40 && result <= 100) {
      resultText =
        "Well, that's not exatly it, but you've got the right idea...";
    } else {
      resultText = "Oops! That's not even close!";
    }

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
        <div hidden={this.props.hidden}>
          <h4 style={{ textAlign: "center" }}>{resultText}</h4>
          <br />
          <table className="table table-sm">
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
                <td>
                  <strong>{redDiff + greenDiff + blueDiff}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
}

export default Results;
