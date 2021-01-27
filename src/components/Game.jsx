import React, { useEffect, useState, useRef } from 'react';
import Controls from './Controls';
import Header from './Header';
import Maze from './Maze'
import Popup from './Popup';
const maps = require('../assets/maps')

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

    const numberOfGrids = maps.length
    const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
    const outOfGrid = (x, y) => (x < 0 || x > (grid.length - 1) || y < 0 || y > (grid[0].length - 1))


    useEffect(() => {
        mazeCompleted.current = false
        SetRoute([])
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
                break
            }
        }
        setGrid(newGrid)
        // eslint-disable-next-line
    }, [gridIndex, setGrid])

    useEffect(() => {
        if (slipping.current) {
            speed.current = speed.current / 2
            setTimeout(makeMove, speed.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [x, y, slipping.current])


    const handleDirectionClick = (e) => {
        const dir = e.target.value
        console.log(dir)
        console.log(route)
        SetRoute(prevRoute => prevRoute.concat(dir))
        speed.current = 200
        if (!slipping.current) {
            direction.current = dir
            makeMove()
        }
    }

    const makeMove = () => {
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
        setX(x + xd)
        setY(y + yd)
        return
    }

    return (
        <>
            <Header title={maps[gridIndex].name} />
            <Maze
                grid={grid}
                x={x}
                y={y}
                dir={direction.current} />
            <Controls
                handleDirectionClick={handleDirectionClick}
                gridIndex={gridIndex}
                setGridIndex={setGridIndex}
                numberOfGrids={numberOfGrids}
            />
            <Popup
                mazeCompleted={mazeCompleted.current}
                route={route} />
        </>
    );
};

export default Game;