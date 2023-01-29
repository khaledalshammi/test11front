import React from 'react'
import {Image} from 'react-bootstrap'
import im2 from '../im2.gif'
import { useNavigate } from 'react-router-dom'

const Home=()=>{
    const navigate = useNavigate()

    return (
        <div>
            <Image src={im2} fluid width='1200px' height='600px'
            onClick={()=>navigate('/companies')}/>
        </div>
    )
}

export default Home
