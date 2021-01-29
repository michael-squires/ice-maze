import React from 'react';

const Popup = ({ mazeCompleted, route, shortest, incrementGridIndex, resetMaze }) => {
    let message = mazeCompleted ? 'You Solved The Maze!' : ''
    let isHidden = mazeCompleted ? '' : 'hidden'

    return (
        <div className={`message-popup ${isHidden}`}>
            <h1>{message}</h1>
            <p>Your route:</p>
            <h1>{route}</h1>
            <p>You made {route.length} moves</p>
            {route.length <= shortest ?
                <>
                    <p>That's the least moves possible!</p>
                    <p>Move to next maze?</p>
                    <button className="pop-up-buttons" onClick={incrementGridIndex} >⏭</button>
                </>
                :
                <>
                    <p>It can be solved in {shortest} moves...</p>
                    <p>Try again?</p>
                    <button className="pop-up-buttons" onClick={resetMaze} >↩️</button>

                </>
            }
        </div>
    );
};

export default Popup;