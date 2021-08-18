import {SET_LOAD_END, SET_LOAD_ERROR, SET_LOAD_ERROR_TRUE, SET_LOAD_START} from "../actions/art";

const initialState = {
    imageUrl: {}
}

export default function artReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOAD_START: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_LOAD_END: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_LOAD_ERROR: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state
    }
}