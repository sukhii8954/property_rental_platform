import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Contexts/Cart';

const CheckOut = () => {

   
        const {cart} = useCart();
        const navigate = useNavigate();
       
        const totalCost = cart.reduce((acc, item) => {

            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.q, 10) || 0;
            return acc + (price * quantity); 
        },0);


        const handleProceed = () => {
            navigate('/booking-details')
        };

     
  return (
    <div>
        <h2></h2>
        {cart.length === 0 ? (
            <p></p>
        ) : (
            <div>
                {cart.map(item => (
                    <div key ={item.id} className=''>
                        <div>
                        <h3>{item.title}</h3>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.q}</p>
                        </div>
                        <div className='text-right'>
                         <p>Total: ₹{(item.price * item.q).toFixed(2)}</p>
                     </div>
                    </div>    
                ))}
               <div className='mt-4 text-xl font-bold'>
            Grand Total: ₹{totalCost.toFixed(2)}
            </div>
          <button 
            onClick={handleProceed}
            className='bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600'>
            Proceed to Booking Details
          </button>
        </div>     
        )}
    </div>
  );
};

export default CheckOut
