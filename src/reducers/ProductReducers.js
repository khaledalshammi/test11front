import {
    PRODUCTS_SUCCESS,PRODUCTS_FAIL,RANDOM_PRODUCT_SUCCESS,
    RANDOM_PRODUCT_FAIL,COMPANIES_SUCCESS,COMPANIES_FAIL,
    CATEGORIES_SUCCESS,CATEGORIES_FAIL,PRODUCTS1_SUCCESS,
    PRODUCTS1_FAIL,
} from '../constants/productConstant'

export const Companies=(state={companies:[]},action)=>{
    switch(action.type){
        case COMPANIES_SUCCESS:
            return {companies:action.payload}
        case COMPANIES_FAIL:
            return {error:action.payload}
        default:
            return state
    }
}

export const Categories=(state={categories:[{company:{}}]},action)=>{
    switch(action.type){
        case CATEGORIES_SUCCESS:
            return {categories:action.payload}
        case CATEGORIES_FAIL:
            return {error:action.payload}
        default:
            return state
    }
}

export const Products1=(state={products:[]},action)=>{
    switch(action.type){
        case PRODUCTS1_SUCCESS: 
            return {products:action.payload}
        case PRODUCTS1_FAIL: 
            return {error:action.payload}
        default:
            return state
    }
}

export const Products = (state={products:[{category:{company:{}}}]},action)=>{
    switch(action.type){
        case PRODUCTS_SUCCESS:
            return {products:action.payload}
        case PRODUCTS_FAIL:
            return {error:action.payload}
        default:
            return state
    }
}

export const RandomProduct = (state={product:{size:[],color:[],category:{company:{}},image:[]}},action)=>{
    switch(action.type){
        case RANDOM_PRODUCT_SUCCESS:
            return {product:action.payload}
        case RANDOM_PRODUCT_FAIL:
            return {error:action.payload}
        default:
            return state
    }
}