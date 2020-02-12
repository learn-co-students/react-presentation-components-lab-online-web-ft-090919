// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component{
    constructor(props){
        super();
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () =>{
        let mood
        this.state.mood === 'happy'? mood = 'sad' : mood = 'happy'
        this.setState({
            mood: mood
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}