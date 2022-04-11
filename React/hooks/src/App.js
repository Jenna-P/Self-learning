import React, { useState, useEffect } from 'react'
import List from './List';


function App() {
  const [todos, setTodos] = useState(['Studying React']);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClickAdd = (e) => {
    e.preventDefault(); //avoid reRender
    setTodos([...todos, input]);
  }
  
  useEffect(() => {
    console.log("new Rendering");
  }, [todos]) //todos -> button click event : render


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
