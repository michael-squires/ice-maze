import React from 'react';

const Popup = (props) => {
    const { mazeCompleted, route } = props
    let message = mazeCompleted ? 'You solved the Maze!' : ''
    let isHidden = mazeCompleted ? '' : 'hidden'


    return (
        <div className={`message-popup ${isHidden}`}>
            <h1>{message}</h1>
            <h1>Your route:</h1>
            <h1>{route}</h1>
            <p>You made {route.length} moves</p>
        </div>
    );
};

export default Popup;