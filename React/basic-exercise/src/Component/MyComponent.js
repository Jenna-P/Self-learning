import React, { Component } from 'react'


// LifeCycle Updating  
export default class MyComponent extends Component {
    state = {
        value : 0
    }

    static getDerivedStateFromProps(nextProps, prevState) { //nextProps : props that will get next, prevState : state that before updated
       if(prevState.value !== nextProps.value){
           return {
               value : nextProps.value
           }
       }

       return null;
      }


  render() {
    return (
      <div>
        <p>props: {this.props.value}</p> 
        <p>state: {this.state.value}</p> 
        
      </div>
    )
  }
}
