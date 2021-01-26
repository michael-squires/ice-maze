import React, { useEffect, useState, useRef } from 'react';
import Controls from './Controls';
import Maze from './Maze'
const maps = require('../data/maps')

const Game = () => {

    const [gridIndex, setGridIndex] = useState(0);
    const [grid, setGrid] = useState(maps[gridIndex].rowStrings
        .map(rowString => rowString.split('')))
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const slipping = useRef(false)
    const numberOfGrids = maps.length
    const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
    const outOfGrid = (x, y) => {
        if (x < 0 || x > (grid.length - 1) || y < 0 || y > (grid[0].length - 1)) { return true }
        return false
    }

    useEffect(() => {
        console.log('USE EFFECT grid', grid)
        const r = document.querySelector(':root');
        const height = grid.length
        const width = grid[0].length
        r.style.setProperty('--rows', height);
        r.style.setProperty('--cols', width);
        let startIndex = -1
        for (let row = 0; row < grid.length; row++) {
            startIndex = grid[row].indexOf('S')
            if (startIndex !== -1) {
                setX(row)
                setY(startIndex)
                console.log('1st use effect x,y>>', x, y)
                break
            }
        }
        // eslint-disable-next-line
    }, [gridIndex, setGrid])

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
                <h2 className="App-title">{maps[gridIndex].name}</h2>
            </header>
            <Maze grid={grid} x={x} y={y} />
            <Controls
                makeMove={makeMove}
                gridIndex={gridIndex}
                setGridIndex={setGridIndex}
                numberOfGrids={numberOfGrids}
            />
        </>
    );
};

export default Game;