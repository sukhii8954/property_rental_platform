import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userAuth } from '../Contexts/AuthContext';
import Logo from '../Images/Logo.png'


const Navbar = ({ isUser, isAdmin }) => {
const navigate = useNavigate();
const {logout} = userAuth();

 const handleLogout = ()=> {
  //   clearing the user details related to login 
    logout();
  // redirecting to login page
  navigate('/login');
 }
  return (
    <nav className='flex justify-between items-center px-[1rem] py-[2rem] bg-[#333] text-white'>
      <div className='flex items-center'>
        <img src={Logo} alt="website-logo" className='w-20 h-20 rounded-full object-cover' />
      </div>
      <ul className='list-none flex gap-6 md:flex-row flex-col md:items-center'>
        <li className='m-0'>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')} >
            Home
          </NavLink>
        </li>
        {isUser ? (
          <>
            {isAdmin && (
              <li className="m-0">
                <NavLink 
                  to= '/admin'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Admin Panel
                </NavLink>
              </li>
            )}
            <li className="m-0">
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="m-0">
            <button 
                onClick={handleLogout} 
                className="text-white hover:text-gray-300">
                Logout
              </button>
            </li>
          </>
        ) : (   // if condition is false then this block renders
          <>
          <li className="m-0">
            <NavLink 
              to="/login" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Login
            </NavLink>
          </li>
           <li className='m-0'>
            <NavLink 
             to="/signup" 
             className={({ isActive }) => (isActive ? 'active' : '')}>
              Sign Up
              </NavLink>
           </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
