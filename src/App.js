import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Maze from './components/Maze';
import Popup from './components/Popup';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Maze />
        <Popup />
      </div >
    </Provider>
  );
}

export default App;
