import { useState } from 'react';
import './App.css';
import Counter from './Component/Counter';
import MyComponent from './Component/MyComponent';
import Myname from './Component/Myname';
import PhoneForm from './Component/PhoneForm';

function App() {
  let id = 0;
  const [info, setInfo] = useState([]);
  


  const handleCreate = (data) => {  //for getting data from child component
    //setInfo(prevArray => [...prevArray, data]); // return object array
   setInfo(info.concat({...data, id: id++}));
  }
  
  return (
    <div className="App">
      
      <div>
        <Counter />
        <MyComponent value= {5}/>
      </div>
      <hr />
      <div>
        <PhoneForm onCreate={handleCreate}/>
        {JSON.stringify(info)}
      </div>
      <hr />
      <div>
        <h1>Functional Component * useState</h1>
      <Myname />
      </div>
    </div>
  );
}

export default App;
