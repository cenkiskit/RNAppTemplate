import { DUMMY } from '../constants/reducer_types'

const INITIAL_STATE = {
    dummy: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DUMMY:
            return { ...state, dummy: action.payload }

        default:
            return { ...state }
    }
}