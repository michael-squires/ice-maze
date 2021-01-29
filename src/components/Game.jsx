import React, { useEffect, useState, useRef, useCallback } from 'react';
import Controls from './Controls';
import Header from './Header';
import Maze from './Maze'
import Popup from './Popup';
const puzzleData = require('../assets/data/puzzleData')

const Game = () => {

    const [gridIndex, setGridIndex] = useState(0);
    const [grid, setGrid] = useState([])
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [route, SetRoute] = useState([])

    const slipping = useRef(false)
    const direction = useRef('d')
    const speed = useRef(200)
    const mazeCompleted = useRef(false)
    const startCoordinates = useRef([])
    const numberOfGrids = puzzleData.length

    const makeMove = useCallback(() => {
        const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
        const outOfGrid = (x, y) => (x < 0 || x > (grid.length - 1) || y < 0 || y > (grid[0].length - 1))
        let xd = moves[direction.current][0]
        let yd = moves[direction.current][1]
        if (outOfGrid(x + xd, y + yd) || grid[x + xd][y + yd] === '#') {
            xd = 0
            yd = 0
            slipping.current = false
        }
        else if (grid[x + xd][y + yd] === 'x') {
            slipping.current = false
        }
        else if (grid[x + xd][y + yd] === 'E') {
            slipping.current = false
            mazeCompleted.current = true
        }
        else {
            slipping.current = true
        }
        setX(x => x + xd)
        setY(y => y + yd)
        return
    }, [x, y, grid])


    useEffect(() => {
        mazeCompleted.current = false
        SetRoute([])
        const newGrid = puzzleData[gridIndex].rowStrings
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
                startCoordinates.current = [row, startIndex]
                setX(row)
                setY(startIndex)
                break

            }
        }
        setGrid(newGrid)
    }, [gridIndex, setGrid])

    useEffect(() => {
        if (slipping.current) {
            speed.current = speed.current * 0.8
            setTimeout(makeMove, speed.current)
        }
    }, [x, y, setX, setY, makeMove])

    const handleDirectionClick = (e) => {
        const dir = e.target.value
        SetRoute(prevRoute => prevRoute.concat(dir))
        speed.current = 200
        if (!slipping.current) {
            direction.current = dir
            makeMove()
        }
    }

    const incrementGridIndex = () => {
        setGridIndex((gridIndex + 1) % numberOfGrids)
    }

    const resetMaze = () => {
        SetRoute([])
        setX(startCoordinates.current[0])
        setY(startCoordinates.current[1])
        direction.current = 'd'
        mazeCompleted.current = false
    }

    return (
        <>
            <Header
                title={puzzleData[gridIndex].name}
                resetMaze={resetMaze}
                incrementGridIndex={incrementGridIndex}
            />
            <Maze
                grid={grid}
                x={x}
                y={y}
                dir={direction.current}
                index={gridIndex}
            />
            <Controls
                handleDirectionClick={handleDirectionClick}
            />
            <Popup
                incrementGridIndex={incrementGridIndex}
                resetMaze={resetMaze}
                mazeCompleted={mazeCompleted.current}
                route={route}
                shortest={puzzleData[gridIndex].optimalRoute.length}
            />
        </>
    );
};

export default Game;