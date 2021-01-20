import React from 'react';

const GridSquare = (props) => {
    const classes = `grid-square color-${props.color}`
    console.log('classes', classes)
    return (
        <div className={classes} />
    );
};

export default GridSquare;