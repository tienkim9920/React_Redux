
const initState = {
    users: [
        {id: "1", fullName: "Nguyễn Kim Tiền", email: "tienkim@gmail.com", password: "123"},
        {id: "2", fullName: "Phạm Xuân Hoài",email: "xuanhoai@gmail.com", password: "123"}
    ],
    idUser: ""
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case "LOGIN_SUCCESS":
            console.log("Login Success!");
            console.log(action.data)
            return {
                users: state.users,
                idUser: action.data
            }
        case "SIGNUP_SUCCESS":
            console.log("SignUp Success!")
            console.log(state.users)
            console.log(action.data)
            return {
                users: [
                    ...state.users,
                    action.data
                ],
                idUser: ""
            }
        case "LOGOUT_SUCCESS":
            console.log("Logout Success")
            return {
                users: state.users,
                idUser: action.data
            }
        default:
            return state
    }
}

export default authReducer