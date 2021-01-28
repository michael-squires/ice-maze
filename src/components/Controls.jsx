import React from 'react';

const Controls = (props) => {
    const { setGridIndex, gridIndex, numberOfGrids, handleDirectionClick, resetMaze } = props

    const incrementGridIndex = () => {
        setGridIndex((gridIndex + 1) % numberOfGrids)
    }

    return (
        <div className='controls'>
            <button className="control-buttons" value='l' onClick={handleDirectionClick}>◀️</button>
            <button className="control-buttons" value='u' onClick={handleDirectionClick}>🔼</button>
            <button className="control-buttons" value='d' onClick={handleDirectionClick}>🔽</button>
            <button className="control-buttons" value='r' onClick={handleDirectionClick}>▶️</button>
            <button className="control-buttons" onClick={resetMaze}>↩️</button>
            <button className="control-buttons word-buttons" >solve</button>
            <button className="control-buttons word-buttons" >random</button>
            <button className="control-buttons" onClick={incrementGridIndex} >⏭</button>
        </div>
    );
};

export default Controls;