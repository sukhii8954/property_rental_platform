import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Contexts/Cart';
const CardIcon = () => {

    const {cart} = useCart();
    const navigate = useNavigate();


   const handleClick = ()=> {
    navigate('/cart');
   };


  return (
    <div className='flex top-4 right-4 cursor-pointer' onClick={handleClick}>
         <div className='relative'>
            <span className='text-3xl'>🛒</span>
            {cart.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs'>
                {cart.length}
            </span>
            )}
         </div>
    </div>
  )
}

export default CardIcon
