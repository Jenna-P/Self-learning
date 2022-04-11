import React, { useState, useEffect } from 'react'
import List from './List';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClickAdd = (e) => {
    e.preventDefault(); //avoid reRender
    setTodos([...todos, input]);
  }

  const fetchInitialData = async () => {
     const response = await fetch('https://gist.githubusercontent.com/Jenna-P/e15366febc79f7a0b3c3ec2d065d3397/raw/d0a3c568205808caf1d73d1d35671787931c5045/');
     const initialData = await response.json();
     setTodos(initialData);
  }
  
  useEffect(() => {   //after render for sideeffect logics(fetching) can be here
    console.log("new Rendering");
  }, [todos]) //todos -> button click event : render

  useEffect(() => {
    fetchInitialData(); //비동기 함수 처리시 useEffect 콜백 함수안에 직접 넣지 말고, 함수를 따로 작성 후 불러 와라
  }, []) //after first render, there are not observe things to render again. 

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO APP</h1>
        <form>
          <input type="text" name="" onChange={handleChange} value={input}/>
          <button onClick={handleClickAdd}>ADD</button>
          {/* because button is under form -> everytime submiting render them again  */}
        </form>
      </header>
      <div>
        <List todos={todos} />  
      </div>
    </div>
  );
}

export default App;
