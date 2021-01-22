import React, { useEffect, useState } from 'react';
import Controls from './Controls';
import GridSquare from './GridSquare';
const maps = require('../data/maps')

const Maze = (props) => {

    const [mazeIndex, setMazeIndex] = useState(0);
    const [grid, setGrid] = useState([])
    const [maze, setMaze] = useState([])
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [started, setStarted] = useState(false)

    const numberOfGrids = maps.length
    const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
    const outOfGrid = (x, y) => {
        if (x < 0 || x > (grid.length - 1) || y < 0 || y > (grid[0].length - 1)) { return true }
        return false
    }


    useEffect(() => {
        let currentGrid = maps[mazeIndex].rowStrings
        currentGrid = currentGrid.map(rowString => rowString.split(''))
        setGrid(currentGrid)
        const r = document.querySelector(':root');
        r.style.setProperty('--cols', currentGrid[0].length);
        r.style.setProperty('--rows', currentGrid.length);
        //var rs = getComputedStyle(r);
        // console.log("The value of --cols is: " + rs.getPropertyValue('--cols'));
        // console.log("The value of --rows is: " + rs.getPropertyValue('--rows'));
        if (started === false) {
            let startIndex = -1
            for (let row = 0; row < grid.length; row++) {
                startIndex = grid[row].indexOf('S')
                if (startIndex !== -1) {
                    setX(row)
                    setY(startIndex)
                    setStarted(true)
                    console.log('1st use effect x,y>>', x, y)
                    break
                }
            }
        }
        //console.log('grid before maze generated', grid)
        const currentMaze = currentGrid.map((rowArray, row) => {
            return rowArray.map((square, col) => {
                const squareType = square === '#' ? 'o' : square === 'S' ? 's' : square
                return x === row && y === col ?
                    <GridSquare key={`${row}${col}`} symbol={'🤠'} type={squareType} />
                    :
                    <GridSquare key={`${row}${col}`} type={squareType} />
            })
        })
        setGrid(currentGrid)
        setMaze(currentMaze)
        // eslint-disable-next-line
    }, [mazeIndex, x, y])




    const makeMove = (e) => {
        const direction = e.target.value
        let xd = moves[direction][0]
        let yd = moves[direction][1];
        console.log('direction', direction)
        console.log('x,y', x, y)
        console.log('xd, yd', xd, yd)
        let x1 = x + xd;
        let y1 = y + yd;
        console.log('x1,y1', x1, y1, grid[x1][y1])
        if (outOfGrid(x1, y1)) return
        if (grid[x1][y1] === '#') return
        let count = 0
        while (grid[x1][y1] === 's' && count < 10) {
            console.log('slippery!')
            if (outOfGrid(x1 + xd, y1 + yd)) { break }
            if (grid[x1 + xd][y1 + yd] === '#') { break }
            setX(x1)
            setY(y1)
            count++
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
                mazeIndex={mazeIndex}
                setMazeIndex={setMazeIndex}
                numberOfGrids={numberOfGrids}
            />
        </>
    );
};

export default Maze;