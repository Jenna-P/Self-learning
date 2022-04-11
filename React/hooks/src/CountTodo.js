import React from 'react'

function CountTodo(props) {
  return (
    <div>
      <p>{props.todos.length} to complete! </p>
    </div>
  )
}

export default CountTodo
