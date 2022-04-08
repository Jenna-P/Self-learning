//react class component
// 1. make state 

import React, { Component } from 'react'

export default class Counter extends Component {

 state =  {
     number : 0
 };

    increaseNumber = () => {
      this.setState({
          number: this.state.number + 1
      });
    }

    decreaseNumber = () => {
        this.setState({
            number: this.state.number - 1
        });
    }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div> {this.state.number} </div>
        <button onClick={this.decreaseNumber}>-</button>
        <button onClick={this.increaseNumber}>+</button>
      </div>
    )
  }
}
