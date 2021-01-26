import {
    MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN, MOVE_UP,
    RESTART, CHANGE_MAZE
} from '../actions'

const gameReducer = (state = {}, action) => {

    switch (action.type) {
        case MOVE_UP:

            return state

        case MOVE_RIGHT:

            return state

        case MOVE_LEFT:

            return state

        case MOVE_DOWN:

            return state

        case CHANGE_MAZE:

            return state

        case RESTART:

            return state

        default:
            return state
    }
}

export default gameReducer