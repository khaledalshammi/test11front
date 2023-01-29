import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import {AllCategories} from '../../actions/ProductAction'
import {useLocation} from 'react-router-dom';

const Categories=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const category = useSelector(state=>state.Categories)
    const {error,categories} = category
    const location = useLocation()
    const first_id = location.pathname.substring(1,2) 
    
    useEffect(()=>{
        dispatch(AllCategories(id))
    },[dispatch,id])

    return (
        <div>
            {error ? <h1>{error}</h1> : 
            <div>
                {categories.map(cat=>(
                    <div key={cat.id}>
                        <strong><h1 onClick={()=>
                            navigate(`/${first_id}/${id}/products`)}
                        >{cat.name}</h1></strong>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Categories
