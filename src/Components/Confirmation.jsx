import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmation = () => {
    const navigate = useNavigate();

     const handleReturnToHome = () => {
        navigate('/');
     };

  return (
    <div>
       <h2>Booking Confirmed!</h2>
       <p>thank You for the Booking .We are happy to have you on our Website</p>
       <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600' onClick={handleReturnToHome}>
        Return to Home
       </button>
    </div>
  )
}

export default Confirmation
