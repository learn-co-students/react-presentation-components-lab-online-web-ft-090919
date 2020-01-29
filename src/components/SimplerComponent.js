// Code SimplerComponent Here
import React, { Component } from "react";

export default class SimplerComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div onClick={this.props.handleClick}>I am Just happy</div>;
  }
}
