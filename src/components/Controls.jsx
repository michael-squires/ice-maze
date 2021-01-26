import React from 'react';

const Controls = (props) => {
    const { setGridIndex, gridIndex, numberOfGrids, handleDirectionClick } = props

    const incrementGridIndex = () => {
        setGridIndex((gridIndex + 1) % numberOfGrids)
    }

    return (
        <div className='controls'>
            <button className="control-buttons" onClick={incrementGridIndex} > Next Maze</button>
            <button className="control-buttons" value='l' onClick={handleDirectionClick}> LEFT</button>
            <button className="control-buttons" value='u' onClick={handleDirectionClick}> UP</button>
            <button className="control-buttons" value='d' onClick={handleDirectionClick}> DOWN</button>
            <button className="control-buttons" value='r' onClick={handleDirectionClick}> RIGHT</button>
        </div>
    );
};

export default Controls;