import React from 'react'
import './App.css';

function List(props) {

    const todoLists = props.todos.map(todo  => <li key={todo.id}>{todo.title}</li>)
  return (
    <div className="list">
        <div className="list-container">
            <ul>
            {todoLists}
            </ul>
        </div>
    </div>
  )
}

export default List
