import React, { useContext, useRef } from 'react'
import { TodoContext } from './App.js'

//in component can control status(input datas)
function Form() {
    const input = useRef(false);
    const {handleClickAdd} = useContext(TodoContext);    // using useContaxt

    const addTodoList = (e) => {
        e.preventDefault();
        handleClickAdd(input.current.value)
        input.current.value = "";
    }

  return (
    <form>
    <input type="text" name=""  ref={input}/>
    <button onClick={addTodoList}>ADD</button>
    {/* because button is under form -> everytime submiting render them again  */}
  </form>
  )
}

export default Form
