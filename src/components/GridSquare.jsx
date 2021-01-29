import React from 'react';

const GridSquare = ({ dir, index, type }) => {
    const classes = `grid-square type-${type}`
    const sprites = ['f1', 'm1', 'f2', 'm2', 'f3', 'm3', 'f4']
    const sprite = sprites[index] || 'e1'

    return (
        (dir) ?
            <div className={classes}>
                <img className={`image-${dir}`}
                    src={`/images/${sprite}.png`} alt="sprite"
                />
                <p>{dir}</p>
            </div>
            :
            <div className={classes} />
    );
};

export default GridSquare;