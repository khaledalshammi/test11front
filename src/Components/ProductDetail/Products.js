import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Productsaction} from '../../actions/ProductAction'
import {useNavigate} from 'react-router-dom'
import {Image} from 'react-bootstrap'

const Products=()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pro = useSelector(state=>state.products)
    const {error,products} = pro

    useEffect(()=>{
        if(!error){
            dispatch(Productsaction())
        }
    },[dispatch,error])

    return (
        <div>
            {error ? <h1>{error}</h1> : 
            <div>
                {products.map(product=>(
                    <div key={product.id} onClick={()=>navigate(`/${product.category.company.id}/${product.category.id}/${product.id}`)}>
                        <h1>{product.category.name}</h1>
                        <h1>{product.category.company.name}</h1>
                        <br/>
                        <br/>
                        <p>{product.name}</p>
                        <Image src={product.product_image} alt={product.name} fluid width='200px' height='444px'/>
                        <p>{product.description}</p>
                        <p>{product.price} KW</p>
                        <br/>
                        <br/>
                        
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Products
