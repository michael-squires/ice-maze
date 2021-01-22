import React from 'react';

const Controls = (props) => {
    const { setMazeIndex, mazeIndex, numberOfGrids, makeMove } = props

    const incrementMazeIndex = () => {
        setMazeIndex((mazeIndex + 1) % numberOfGrids)
    }

    return (
        <div className='controls'>
            <button className="control-buttons" onClick={incrementMazeIndex} > Next Maze</button>
            <button className="control-buttons" value='l' onClick={makeMove}> LEFT</button>
            <button className="control-buttons" value='u' onClick={makeMove}> UP</button>
            <button className="control-buttons" value='d' onClick={makeMove}> DOWN</button>
            <button className="control-buttons" value='r' onClick={makeMove}> RIGHT</button>
        </div>
    );
};

export default Controls;