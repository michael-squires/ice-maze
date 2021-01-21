import React, { useEffect, useState } from 'react';
import GridSquare from './GridSquare';
const maps = require('../data/maps')

const Maze = (props) => {

    const [maze, setMaze] = useState([]);
    const [mazeIndex, setMazeIndex] = useState(0);

    useEffect(() => {
        let grid = maps[mazeIndex].rowStrings
        console.log('grid initial', grid)
        const height = grid.length;
        const width = grid[0].length;
        var r = document.querySelector(':root');
        r.style.setProperty('--cols', width);
        r.style.setProperty('--rows', height);
        const currentMaze = grid.map((rowArray, row) => {
            return rowArray.split('').map((square, col) => {
                const squareType = square === '#' ? 'o' : square
                return <GridSquare key={`${row}${col}`} type={squareType} />
            })
        })
        setMaze(currentMaze)
    }, [mazeIndex])



    // for (let row = 0; row < height; row++) {
    //     blankGrid.push([])
    //     grid[row] = grid[row].split('')
    //     for (let col = 0; col < width; col++) {
    //         blankGrid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
    //     }
    // }

    return (
        <div className='grid-board'>
            {maze}
        </div>
    );
};

export default Maze;