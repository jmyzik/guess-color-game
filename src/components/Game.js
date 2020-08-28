import React, { Component } from "react";
import ColorPane from "./ColorPane";
import SetColorModule from "./SetColorModule";
import Results from "./Results";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor: {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256)
      },
      userColor: {
        red: 0,
        green: 0,
        blue: 0
      }
    };

    this.onNumberChange = this.onNumberChange.bind(this);
  }

  // startNewGame() {
  //   this.setState({
  //     randomRed: Math.floor(Math.random() * 256),
  //     randomGreen: Math.floor(Math.random() * 256),
  //     randomBlue: Math.floor(Math.random() * 256)
  //   });
  // }

  onNumberChange(color, value) {
    let userColor = this.state.userColor;
    userColor[color] = value;
    this.setState({ userColor: userColor });
  }

  render() {
    return (
      <div>
        <h3>Guess the color:</h3>
        <ColorPane color={this.state.randomColor} />
        <h3>Try it yourself:</h3>
        <SetColorModule
          color={this.state.userColor}
          onNumberChange={this.onNumberChange}
        />
        <Results
          randomColor={this.state.randomColor}
          userColor={this.state.userColor}
        />
      </div>
    );
  }
}

export default Game;
