import { DUMMY } from "../constants/reducer_types"

export const setDummy = (data) => {
    return dispatch => {
        dispatch({
            type: DUMMY,
            payload: data
        })
    }
}