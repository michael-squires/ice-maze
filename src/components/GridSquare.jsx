import React from 'react';

const GridSquare = (props) => {
    const { dir } = props || ''
    const classes = `grid-square type-${props.type}`
    console.log(`image-${dir}`)
    return (
        (dir) ?
            <div className={classes}>
                <img className={`image-${dir}`}
                    src="/images/e1.png" alt="ghost"
                />
                <p>{dir}</p>
            </div>
            :
            <div className={classes} />
    );
};

export default GridSquare;