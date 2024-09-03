import React from 'react'
import { useParams } from 'react-router-dom'

const DashBoard = () => {
  const {id} = useParams();
  return (
      <>
       <div className='flex flex-col text-center justify-center items-center h-[400px] bg-gray-500'>
         <h1 className='text-3xl font-medium'>User Dashboard </h1>
         <p>Welcome to your Dashboard , user {id}!</p>
       </div>
      </>
  )
}

export default DashBoard
