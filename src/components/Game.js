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
      <div className="container p-3 my-3 border">
        <div className="row">
          <div className="col-sm-3">
            <h4>Guess the color:</h4>
            <ColorPane color={this.state.randomColor} />
          </div>
          <div className="col-sm-3">
            <h4>Try it yourself:</h4>
            <SetColorModule
              color={this.state.userColor}
              onNumberChange={this.onNumberChange}
            />
          </div>
          <div className="col-sm-4">
            <Results
              randomColor={this.state.randomColor}
              userColor={this.state.userColor}
              hidden={this.state.hideResults}
              onButtonClick={this.showResults}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 text-center">
            <button
              className="btn btn-primary btn-lg btn-block"
              type="button"
              onClick={this.startNewGame.bind(this)}
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
