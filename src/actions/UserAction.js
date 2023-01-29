import axios from 'axios'
import {USER_SUCCESS,
        USER_FAIL,
        USER_LIST_SUCCESS,
        USER_LIST_FAIL,
        USER_LOGIN_LOGOUT,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_FAIL,
        USER_LOGIN_FAIL,
        USER_LOGIN_SUCCESS,
        DELETE_USER_FAIL,
        DELETE_USER_SUCCESS,
        USER_LOGIN_DATA,
} from '../constants/userConstant'

export const login = (username, password) => async (dispatch) => {
    try {
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const { data } = await axios.post('/dj-rest-auth/login/',{ 'username': username, 'password': password },config)
        dispatch({type: USER_LOGIN_SUCCESS})
        dispatch(Done(username))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail? error.response.data.detail: error.message,
})}}


export const register = (username, email,password1,password2) => async (dispatch)=>{
    fetch('http://127.0.0.1:8000/dj-rest-auth/registration/', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({username, email,password1,password2})
    })
        .then(resp => resp.json())
        .then(data => {
            if(data.key === undefined) {
                dispatch({type:USER_REGISTER_FAIL,payload:data})
            }else{
                dispatch({type:USER_LOGIN_SUCCESS})
                dispatch({type:USER_REGISTER_SUCCESS})
            }
        })
    }

export const getUserDetail = (id) => async (dispatch) =>{
    try{
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.get(`/user/${id}`,config)
        dispatch({type:USER_SUCCESS,payload: data})
    }catch(error){
        dispatch({
            type:USER_FAIL,
            payload: error.response && error.response.data.detail? error.response.data.detail: error.message,
        })
    }
}

export const Logout = () => async (dispatch) =>{
    localStorage.removeItem('UserInfo')
    dispatch({ type: USER_LOGIN_LOGOUT })
}

export const listUsers = () => async (dispatch)=>{
    try{
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.get('/users/',config)
        dispatch({type:USER_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:USER_LIST_FAIL,
            payload: error.message,
        })
    }
}

export const deleteuser=(id) => async (dispatch) =>{
    try{
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.delete(`/deleteuser/${id}`,config)
        dispatch({type:DELETE_USER_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:DELETE_USER_FAIL,
            data: error.response && error.response.data.error ? error.response.data.error : error.message
        })
    }
}

export const Done = (username) => async (dispatch) =>{
    const config = {headers: {'Content-type': 'application/json'}}
    const {data} = await axios.get(`/user/${username}`,config)
    dispatch({type:USER_LOGIN_DATA,payload:data})
    localStorage.setItem('UserInfo', JSON.stringify(data))
}