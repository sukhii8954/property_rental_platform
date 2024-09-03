import React from 'react'
import { userAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Contexts/Cart';

const Properties = ({property}) => {

    const {isAuthenticated} =  userAuth();
    const navigate = useNavigate();
    //   console.log(property)
    const{addToCart}  =useCart();

    const handleBookNow = () => {
       if(!isAuthenticated){
         alert('Please Login in or sign up First before to book a property!');
        navigate('/login', { state: {from : '/property-list'}});
       } else {
         navigate('/booking', {state : {property}});
       }
    }

    const handleAddToCart =()=> {
      if (!isAuthenticated) {
        alert('Please log in or sign up first before adding a property to the cart!');
        navigate('/login', { state: { from: '/property-list' } });
    } else {
        addToCart({ ...property, q: 1 });
        alert('Property added to cart!');
    }
    };

    // console.log(handleBookNow);
  return (
    <div className='border rounded-lg shadow-lg p-4 bg-white'>
       <img src= {property.image}
        alt={property.title}
        className='w-full h-48 object-cover rounded-md mb-4'
        />

        <h3 className='text-xl font-semibold mb-2'>
            {property.title}
            </h3>
        <p className="text-gray-700 mb-4">{property.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">₹{property.price}/night</span>
        <div>
          <button onClick={handleAddToCart}className='bg-green-500 text-white py-1 px-1 m-1 rounded hover:bg-green-600'>
              Add to Cart
            </button>
        <button 
        onClick={handleBookNow}
        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
            
          Book Now
        </button>
        </div>      
      </div>
    </div>
  )
}

export default Properties
