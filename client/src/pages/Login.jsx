import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { data, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {

  const {backendUrl,setIsLoggedIn,getUserData} = useContext(AppContext);

  const [state, setState] = useState('Sign Up');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (e) =>{
    try {
      e.preventDefault();
      axios.defaults.withCredentials=true
      if(state==='Sign Up'){
        const {data} = await axios.post(backendUrl+'/api/auth/register',{name,email,password})
        if(data.success){
          setIsLoggedIn(true);
          getUserData();
          navigate('/');
        }
        else{
          toast.error(data.message);
        }
      }
      else{
        const {data} = await axios.post(backendUrl + '/api/auth/login',{email,password});
        
        if(data.success){
          setIsLoggedIn(true);
          getUserData();
          navigate('/')
        }
        else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      <img src={assets.Logo} alt="Logo" className='absolute left-5 sm:left-20 top-5 w-18 sm:w-22 cursor-pointer' onClick={() => navigate('/')} />
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        <p className='text-3xl font-semibold text-white text-center mb-3'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p className='text-center text-sm mb-5'>
          {state === 'Sign Up' ? 'Create Your Account' : 'Login to your Account'}
        </p>
        <form onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
              <i className='fas fa-user text-white hover:text-blue-300' />
              <input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder='Full Name' required className='text-white outline-none' />
            </div>
          )}
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
            <i className='fas fa-envelope text-white hover:text-blue-300' />
            <input onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='Email' required className='text-white outline-none' />
          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
            <i className='fas fa-lock text-white hover:text-blue-300' />
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' required className='text-white outline-none' />
          </div>
          <p onClick={()=>navigate('/reset-password')} className='mb-4 text-indigo-400 cursor-pointer'>Forgot Password?</p>
          <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-800 cursor-pointer text-white font-medium
          '>{state}</button>
        </form>
        {state === 'Sign Up' ? (
          <p className='text-gray-400 text-center text-xs mt-4'>Already have an Account?{' '}
            <span className='text-blue-400 cursor-pointer underline' onClick={()=>setState('Login')}>
              Login Here
            </span>
          </p>
        ) : (<p className='text-gray-400 text-center text-xs mt-4'>Don't have an Account?{' '}
          <span className='text-blue-400 cursor-pointer underline' onClick={()=>setState('Sign Up')}>
            Sign Up
          </span>
        </p>)}
      </div>
    </div>
  )
}

export default Login