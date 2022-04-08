import './App.css';
import Counter from './Component/Counter';
import MyComponent from './Component/MyComponent';
import Myname from './Component/Myname';
import PhoneForm from './Component/PhoneForm';

function App() {
  
  return (
    <div className="App">
      <Myname name="react" />
      <div>
        <Counter />
        <MyComponent value= {5}/>
      </div>
      <hr />
      <div>
        <PhoneForm />
      </div>
    </div>
  );
}

export default App;
