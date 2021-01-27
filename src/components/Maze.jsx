import React from 'react';
import GridSquare from './GridSquare';

const Maze = (props) => {
    const { grid, x, y, dir } = props
    console.log('dir in Maze', dir)
    return (
        <div className='grid-board'>
            {grid.map((rowArray, row) => {
                return rowArray.map((square, col) => {
                    const squareType = square === '#' ? 'o' : square === 'S' ? 's' : square
                    return x === row && y === col ?
                        <GridSquare key={`${row}${col}`} dir={dir} type={squareType} />
                        :
                        <GridSquare key={`${row}${col}`} type={squareType} />
                })
            })}
        </div>
    );
};

export default Maze;