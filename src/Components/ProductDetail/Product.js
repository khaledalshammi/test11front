import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import {RandomProductaction} from '../../actions/ProductAction'
import {Image} from 'react-bootstrap'

const Product=()=>{
  const {id1,id2,id3} = useParams()
  const dispatch = useDispatch()
  const product_random = useSelector(state=>state.RandomProduct)
  const {product,error} = product_random
  useEffect(()=>{
    dispatch(RandomProductaction(id1,id2,id3))
  },[dispatch,id1,id2,id3])

  
  return (
    <div>
      {error ? <h1>{error}</h1> : 
      <div>
        <div>
        <br/>
          {product.size.map((size) => (
          <div key={size.id}>
              <span>{size.size}</span>
              <span>{size.quantity}</span>
          </div>))}
        </div>
        <br/>
        <h1>{product.price} KW</h1>
        <br/>
        <div>
        <br/>
              <p>{product.category.name}</p>
              <p>{product.category.company.name}</p>
        </div>
        <h1>{product.name}</h1>
        <div>
        <br/>
          {product.image.map((image) => (
          <div key={image.id}>
            <Image src={product.product_image} alt={product.name}
              fluid width='100px' height='222px'/>
          </div>))}
        </div>
        <br/>
        <button>Add To Cart</button>
      </div>}
    </div>
  )
}

export default Product
