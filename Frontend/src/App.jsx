import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Collection from './Pages/collection';
import Collections from './Pages/Collections';
import About from './Pages/about';
import Contact from './Pages/contact';
import Cart from './Pages/cart';
import Login from './Pages/login';
import Orders from './Pages/orders';
import Product from './Pages/product';
import PlaceOrder from './Pages/placeorder';
import Navbar from './Components/navbar';
import "./index.css"
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/Collections' element={<Collections />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product' element={<Product />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
