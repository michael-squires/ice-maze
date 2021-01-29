import React from 'react';

const Controls = (props) => {
    const { handleDirectionClick } = props

    return (
        <div className='controls'>
            <button className="control-buttons" value='l' onClick={handleDirectionClick}>◀️</button>
            <button className="control-buttons" value='u' onClick={handleDirectionClick}>🔼</button>
            <button className="control-buttons" value='d' onClick={handleDirectionClick}>🔽</button>
            <button className="control-buttons" value='r' onClick={handleDirectionClick}>▶️</button>
        </div>
    );
};

export default Controls;