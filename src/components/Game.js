import React, { Component } from "react";
import ColorPane from "./ColorPane";
import SetColorModule from "./SetColorModule";
import Results from "./Results";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor: this.getRandomColor(),
      userColor: {
        red: 0,
        green: 0,
        blue: 0
      },
      hideResults: true
    };

    this.onNumberChange = this.onNumberChange.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  getRandomColor() {
    return {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
  }

  startNewGame() {
    this.setState({
      randomColor: this.getRandomColor(),
      userColor: {
        red: 0,
        green: 0,
        blue: 0
      },
      hideResults: true
    });
  }

  onNumberChange(color, value) {
    let userColor = this.state.userColor;
    userColor[color] = value;
    this.setState({ userColor: userColor });
  }

  showResults() {
    this.setState({ hideResults: false });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h3>Guess the color:</h3>
            <ColorPane color={this.state.randomColor} />
          </div>
          <div className="col-sm">
            <h3>Try it yourself:</h3>
            <SetColorModule
              color={this.state.userColor}
              onNumberChange={this.onNumberChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Results
              randomColor={this.state.randomColor}
              userColor={this.state.userColor}
              hidden={this.state.hideResults}
              onButtonClick={this.showResults}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button type="button" onClick={this.startNewGame.bind(this)}>
              New Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
