import React from 'react';

const Header = ({ title, resetMaze, incrementGridIndex }) => {

    return (
        <header className="App-header">
            <button className="control-buttons" onClick={resetMaze}>↩️</button>
            <div className="App-title">{title}</div>
            <button className="control-buttons" onClick={incrementGridIndex} >⏭</button>

        </header >
    );
};


export default Header;