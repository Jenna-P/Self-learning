import './App.css';
import Subscribers from './Components/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store'
import Display from './Components/Display';
import Views from './Components/Views';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux Practice</h1>
      <Subscribers />
      <Views />
      <Display />
    </div>
    </Provider>
  );
}

export default App;
