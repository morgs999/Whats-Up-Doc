import React from 'react';
import login2Img from '../assets/login2.png';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={login2Img} alt="" />
      </div>

      <div className='bg-gray-200 flex flex-col justify-center'>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/profile">back to the homepage.</Link>
          </p>
        ) : (
          < form onSubmit={handleFormSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
            <h2 className='text-4xl font-bold text-center py-6 pb-1'>WHAT'S UP DOC?</h2>
            <p className='text-2xl text-center flex justify-center pb-4'>Login</p>

            <div className='flex flex-col py-2 '>
              <label>Email</label>

              <input className="border-2 border-black form-input" name="email" type="email" value={formState.email} onChange={handleChange} />

            </div>

            <div className='flex flex-col py-2'>
              <label>Password</label>

              <input className="border-2 border-black form-input" name="password" type="password" value={formState.password} onChange={handleChange} />

            </div>
            <button type="submit" className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white' style={{ cursor: 'pointer' }}>Log In</button>
            {/* <div className='flex justify-between'>
            <p className='flex items-center'><input mr-2 type="checkbox" />Remeber Me</p>
            <p>Create an Account</p>
          </div> */}
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}

      </div>
    </div >

  )
}

export default Login;