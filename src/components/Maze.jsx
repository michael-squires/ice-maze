import React, { useEffect, useState } from 'react';
import Controls from './Controls';
import GridSquare from './GridSquare';
const maps = require('../data/maps')

const Maze = (props) => {

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    //const [direction, setDirection] = useState(null)
    const [maze, setMaze] = useState([]);
    const [mazeIndex, setMazeIndex] = useState(0);
    const [grid, setGrid] = useState([])
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const numberOfGrids = maps.length
    const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
    const outOfGrid = (x, y) => {
        if (x < 0 || x > (height - 1) || y < 0 || y > (width - 1)) { return true }
        return false
    }


    useEffect(() => {
        //setDirection(null)
        let currentGrid = maps[mazeIndex].rowStrings
        currentGrid = currentGrid.map(rowString => rowString.split(''))
        setGrid(currentGrid)
        setWidth(currentGrid[0].length)
        setHeight(currentGrid.length)
        const r = document.querySelector(':root');
        r.style.setProperty('--cols', currentGrid[0].length);
        r.style.setProperty('--rows', currentGrid.length);
        let startIndex = -1
        for (let row = 0; row < height; row++) {
            console.log(grid[row])
            startIndex = grid[row].indexOf('S')
            if (startIndex !== -1) {
                setX(row)
                setY(startIndex)
                break
            }
        }
    }, [mazeIndex])

    useEffect(() => {
        const currentMaze = grid.map((rowArray, row) => {
            return rowArray.map((square, col) => {
                const squareType = square === '#' ? 'o' : square
                return <GridSquare key={`${row}${col}`} type={squareType} />
            })
        })
        setMaze(currentMaze)
    }, [grid, mazeIndex, x, y])

    const makeMove = (e) => {
        const direction = e.target.value
        console.log(direction)
        let xd = moves[direction][0]
        let yd = moves[direction][1];
        console.log('while', direction, x, y, xd, yd)
        let x1 = x + xd;
        let y1 = y + yd;
        if (outOfGrid(x1, y1)) return
        if (grid[x1][y1] === 'o') return
        while (grid[x1][y1] === 's') {
            if (outOfGrid(x1 + xd, y1 + yd)) { break }
            if (grid[x1 + xd][y1 + yd] === '#') { break }
            setX(x1)
            setY(y1)
        }
        setX(x1)
        setY(y1)
        return
    }

    return (
        <>
            <header className="App-header">
                <h2 className="App-title">{maps[mazeIndex].name}</h2>
            </header>
            <div className='grid-board'>
                {maze}
            </div>
            <Controls
                makeMove={makeMove}
                setDirection={setDirection}
                mazeIndex={mazeIndex}
                setMazeIndex={setMazeIndex}
                numberOfGrids={numberOfGrids}
            />
        </>
    );
};

export default Maze;