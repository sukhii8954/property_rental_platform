import React, { useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import PropertyList from '../Components/PropertyList';
import CardIcon from '../Components/CardIcon';




const Home = () => {
   const [props,api] = useSpring (() =>({
    opacity: 0,
    transform: 'translateY(-20px)',
    config: {mass: 5 ,tension: 500, friction: 12},
   }));

   useEffect (()=> {
    api.start({opacity: 1 , transform: 'translateY(0)'});
   }, [api]);
     

   

   const handleGetButton = () => {
    const element = document.getElementById('properties');
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
   };
  return (
    <>
    <div className=' flex-col justify-center items-center p-0 sm:py-2 h-[350px] sm:h-[300px] bg-gray-400  sm:bg-gray-400'>
        <h1 className='text-4xl py-3 font-bold text-center' >welcome to PropertyRental</h1>
       <div className='flex-col items-center text-center'>
       <animated.p className=" animated-paragraph text-lg font-medium text-[#720202] m-4  mx-auto flex-wrap w-1/2" style={props}>
        Your one-stop solution for renting properties online. Whether you're looking for a new apartment or want to rent out your property, we have you covered.
      </animated.p>
      <button onClick= {handleGetButton} className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all duration-300">
        Get Started
      </button>
       </div>
        <div className='py-10'>
          <CardIcon/>
        </div>
    </div>

    <div className="mt-8">
            <PropertyList/>
         </div>
    </>

  )
}

export default Home
