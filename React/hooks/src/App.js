import React, { useState, useEffect } from 'react'
import List from './List';
import './App.css';
import CountTodo from './CountTodo';
import Form from './Form'
import useFetch from './useFetch';

export const TodoContext = React.createContext();

function App() {
  const [todos, setTodos] = useState([]);
  //const [input, setInput] = useState("");
  
  const loading = useFetch(setTodos, 'https://gist.githubusercontent.com/Jenna-P/e15366febc79f7a0b3c3ec2d065d3397/raw/03b1c7e807b28ce32f0ac1684bc511c11062ebfa/'); //after fetch everythigs well loaded 

  // const handleChange = (e) => {   //if we use "useRef" dont need to use onChange in input
  //   setInput(e.target.value);
  // }

  const handleClickAdd = (newTodo) => {   //newTodo : wil read useRef from Form.js
   // e.preventDefault(); //avoid reRender
    setTodos([...todos, {'id': todos.length, 'title': newTodo, 'status': 'todo'}]);
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
      <TodoContext.Provider value={{todos, handleClickAdd}}>   
        <header className="App-header">
          <CountTodo />
          <Form />
        </header>
        <List todos={todos} loading={loading} changeTodosStatus={changeTodosStatus} />  
      </TodoContext.Provider>
    </div>
  );
}

export default App;
