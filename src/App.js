import './App.css';
import Controls from './components/Controls';
import Maze from './components/Maze';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ice Maze</h1>
      </header>
      <Maze />
      <Controls />
    </div >
  );
}

export default App;
