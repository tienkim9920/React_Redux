export const signIn = (data) => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_SUCCESS",
            data
        })
    }
}

export const signUp = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SIGNUP_SUCCESS",
            data
        })
    }
}

export const logOut = (data) => {
    return (dispatch) => {
        dispatch({
            type: "LOGOUT_SUCCESS",
            data
        })
    }
}