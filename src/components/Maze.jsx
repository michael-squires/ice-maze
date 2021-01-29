import React from 'react';
import GridSquare from './GridSquare';

const Maze = ({ grid, x, y, dir, index }) => {
    return (
        <div className='grid-board'>
            {grid.map((rowArray, row) => {
                return rowArray.map((square, col) => {
                    const squareType = square === '#' ? 'o' : square === 'S' ? 's' : square
                    return x === row && y === col ?
                        <GridSquare key={`${row}${col}`} dir={dir} type={squareType} index={index} />
                        :
                        <GridSquare key={`${row}${col}`} type={squareType} index={index} />
                })
            })}
        </div>
    );
};

export default Maze;