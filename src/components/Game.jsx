import React, { useEffect, useState, useRef } from 'react';
import Controls from './Controls';
import Maze from './Maze'
const maps = require('../data/maps')

const Game = () => {

    const [gridIndex, setGridIndex] = useState(0);
    const [grid, setGrid] = useState(maps[0].rowStrings
        .map(rowString => rowString.split('')))
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const slipping = useRef(false)
    const direction = useRef(null)
    const numberOfGrids = maps.length
    const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
    const outOfGrid = (x, y) => {
        if (x < 0 || x > (grid.length - 1) || y < 0 || y > (grid[0].length - 1)) { return true }
        return false
    }

    useEffect(() => {
        console.log('USE EFFECT grid', grid)
        const newGrid = maps[gridIndex].rowStrings
            .map(rowString => rowString.split(''))
        const r = document.querySelector(':root');
        const height = newGrid.length
        const width = newGrid[0].length
        r.style.setProperty('--rows', height);
        r.style.setProperty('--cols', width);
        let startIndex = -1
        for (let row = 0; row < newGrid.length; row++) {
            startIndex = newGrid[row].indexOf('S')
            if (startIndex !== -1) {
                setX(row)
                setY(startIndex)
                console.log('1st use effect x,y>>', x, y)
                break
            }
        }
        setGrid(newGrid)
        // eslint-disable-next-line
    }, [gridIndex, setGrid])

    useEffect(() => {
        console.log('useEffect slipping.current', slipping.current)
        if (slipping.current) {
            setTimeout(makeMove, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [x, y])



    const handleDirectionClick = (e) => {
        const dir = e.target.value
        if (!slipping.current) {
            direction.current = dir
            makeMove()
        }
    }

    const makeMove = () => {
        let xd = moves[direction.current][0]
        let yd = moves[direction.current][1]
        console.log('direction.current', direction.current)
        console.log('x,y', x, y)
        console.log('xd, yd', xd, yd)

        if (outOfGrid(x + xd, y + yd) || grid[x + xd][y + yd] === '#') {
            xd = 0
            yd = 0
            slipping.current = false
        }
        else if (grid[x + xd][y + yd] === 'x') {
            slipping.current = false
        }
        else {
            slipping.current = true
        }
        console.log('xd,yd after ifs', xd, yd)
        setX(x => x + xd)
        setY(y => y + yd)
        return
    }

    return (
        <>
            <header className="App-header">
                <h2 className="App-title">{maps[gridIndex].name}</h2>
            </header>
            <Maze grid={grid} x={x} y={y} />
            <Controls
                handleDirectionClick={handleDirectionClick}
                gridIndex={gridIndex}
                setGridIndex={setGridIndex}
                numberOfGrids={numberOfGrids}
            />
        </>
    );
};

export default Game;