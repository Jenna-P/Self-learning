import React, { useState, useEffect } from 'react'
import List from './List';
import './App.css';
import CountTodo from './CountTodo';

const useFetch = (callback, url) => {  //custom hook : (sideEffect, fetching data 분리) -> can use as module 
  const [loading, setLoading] = useState(false);
  
  const fetchInitialData = async () => {
    setLoading(true);
     const response = await fetch(url);
     const initialData = await response.json();
     callback(initialData);  //callback : setTodos pass with parameters
     setLoading(false);
  }
  useEffect(() => {
    fetchInitialData(); //비동기 함수 처리시 useEffect 콜백 함수안에 직접 넣지 말고, 함수를 따로 작성 후 불러 와라
  }, []) //after first render, there are not observe things to render again. 


  return loading;
}

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  const loading = useFetch(setTodos, 'https://gist.githubusercontent.com/Jenna-P/e15366febc79f7a0b3c3ec2d065d3397/raw/03b1c7e807b28ce32f0ac1684bc511c11062ebfa/'); //after fetch everythigs well loaded 

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClickAdd = (e) => {
    e.preventDefault(); //avoid reRender
    setTodos([...todos, {'id': todos.length, 'title': input, 'status': 'todo'}]);
  }

  const changeTodosStatus = (id) => {
     const updateStatus = todos.map(todo => {
       if(todo.id === +id) {   //+id : parseInt(id)
         {todo.status === "todo" ? todo.status = "done" : todo.status = "todo";}
       }    
       return todo; 
     })
     setTodos(updateStatus);
  }

  
  useEffect(() => {   //after render for sideeffect logics(fetching) can be here
    console.log("new Rendering", todos);
  }, [todos]) //todos -> button click event : render

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO APP</h1>
        <CountTodo todos={todos} />
        <form>
          <input type="text" name="" onChange={handleChange} value={input}/>
          <button onClick={handleClickAdd}>ADD</button>
          {/* because button is under form -> everytime submiting render them again  */}
        </form>
      </header>
      <div>
        <List todos={todos} loading={loading} changeTodosStatus={changeTodosStatus} />  
      </div>
    </div>
  );
}

export default App;
