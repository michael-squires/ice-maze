import React from 'react';
import GridSquare from './GridSquare';

const Maze = (props) => {
    const { grid, x, y } = props
    console.log('props', props)
    return (
        <div className='grid-board'>
            {grid.map((rowArray, row) => {
                return rowArray.map((square, col) => {
                    const squareType = square === '#' ? 'o' : square === 'S' ? 's' : square
                    return x === row && y === col ?
                        <GridSquare key={`${row}${col}`} symbol={'👹'} type={squareType} />
                        :
                        <GridSquare key={`${row}${col}`} type={squareType} />
                })
            })}
        </div>
    );
};

export default Maze;