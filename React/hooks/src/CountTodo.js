import React, { useContext } from 'react'
import { TodoContext } from './App.js'

function CountTodo() {   
    const {todos} = useContext(TodoContext);    // using useContaxt
  return (
      //instead of props  using context API 
    //   <TodoContext.Consumer>  
    //       {
    //           ({todos}) => (
    //             <div>
    //                 <p>{todos.filter(v => v.status === "todo").length} to complete! </p>
    //             </div>
    //           )
    //       }
    //   </TodoContext.Consumer>

   <div>
        <p>{todos.filter(v => v.status === "todo").length} to complete! </p>
   </div>
  )
}

export default CountTodo
