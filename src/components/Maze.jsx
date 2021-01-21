import React, { useEffect, useState } from 'react';
import Controls from './Controls';
import GridSquare from './GridSquare';
const maps = require('../data/maps')

const Maze = (props) => {

    const [maze, setMaze] = useState([]);
    const [mazeIndex, setMazeIndex] = useState(0);
    const numberOfGrids = maps.length

    useEffect(() => {
        let grid = maps[mazeIndex].rowStrings
        const height = grid.length;
        const width = grid[0].length;
        const r = document.querySelector(':root');
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


    return (
        <>
            <header className="App-header">
                <h1 className="App-title">{maps[mazeIndex].name}</h1>
            </header>
            <div className='grid-board'>
                {maze}
            </div>
            <Controls
                mazeIndex={mazeIndex}
                setMazeIndex={setMazeIndex}
                numberOfGrids={numberOfGrids}
            />
        </>
    );
};

export default Maze;