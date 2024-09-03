import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userAuth } from '../Contexts/AuthContext';

const SignUp = () => {
    const {login} = userAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
   

     const handlingSignUp = (signupkey) =>{
        signupkey.preventDefault();
        const userId = Date.now();
       const userData = { id: userId, username, email , password };


       const existingUsers = JSON.parse(localStorage.getItem('users')) || [];    
        existingUsers.push(userData);
        localStorage.setItem('users',JSON.stringify());
          existingUsers
        login(userData);
        navigate(`/`);
     };

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-700'>
      <form className='bg-white p-6 rounded shadow-md' onSubmit={handlingSignUp}>
        <h2 className='text-2xl font-bold mb-6'>Sign Up</h2>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className='mb-4 p-2 border rounded w-full'
          required
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='mb-4 p-2 border rounded w-full'
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='mb-4 p-2 border rounded w-full'
          required
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Sign Up
        </button>
      </form>
    </div>
    </>
  )
}

export default SignUp
