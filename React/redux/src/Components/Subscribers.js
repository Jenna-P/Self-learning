import React from 'react'

function Subscribers(props) {
  return (
    <div className="App">
      <p>Subscribers: {props.count}  </p>
      <button>Sunscribe</button>
    </div>
  )
}

export default Subscribers
