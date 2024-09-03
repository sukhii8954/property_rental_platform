import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminPanel = ({isAdmin}) => {
    if(!isAdmin){
        return <Navigate to='/' />
    }
  return (
    <>
     <div className='flex justify-center items-center h-96 bg-gray-500'>
        <h1 className='text-3xl font-medium'>Admin Panel</h1>
    </div>
    </>
  )
}

export default AdminPanel
