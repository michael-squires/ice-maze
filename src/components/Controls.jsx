import React from 'react';

const Controls = (props) => {
    return (
        <div>
            <div>Score:0</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
            }}>Play</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Restart</button>
        </div>
    );
};

export default Controls;