import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

const Bookings = () => {
    const location = useLocation();
      const {property} = location.state || {}; // retriving the data of property from state
     
      if(!property){
        return <div>Property Not Found</div>;
      }
     
    //   console.log(location.state)

    //   making logic of confirming the booking of property
   const navigate = useNavigate();

    const handleConfirmBooking =() => {
      // console.log('navigating to property data:', property);
       navigate('/booking-details', {state : {property}});
    };
 
      return (
    <div className='p-4 mx-16'>
        <h1 className='text-3xl mx-48 font-bold mb-12'>{property.title}</h1>
        <img src={property.image} alt={property.title} 
        className='w-1/2 h-64 mb-4 mx-auto' 
        />
        <p className='mb-2 text-center font-semibold flex-wrap w-[450px] mx-auto leading-9 items-center '>{property.description}</p>
        <p className='text-[20px] font-semibold mb-4'>Price: {property.price}</p>
        <p className='text-[20px] font-semibold mb-2'>Location: {property.location}</p>
        <p className='text-[20px] font-semibold mb-2'> Bedrooms: {property.bedrooms}</p>
        <p className='text-[20px] font-semibold mb-4'>Amenities:</p>
        {property.amenities &&(
        <ul className=' flex-col space-y-3 font-medium text-[20px] list-disc text-violet-700 pl-6 mb-4'>
            {property.amenities.map((amenity,index)=>(
                <li key={index}>{amenity}</li>
                
            ))}
        </ul>
        )}
        <button  onClick ={handleConfirmBooking}
         className='px-4 py-2 font-serif bg-blue-500 text-[18px] text-white rounded'>
           Confirm Booking 
        </button>
      
    </div>
  )
}

export default Bookings
