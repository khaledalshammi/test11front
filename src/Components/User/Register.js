import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login, register} from '../../actions/UserAction'

const Register = () =>{
    const dispatch = useDispatch()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password1,setPassword1] = useState('')
    const [password2,setPassword2] = useState('')
    const navigate = useNavigate()

    const user = useSelector(state => state.userLogin)
    const {success,userInfo} = user

    const registerr=()=>{
        if(username&&email&&password1&&password2){
            dispatch(register(username,email,password1,password2))
        }
    }
    useEffect(()=>{
        if(success){
            dispatch(login(username,password1))
            navigate('/')
        }
        if(userInfo){
            navigate('/')
        }
    })

    return (
        <div>
            <h1>Register</h1>
            <p>Username: </p>
            <input type='text' placeholder='Username' 
                onChange={e=>setUsername(e.target.value)}/>
            <p>Email: </p>
            <input type='text' placeholder='Email'
                onChange={e=>setEmail(e.target.value)}/>
            <p>Password: </p>
            <input type='password' placeholder='Password' 
                onChange={e=>setPassword1(e.target.value)}/>
            <p>Confirm Password: </p>
            <input type='password' placeholder='Confirm Password'
                onChange={e=>setPassword2(e.target.value)}/>

            <button onClick={registerr}>Register</button>
        </div>
    )
}

export default Register
