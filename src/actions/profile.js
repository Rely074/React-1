export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    },
})

export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline,
    },
})

export const changeIsOnlineWithThunk = (isOnline) => {
    return (dispatch, getState) => {
        console.log(getState())

        setTimeout(() => {
            dispatch(changeIsOnline(isOnline))
        }, 1000)
    }
}

