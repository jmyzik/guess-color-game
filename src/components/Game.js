import React, { Component } from "react";
import ColorPane from "./ColorPane";
import SetColorModule from "./SetColorModule";
import Results from "./Results";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomRed: Math.floor(Math.random() * 256),
      randomGreen: Math.floor(Math.random() * 256),
      randomBlue: Math.floor(Math.random() * 256),
      userRed: 0,
      userGreen: 0,
      userBlue: 0
    };

    this.onNumberChange = this.onNumberChange.bind(this);
  }

  startNewGame() {
    this.setState({
      randomRed: Math.floor(Math.random() * 256),
      randomGreen: Math.floor(Math.random() * 256),
      randomBlue: Math.floor(Math.random() * 256)
    });
  }

  onNumberChange(color, value) {
    let userColor = "user" + color.charAt(0).toUpperCase() + color.slice(1);
    this.setState({ [userColor]: value });
  }

  render() {
    return (
      <div>
        <h3>Guess the color:</h3>
        <ColorPane
          red={this.state.randomRed}
          green={this.state.randomGreen}
          blue={this.state.randomBlue}
        />
        <h3>Try it yourself:</h3>
        <SetColorModule
          red={this.state.userRed}
          green={this.state.userGreen}
          blue={this.state.userBlue}
          onNumberChange={this.onNumberChange}
        />
        <Results
          randomRed={this.state.randomRed}
          randomGreen={this.state.randomGreen}
          randomBlue={this.state.randomBlue}
          userRed={this.state.userRed}
          userGreen={this.state.userGreen}
          userBlue={this.state.userBlue}
        />
      </div>
    );
  }
}

export default Game;
