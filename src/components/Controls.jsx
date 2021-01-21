import React from 'react';

const Controls = (props) => {

    const incrementMazeIndex = () => {
        const { setMazeIndex, mazeIndex, numberOfGrids } = props
        setMazeIndex((mazeIndex + 1) % numberOfGrids)
    }


    return (
        <div className='controls'>
            <button className="control-buttons" onClick={incrementMazeIndex} > Next Maze</button>
            <button className="control-buttons" onClick={incrementMazeIndex} > Next Maze</button>
            <button className="control-buttons" onClick={incrementMazeIndex} > Next Maze</button>
            <button className="control-buttons" onClick={incrementMazeIndex} > Next Maze</button>
            <button className="control-buttons" onClick={incrementMazeIndex} > Next Maze</button>
        </div>
    );
};

export default Controls;