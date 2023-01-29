import React,{useEffect} from 'react'
import {AllCompanies} from '../../actions/ProductAction'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Companies=()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Com = useSelector(state=>state.Companies)
    const {error,companies} = Com

    useEffect(()=>{
        dispatch(AllCompanies())
    },[dispatch])

    return (
        <div>
            {error ? <h1>{error}</h1> : 
            <div>
                {companies.map(company=>(
                    <div key={company.id}>
                        <strong><h1 onClick={()=>navigate(`/${company.id}/categories`)}
                            >{company.name}</h1></strong>
                    </div>
                ))}
            </div>
        }
        </div>
    )
}

export default Companies
