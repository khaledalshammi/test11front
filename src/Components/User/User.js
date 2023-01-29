import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetail} from '../../actions/UserAction'
import {useParams} from 'react-router-dom'

const User = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {user,error} = userDetails

    useEffect(()=>{
        dispatch(getUserDetail(id))
    },[dispatch,id])

    return (
        <div>
            {error ? <h1>{error}</h1> : 
                <div>
                    <h1>Id: {user.id}</h1>
                    <h1>Name: {user.username}</h1>
                    <h1>Gmail: {user.email}</h1>
                    <h1>Staff: {user.is_staff&&<span> true</span>}</h1>
                </div>
            }
        </div>
    )
}

export default User
