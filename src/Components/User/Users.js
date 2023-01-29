import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {listUsers,deleteuser} from '../../actions/UserAction'
import { useNavigate } from 'react-router-dom'
import {DELETE_USER_RESET} from '../../constants/userConstant'

const Users = () => {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.userList)
  const {error, users} = userList
  const de_er = useSelector(state => state.DeleteUser)
  const {success:deleted_done,error:deleted_error} = de_er
  const navigate = useNavigate()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(()=>{
    if (!userInfo){
      navigate('/')
    }
    if (userInfo && !userInfo.is_staff){
      navigate('/')
    }
    dispatch(listUsers())
    if (deleted_done){
      dispatch(listUsers())
      dispatch({type:DELETE_USER_RESET})
    }
  },[dispatch,deleted_done,userInfo,navigate])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteuser(id))
    }
  }

  return (
    <div>
      {deleted_error&&<h4>{deleted_error}</h4>}
      {deleted_done&&<h4>{deleted_done}</h4>}
      {error ? <h1>{error}</h1> : (<div>
        {users.map(user => (
          <div key={user.id}>
            <span>{user.email} - </span>
            <span>{user.username} - </span>
            <span>{user.id}</span>
            <button onClick={()=>deleteHandler(user.id)}>Delete User</button>
          </div>
        ))}
        </div>)
      }
    </div>
  )
}
export default Users