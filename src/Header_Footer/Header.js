import { NavLink,useNavigate } from 'react-router-dom'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Logout} from '../actions/UserAction'

const Header=()=>{
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const navigate = useNavigate()

  const logout=()=>{
      dispatch(Logout())
      navigate('/')
  }

  return (
    <div>
        <h1 onClick={()=>navigate('/')}>Khaled</h1>
        <div>
              {userInfo ? 
                <div>
                  <p><a href='' onClick={logout}>Logout</a></p>
                  <span/>
                  <NavLink to='/profile/'>Profile</NavLink>
                  {userInfo.is_staff && <NavLink to='/users/'>Users</NavLink>}
                </div>
              : <div><NavLink to='/login/'>Login</NavLink> <br/><NavLink to='/register/'>Register</NavLink></div>}
              
              
        </div>
    </div>
  )
}

export default Header
