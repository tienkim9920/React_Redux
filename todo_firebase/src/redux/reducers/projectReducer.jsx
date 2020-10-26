
const initState = {
    projects: [
        { id: '1', title: "I'm TienKim", content: 'Post by Tien Kim', timeAt: '09-09-2000'},
        { id: '2', title: "I'm ThuyLinh", content: 'Post by Thuy Linh', timeAt: '14-09-2000'},
        { id: '3', title: "I'm QuocToan", content: 'Post by Quoc Toan', timeAt: '21-07-2000'},
        { id: '4', title: "I'm HieuLuong", content: 'Post by Hieu Luong', timeAt: '11-01-2000'},
    ]
}

const projectReducer = (state = initState, action) => {
    if (action.type === 'CREATE_PROJECT'){
        state.projects.push(action.project)
        console.log(state.projects)
    }
    if (action.type === 'DELETE_DETAIL'){
        var projects = state.projects.filter(e => {
            return e.id != action.id
        })

        return {
            projects: projects
        }
        
    }
    return state
}

export default projectReducer