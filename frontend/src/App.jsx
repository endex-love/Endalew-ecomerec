import React from 'react'

import Home from './pages/Home.jsx';
import Navbar from './compontes/Navbar.jsx';
import Footer from './compontes/Footer.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Order from './pages/Order.jsx';
import Product from './pages/Product.jsx';


import Collaction from './pages/Collaction.jsx';
import Placeorder from './pages/Placeorder.jsx';
import Hero from './compontes/Hero.jsx';
import { ToastContainer } from 'react-toastify';
import { Routes ,Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
   <ToastContainer/>
   <Navbar/>
   
   
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/cart' element ={<Cart/>}/>
    <Route path='/oredr' element ={<Order/>}/>
    <Route path='/product/:productId' element ={<Product/>}/>
    <Route path='/catagory/:catagory' element ={<Collaction/>}/>
    <Route path='/placeorder/:catagory' element ={<Placeorder/>}/>
    

    <Route path="/admin/products" element={<Product />} />






    

   </Routes>
   <Footer/>
  
    
    </div>
    
  )
}

export default App
