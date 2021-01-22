import React from 'react';

const GridSquare = (props) => {
    const { symbol } = props || ''
    const classes = `grid-square type-${props.type}`
    return (
        <div className={classes}>
            {symbol}
        </div>
    );
};

export default GridSquare;