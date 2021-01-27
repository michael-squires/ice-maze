import React from 'react';

const Popup = (props) => {
    const { mazeCompleted, route } = props
    let message = mazeCompleted ? 'You solved the Maze!' : ''
    let isHidden = mazeCompleted ? '' : 'hidden'


    return (
        <div className={`message-popup ${isHidden}`}>
            <h1>{message}</h1>
            <p>Your route:</p>
            <h1>{route}</h1>
            <p>You made {route.length} moves</p>
            {route.length <= 6 ?
                <>
                    <p>That's the least moves possible!</p>
                    <h1>🏅</h1>
                </>
                :
                <>
                    <p>It can be solved with less moves!</p>
                    <p>Try again? or View Solution?</p>
                </>
            }
        </div>
    );
};

export default Popup;