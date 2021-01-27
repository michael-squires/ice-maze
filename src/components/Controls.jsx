import React from 'react';

const Controls = (props) => {
    const { setGridIndex, gridIndex, numberOfGrids, handleDirectionClick } = props

    const incrementGridIndex = () => {
        setGridIndex((gridIndex + 1) % numberOfGrids)
    }

    return (
        <div className='controls'>
            <button className="control-buttons" onClick={incrementGridIndex} >⏭</button>
            <button className="control-buttons" value='l' onClick={handleDirectionClick}>◀️</button>
            <button className="control-buttons" value='u' onClick={handleDirectionClick}>🔼</button>
            <button className="control-buttons" value='d' onClick={handleDirectionClick}>🔽</button>
            <button className="control-buttons" value='r' onClick={handleDirectionClick}>▶️</button>
        </div>
    );
};

export default Controls;