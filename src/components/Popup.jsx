import React from 'react';

const Popup = ({ mazeCompleted, route, shortest }) => {
    let message = mazeCompleted ? 'You solved the Maze!' : ''
    let isHidden = mazeCompleted ? '' : 'hidden'

    return (
        <div className={`message-popup ${isHidden}`}>
            <h1>{message}</h1>
            <p>Your route:</p>
            <h1>{route}</h1>
            <p>You made {route.length} moves</p>
            {route.length <= shortest ?
                <p>That's the least moves possible!</p>
                :
                <p>It can be solved in {shortest} moves...</p>
            }
        </div>
    );
};

export default Popup;