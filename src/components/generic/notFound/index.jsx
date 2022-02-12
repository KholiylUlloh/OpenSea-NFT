import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center w-100% h-[92.3vh] bg-gray-700 pt-[20vh]'>
        <h1 className='text-[40px] text-white'>404</h1>
        <h1 className='text-[40px] text-white mb-5'>Page Not Found</h1>
        <Link to='/' ><button className='border-1 bg-blue-300 p-2 px-3 overline-none hover:text-white rounded-xl'>Navigate to home</button></Link>
    </div>
  )
}

export default NotFound