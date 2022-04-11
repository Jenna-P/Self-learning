import React from 'react'
import './item.css';

function Item(props) {
    const style = {
        cursor : 'pointer',
    }

    const handleToggleList = (e) => {
        const id = e.target.dataset.id;
        props.changeTodosStatus(id);
    }

    const itemclassName = props.todo.status === "done" ? "done" : "";
  return (
    <li data-id={props.todo.id} onClick={handleToggleList} className={itemclassName} style={style}>
      {props.todo.title}
    </li>
  )
}

export default Item
