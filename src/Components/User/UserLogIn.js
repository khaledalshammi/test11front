import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login} from '../../actions/UserAction'

const UserLogIn=()=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {error,success,userInfo} = userLogin
    const navigate = useNavigate()

    useEffect(()=>{
        if(success){
            navigate('/')
        }else if(userInfo){
            navigate('/')
        }else if(error){
            navigate('/login/')
        }
    },[navigate,userInfo,username,dispatch,success,error])

    const loginhandller = () =>{
        if(username && password){
            dispatch(login(username,password))
        }
    }

    return (
        <div>
            <h1>~~Sign In~~</h1>
            {error && <h3>{error}</h3>}
            <p>Your Username: </p>
            <input type='text' placeholder='Username' 
                onChange={e=>setUsername(e.target.value)}/>
            <p>Your Password: </p>
            <input type='password' placeholder='Password'
                onChange={e=>setPassword(e.target.value)}/>

            <button onClick={loginhandller}>Login</button>
        </div>
    )
}

export default UserLogIn
