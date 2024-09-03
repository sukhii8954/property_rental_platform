import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/SignUp';
import PropertyList from './Components/PropertyList';
import Bookings from './Components/Bookings';
import { userAuth } from './Contexts/AuthContext';
import CardIcon from './Components/CardIcon';
import CartDetails from './Components/CartDetails';
import { CardProvider } from './Contexts/Cart';
import BookingDetails from './Components/BookingDetails';
import Confirmation from './Components/Confirmation';
import Footer from './Components/Footer';
function App( ) {
  // const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const {isAuthenticated} = userAuth();

  return (
    <>
     <CardProvider>
    <Navbar   isUser = {isAuthenticated} isAdmin={isAdmin}/>
    <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/login' element={<Login   />} />
             <Route path='/signup' element={<SignUp />} />
             <Route path='/admin' element={<AdminPanel isAdmin={isAdmin}/>}></Route>
             <Route path='/dashboard/:id' element={<DashBoard/>} ></Route>
             <Route path='/property-list' element ={<PropertyList/>} ></Route>
             <Route path= '/booking' element ={<Bookings/>} ></Route>
             <Route path = '/cart' element= {<CartDetails/>}></Route>     
             <Route path='/booking-details' element={<BookingDetails/>}></Route>
             <Route path='/confirmation'element={<Confirmation/>} ></Route>
    </Routes> 
            <Footer/>
     </CardProvider>
    </>
   
  );
};

export default App
