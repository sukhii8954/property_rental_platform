import React, { useState } from 'react'
import { useCart } from '../Contexts/Cart'
import { useLocation, useNavigate } from 'react-router-dom';

const BookingDetails = () => {

    const {clearCart} = useCart();
    const location = useLocation();
    const navigate = useNavigate();


    const [form, setForm] = useState({
        name:'',
        Email: '',
        Phone_No: '',
        CardNumber: '',
        ExpiryDate: '',
        CVV: ''
    });

    const  {property} =location.state || {};
    // console.log("recieved property data", property);

    const [errors, setErrors] = useState({
        Phone_No: '',
        CardNumber: '',
        CVV: ''
    });
    


    const handleChange = (elm) => {
        const {name, value} = elm.target;
        setForm(predata => ({
            ...predata,
            [name]: value
        }));
    };


    const validateForm = () => {
        let valid = true;
        const newErrors = { Phone_No: '', CardNumber: '', CVV: '' };

        // Phone number validation
        if (form.Phone_No.length !== 10) {
            newErrors.Phone_No = 'Phone number must be exactly 10 digits.';
            valid = false;
        }

        // Card number validation
        if (form.CardNumber.length !== 16) {
            newErrors.CardNumber = 'Card number must be exactly 16 digits.';
            valid = false;
        }

        // CVV validation
        if (form.CVV.length !== 3) {
            newErrors.CVV = 'CVV must be exactly 3 digits.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const  handleSubmit = (el) => {
        el.preventDefault();

        // handling form submission , // sending data to 
         
        if(validateForm()){

            clearCart();
    
            navigate('/confirmation');
        }


    }
                         
  return (
    <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Booking Details</h2>
        {property && (
                <div>
                    <h3 className='text-xl font-bold mb-2'>{property.title}</h3>
                    <img src={property.image} alt={property.title} className='w-1/2 h-64 mb-4' />
                    <p className='text-[20px] font-semibold mb-2'>Price: {property.price}</p>
                    <p className='text-[20px] font-semibold mb-2'>Location: {property.location}</p>
                    <p className='text-[20px] font-semibold mb-2'>Bedrooms: {property.bedrooms}</p>
                    <p className='text-[20px] font-semibold mb-4'>Amenities:</p>
                    {property.amenities && (
                        <ul className='flex-col space-y-3 font-medium text-[20px] list-disc text-violet-700 pl-6 mb-4'>
                            {property.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
            <h1 className='text-3xl px-4 py-4'>Enter Your Personal Details</h1>
          <label className='block text-gray-700 mb-2'>Name</label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='border border-gray-300 p-2 w-full rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>Email</label>
          <input
            type='email'
            name='Email'
            value={form.Email}
            onChange={handleChange}
            className='border border-gray-300 p-2 w-full rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>Phone</label>
          <input
            type='number'
            name='Phone_No'
            value={form.Phone_No}
            onChange={handleChange}
            className='border border-gray-300 p-2 w-full rounded'
            required
          />
          {errors.Phone_No && <p className='text-red-600'>{errors.Phone_No}</p>}
        </div>
        <div className='mb-4'>
            <h1 className='text-3xl p-5'>Card Details</h1>
          <label className='block text-gray-700 mb-2'>Card Number</label>
          <input
            type='number'
            name='CardNumber'
            value={form.CardNumber}
            onChange={handleChange}
            className='border border-gray-300 p-2 w-full rounded'
            required
          />
          {errors.CardNumber && <p className='text-red-500'>{errors.CardNumber}</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>Expiry Date</label>
          <input
            type='date'
            name='ExpiryDate'
            value={form.ExpiryDate}
            onChange={handleChange}
            className='border border-gray-300 p-2 w-full rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>CVV</label>
          <input
            type='number'
            name='CVV'
            value={form.CVV}
            onChange={handleChange}
            className='border border-gray-300 p-2 w-full rounded'
            required
          />
          {errors.CVV && <p className='text-red-500'>{errors.CVV}</p>}
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Confirm Booking
        </button>
      </form>
    </div>
  )
}

export default BookingDetails
