// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor() {
    this.state = {
      mood: happy
    };
  }

  handleClick = () => {
    this.setState(previousState => ({
      mood: previousState.mood === "happy" ? "sad" : "happy"
    }));
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
