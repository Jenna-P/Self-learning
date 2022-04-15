import './App.css';
import {useState, useEffect} from 'react'

function App() {
 
  const [input, setInput] = useState("");
  const [palindrome, setPalindrome] = useState([]);
  const [show, setShow] = useState(false);
  const [element, setElement] = useState([]);
  
 
  const handleInput = (e) => {
     setInput(e.target.value);
     console.log(input);
  }

  const reversWord = () => {
    setShow(true)
    for(let i =  (input.length -1) ; i > -1; i--) {
     setElement(elm => [...elm, input[i]])
     console.log(input[i]);
    }
   putChar();
  }

  const putChar = () => {
    for (let i = 0; i < input.length; i++) {
      setPalindrome(char => [...char, input[i]])
      console.log(input[i]);
    }
  }

  const compare = () => {
    console.log(JSON.stringify(element) === JSON.stringify(palindrome))
  }

  useEffect( () => {
    console.log(show);
    console.log(element);
    console.log(palindrome);   
}, [show, element, palindrome]);


  return (
    <div className="App">
      <div className="main">
        <div className="inputArea">
          <input onChange={handleInput}/>
          <button onClick={reversWord}>Submit</button>
          <button onClick={compare}>Compare</button>
        </div>
        <div>
          <div className="text">
            {show && element.map((elm, index) => <span key={index}>{elm}</span>)}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
