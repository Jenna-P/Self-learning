import React, { useState, useReducer } from 'react';
import './App.css';

//Reducer
//Dispatch
//Action
const reducer = (state, action) => {   //현재 state
    console.log("called reducer", state, action);
    switch(action.type) {
      case 'deposit':
        return state + action.payload;
      case 'withdraw':
        return state - action.payload;
      default:
       return state
    }
    
  }

function Exe1() {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0); //0 : initial value in money state
   //use dispatch to call reducer function
    return (
      <div className="App">
        <h1>useReducer practice</h1>
        <p>Balance : {money} </p>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value)) } step="10"/>
        <button onClick={() => {
          dispatch({type: "deposit", payload: number});
        }}>Deposit</button>
        <button onClick={() => {
          dispatch({type: "withdraw", payload: number});
        }}>Withdraw</button>
      <hr />
      </div>
    );
}

export default Exe1
