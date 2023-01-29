import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    user,
    userListReducer,
    userLogin,
    Register,
    DeleteUserReducer,
} from './reducers/userReducers'
import {
    Companies,
    Products,
    RandomProduct,
    Categories,
    Products1,
} from './reducers/ProductReducers'

const reducer = combineReducers({
    userDetails: user,
    userList: userListReducer,
    userLogin: userLogin,
    register: Register,
    DeleteUser: DeleteUserReducer,
    products: Products,
    RandomProduct: RandomProduct,
    Companies:Companies,
    Categories: Categories,
    Products1:Products1,
})
const userInformationStorage = localStorage.getItem('UserInfo') ? 
JSON.parse(localStorage.getItem('UserInfo')) : null

const initialState = {
    userLogin: {userInfo: userInformationStorage}
}
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools
(applyMiddleware(...middleware)))
export default store