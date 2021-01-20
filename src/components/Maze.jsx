import React from 'react';
import GridSquare from './GridSquare';

const map = require('../maps')

const Maze = (props) => {
    console.log('map', map)
    const grid = map.replace(/ /g, 's').split('\n');
    const blankGrid = []
    const height = grid.length;
    const width = grid[0].length;
    for (let row = 0; row < height; row++) {
        blankGrid.push([])
        grid[row] = grid[row].split('')
        for (let col = 0; col < width; col++) {
            blankGrid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
        }
    }
    var r = document.querySelector(':root');
    r.style.setProperty('--cols', width);
    r.style.setProperty('--rows', height);

    return (
        <div className='grid-board'>
            {blankGrid}
        </div>
    );
};

export default Maze;