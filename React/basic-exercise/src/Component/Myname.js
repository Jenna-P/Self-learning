import React from 'react'


function Myname(props) {
   
  return (
    <div>
        Hello! My name is <b>{props.name}</b> 
    </div>
  )
}

// no props in App(parents component) and set default props 
Myname.defaultProps = {
    name: 'Jenna'
}


export default Myname
