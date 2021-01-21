import React from 'react';

const GridSquare = (props) => {
    const classes = `grid-square type-${props.type}`
    //console.log(classes)
    return (
        <div className={classes} />
    );
};

export default GridSquare;