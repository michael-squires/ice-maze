export const MOVE_LEFT = "MOVE_LEFT"   // Move piece left
export const MOVE_RIGHT = "MOVE_RIGHT"  // Move piece right
export const MOVE_UP = "MOVE_UP"  // Move piece right
export const MOVE_DOWN = "MOVE_DOWN"   // Move piece down
export const RESTART = "RESTART"     // Restart Game
export const CHANGE_MAZE = "CHANGE_MAZE"

export const moveRight = () => {
    return { type: MOVE_RIGHT }
}

export const moveLeft = () => {
    return { type: MOVE_LEFT }
}

export const moveUp = () => {
    return { type: MOVE_UP }
}

export const moveDown = () => {
    return { type: MOVE_DOWN }
}

export const Restart = () => {
    return { type: RESTART }
}

export const changeMaze = () => {
    return { type: CHANGE_MAZE }
}

