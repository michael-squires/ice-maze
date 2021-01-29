import React from 'react';

const Header = (props) => {
    const { title, resetMaze, setGridIndex, gridIndex, numberOfGrids } = props

    const incrementGridIndex = () => {
        setGridIndex((gridIndex + 1) % numberOfGrids)
    }

    return (
        <header className="App-header">
            <button className="control-buttons" onClick={resetMaze}>↩️</button>
            <div className="App-title">{title}</div>
            <button className="control-buttons" onClick={incrementGridIndex} >⏭</button>

        </header >
    );
};


export default Header;