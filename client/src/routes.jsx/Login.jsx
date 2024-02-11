import React from 'react'
import login2Img from '../assets/login2.png'

const Login = () => {
  return (

  <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <div className='hidden sm:block'>
      <img className='w-full h-full object-cover' src={login2Img}alt="" />
    </div>

  <div className='bg-gray-200 flex flex-col justify-center'>
    <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
      <h2 className='text-4xl font-bold text-center py-6 pb-1'>WHAT'S UP DOC?</h2>
      <p className='text-2xl text-center flex justify-center pb-4'>Login</p>

      <div className='flex flex-col py-2'> 
        <label>Email</label>
        <input type="text" />
      </div>
      <div className='flex flex-col py-2'>
        <label>Password</label>
        <input type="text" />
      </div>
      <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Log In</button>
      <div className='flex justify-between'>
        <p className='flex items-center'><input mr-2 type="checkbox" />Remeber Me</p>
        <p>Create an Account</p>
      </div>
    </form>
</div> 
</div>

  )
}

export default Login