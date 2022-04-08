import React, {Fragment, useState} from 'react'


function Myname() {

  const [name, setName] = useState([]); 
  const [input, setInput] = useState(""); 

  const handleClick = () => {
    setName((prevState) => {
      return [...prevState, input];
    });
    
  }
  
  const handleOnChangeInput = (e) => {
    setInput(e.target.value);
  }
   
  return (
    <div>
        <input value={input} onChange={handleOnChangeInput} />
        <button onClick={handleClick}>Upload</button>
      <div>
       {name.map((list, index) => {
         return <p key={index}>{list}</p>
       })}
      </div>
    </div>
  )
}

// no props in App(parents component) and set default props 
Myname.defaultProps = {
    name: 'Jenna'
}


export default Myname
