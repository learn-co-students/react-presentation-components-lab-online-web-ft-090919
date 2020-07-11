import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    state = {
        mood: "happy"
    }

    handleClick = event => {
        this.setState(prevState => ({mood: prevState.mood === "happy" ? "sad" : "happy" }));
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>;
    }

}
