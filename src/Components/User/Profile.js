import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Profile=()=>{
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=>{
        if (!userInfo){
            navigate('/')
        }
    })

    return (
        <div>
            {userInfo && 
                <div>
                    <h1>Profile</h1>
                    <h3>{userInfo.id}</h3>
                    <h3>{userInfo.username}</h3>
                    <h3>{userInfo.email}</h3>
                </div>
            }
            
        </div>
    )
    }

export default Profile
