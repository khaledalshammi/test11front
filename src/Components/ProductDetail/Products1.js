import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import {AllProducts} from '../../actions/ProductAction'
import {Image} from 'react-bootstrap'

const Products1=()=>{
    const {id1,id2} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const Products = useSelector(state=>state.Products1)
    const {error,products} = Products

    useEffect(()=>{
        dispatch(AllProducts(id1,id2))
    },[dispatch,id1,id2])

    return (
        <div>
            {error ? <h1>{error}</h1> : 
            <div>
                {products.map(product=>(
                    <div key={product.id}>
                        <br/>
                        <br/>
                        <p onClick={()=>navigate(`/${id1}/${id2}/${product.id}`)}>{product.name}</p>
                        <Image onClick={()=>navigate(`/${id1}/${id2}/${product.id}`)} 
                        src={product.product_image} alt={product.name}
                        fluid width='200px' height='444px'/>
                        <p onClick={()=>navigate(`/${id1}/${id2}/${product.id}`)}>{product.description}</p>
                        <p onClick={()=>navigate(`/${id1}/${id2}/${product.id}`)}>{product.price} KW</p>
                        <br/>
                        <br/>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Products1
