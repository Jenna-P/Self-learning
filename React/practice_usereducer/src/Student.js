import React from 'react'

function Student({ studentName, dispatch, id, isHere }) {
  return (
    <div style={{margin: "10px"}}>
      <span style={{
                textDecoration: isHere ? "line-through" : "none",
                color: isHere ? "gray" : "black", }}
            onClick={() => {
                dispatch({type: 'mark-student', payload: {id}});
            }}
      >{studentName}</span>
      <button style={{marginLeft: "10px"}} onClick={
          () => {
              dispatch({type: 'delete-student', payload: {id}})
          }
      }>DELETE</button>
    </div>
  )
}

export default Student
