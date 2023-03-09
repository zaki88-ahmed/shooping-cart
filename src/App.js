import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Fragmen } from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';



function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products').then((res)=>{
    setProducts(res.data);
})

},[])


  return (
    // <Fragment>
    //   <Navbar/>

    // </Fragment>


    <Router>
      <div>
        <Navbar/>

        <Routes>
          {/* <Route path='/' element={<Home/>} /> */}
          <Route path='/' element={<Home allproducts={products} />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
