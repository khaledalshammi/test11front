import Footer from './Header_Footer/Footer.js'
import Header from './Header_Footer/Header.js'
import {Routes,Route} from 'react-router-dom'
import User from './Components/User/User'
import Users from './Components/User/Users'
import UserLogIn from './Components/User/UserLogIn'
import Register from './Components/User/Register'
import Profile from './Components/User/Profile'
import Products from './Components/ProductDetail/Products'
import Product from './Components/ProductDetail/Product'
import Home from './Header_Footer/Home'
import Companies from './Components/ProductDetail/Companies'
import Categories from './Components/ProductDetail/Categories'
import Products1 from './Components/ProductDetail/Products1'
const App=()=>{
  return (
    <div>
      <Header/>
        <main>
          <div>
            <Routes>
              <Route path='/' element={<Home/>} exact/>
              <Route path='/companies' element={<Companies/>}/>
              <Route path='/:id/categories/' element={<Categories/>}/>
              <Route path='/:id1/:id2/products/' element={<Products1/>}/>
              <Route path='/:id' element={<User/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/login' element={<UserLogIn/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/allproducts' element={<Products/>}/>
              <Route path='/:id1/:id2/:id3' element={<Product/>}/>
            </Routes>
          </div>
        </main>
      <Footer/>
    </div>
  );}
export default App;