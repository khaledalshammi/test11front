import {
    USER_SUCCESS,
    USER_FAIL,
    USER_RESET,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,
    USER_LOGIN_DATA,
} from '../constants/userConstant'

export const Register = (state={},action)=>{
    switch(action.type){
        case USER_REGISTER_SUCCESS:
            return {success: true}
        case USER_REGISTER_FAIL:
            return {error: action.payload}
        case USER_LOGIN_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userLogin = (state={userInfo:{}},action)=>{
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return {success:true}
        case USER_LOGIN_DATA:
            return {userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {error: action.payload}
        case USER_LOGIN_LOGOUT:
            return {}
        default:
            return state
    }
}

export const user=(state={user: {}},action)=>{
    switch(action.type){
        case USER_SUCCESS:
            return {user: action.payload}
        case USER_FAIL:
            return {error: action.payload}
        case USER_RESET:
            return {user: {}}
        default:
            return state
    }
}

export const userListReducer = (state={users:[]},action)=>{
    switch (action.type) {
        case USER_LIST_SUCCESS:
            return {users: action.payload}
        case USER_LIST_FAIL:
            return {error: action.payload}
        case USER_LIST_RESET:
            return { users: [] }
        default:
            return state
}}

export const DeleteUserReducer=(state={},action)=>{
    switch (action.type){
        case DELETE_USER_SUCCESS:
            return {success: action.payload}
        case DELETE_USER_FAIL:
            return {error:action.payload}
        case DELETE_USER_RESET:
            return {}
        default:
            return state
    }
}