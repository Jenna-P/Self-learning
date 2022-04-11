import React from 'react'
import './App.css';
import Item from './Item'

function List(props) {

    let todoLists = <div> Loading... </div> 
    
    if(!props.loading){
    todoLists = props.todos.map(todo  => <Item key={todo.id} todo={todo} changeTodosStatus={props.changeTodosStatus}  />) }
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
