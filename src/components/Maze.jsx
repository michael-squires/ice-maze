import React, { useEffect, useState } from 'react';
import Controls from './Controls';
import GridSquare from './GridSquare';
const maps = require('../data/maps')

const Maze = () => {

    const [mazeIndex, setMazeIndex] = useState(0);
    const [grid, setGrid] = useState([])
    //const [started, setStarted] = useState(false)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const numberOfGrids = maps.length
    const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
    const outOfGrid = (x, y) => {
        if (x < 0 || x > (grid.length - 1) || y < 0 || y > (grid[0].length - 1)) { return true }
        return false
    }

    useEffect(() => {
        console.log('USE EFFECT')
        let currentGrid = maps[mazeIndex].rowStrings
        currentGrid = currentGrid.map(rowString => rowString.split(''))
        const r = document.querySelector(':root');
        r.style.setProperty('--cols', currentGrid[0].length);
        r.style.setProperty('--rows', currentGrid.length);
        setGrid(currentGrid)
        let startIndex = -1
        for (let row = 0; row < currentGrid.length; row++) {
            startIndex = currentGrid[row].indexOf('S')
            if (startIndex !== -1) {
                setX(row)
                setY(startIndex)
                console.log('1st use effect x,y>>', x, y)
                break
            }
        }
        // eslint-disable-next-line
    }, [mazeIndex, setGrid])

    const makeMove = (e) => {
        const direction = e.target.value
        let xd = moves[direction][0]
        let yd = moves[direction][1];
        console.log('direction', direction)
        console.log('x,y', x, y)
        console.log('xd, yd', xd, yd)
        let x1 = x + xd;
        let y1 = y + yd;
        if (outOfGrid(x1, y1)) return
        if (grid[x1][y1] === '#') return
        while (grid[x1][y1] === 's' || grid[x1][y1] === 'S') {
            if (outOfGrid(x1 + xd, y1 + yd)) { break }
            if (grid[x1 + xd][y1 + yd] === '#') { break }
            x1 = x1 + xd;
            y1 = y1 + yd;
            setX(x1)
            setY(y1)
            console.log('slipping')
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
            <Controls
                makeMove={makeMove}
                mazeIndex={mazeIndex}
                setMazeIndex={setMazeIndex}
                numberOfGrids={numberOfGrids}
            />
        </>
    );
};

export default Maze;