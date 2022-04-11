import React from 'react'

function List(props) {

    const todoLists = props.todos.map((todo, index)  => <ul key={index}><li>{todo}</li></ul>)
  return (
    <div>
          {todoLists}
    </div>
  )
}

export default List
