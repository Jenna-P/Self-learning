import './App.css';
import Subscribers from './Components/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux Practice</h1>
      <Subscribers />
    </div>
    </Provider>
  );
}

export default App;
