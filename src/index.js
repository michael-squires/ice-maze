import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';

ReactDOM.render(
  <React.StrictMode>
    <div className='Game'>
      <Game />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
