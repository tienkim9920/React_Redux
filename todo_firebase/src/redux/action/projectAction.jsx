export const createProject = (project) =>{
    return (dispatch) => {
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}

export const deleteDetail = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_DETAIL',
            id: id
        })
    }
}