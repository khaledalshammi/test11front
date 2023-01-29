import axios from 'axios'
import {
    PRODUCTS_SUCCESS,PRODUCTS_FAIL,RANDOM_PRODUCT_SUCCESS,
    RANDOM_PRODUCT_FAIL,COMPANIES_SUCCESS,COMPANIES_FAIL,
    CATEGORIES_SUCCESS,CATEGORIES_FAIL,PRODUCTS1_SUCCESS,
    PRODUCTS1_FAIL,
} from '../constants/productConstant'

export const AllCompanies=()=>async(dispatch)=>{
    try{
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.get('/companies/',config)
        dispatch({type:COMPANIES_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:COMPANIES_FAIL,
            payload: error.response && error.response.data.error ? 
            error.response.data.error : error.message
        })
    }
}

export const AllCategories=(id)=>async(dispatch)=>{
    try{
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.get(`/${id}/categories`,config)
        dispatch({type:CATEGORIES_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:CATEGORIES_FAIL,
            payload: error.response && error.response.data.error ? 
            error.response.data.error : error.message
        })
    }
}

export const AllProducts=(id1,id2)=>async(dispatch)=>{
    try{
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.get(`/${id1}/${id2}/products`,config)
        dispatch({type:PRODUCTS1_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:PRODUCTS1_FAIL,
            payload: error.response && error.response.data.error ? 
            error.response.data.error : error.message
        })
    }
}

export const Productsaction = () => async (dispatch)=>{
    try{
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.get("/products/",config)
        dispatch({type:PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type: PRODUCTS_FAIL,
            payload: error.response && error.response.data.error ? 
            error.response.data.error : error.message
        })
    }
}

export const RandomProductaction = (id1,id2,id3) => async (dispatch)=>{
    try{
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        const config = {headers: {'Content-type': 'application/json'}}
        const {data} = await axios.get(`/${id1}/${id2}/${id3}`,config)
        dispatch({type:RANDOM_PRODUCT_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type: RANDOM_PRODUCT_FAIL,
            payload: error.response && error.response.data.error ? 
            error.response.data.error : error.message
        })
    }
}