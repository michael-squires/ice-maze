import React from 'react';

const Controls = (props) => {
    const { setMazeIndex, mazeIndex, numberOfGrids, setDirection } = props

    const incrementMazeIndex = () => {
        setMazeIndex((mazeIndex + 1) % numberOfGrids)
    }

    const getDirection = (e) => {
        setDirection(e.target.value)
    }


    return (
        <div className='controls'>
            <button className="control-buttons" onClick={incrementMazeIndex} > Next Maze</button>
            <button className="control-buttons" value='l' onClick={getDirection}> LEFT</button>
            <button className="control-buttons" value='u' onClick={getDirection}> UP</button>
            <button className="control-buttons" value='d' onClick={getDirection}> DOWN</button>
            <button className="control-buttons" value='r' onClick={getDirection}> RIGHT</button>
        </div>
    );
};

export default Controls;