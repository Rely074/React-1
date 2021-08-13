export const SET_LOAD_START = 'ART::SET_LOAD_START'
export const SET_LOAD_END = 'ART::SET_LOAD_END'
export const SET_LOAD_ERROR = 'ART::SET_LOAD_ERROR'


export const startLoadingImg = () => ({
    type: SET_LOAD_START,
    payload: {
        loading: true,
        error: false
    }
})

export const endLoadingImg = (imageUrl) => ({
    type: SET_LOAD_END,
    payload: {
        loading: false,
        loaded: true,
        imageUrl,
        error: false
    }
})

export const errorLoadingImg = () => ({
    type: SET_LOAD_ERROR,
    payload: {
        error: true,
        loading: false,
        loaded: false,
        imageUrl: undefined
    }
})

