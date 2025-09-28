import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AboutImage from '../assets/about_image.png' // adjust path

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let data
      if (state === 'Sign Up') {
        data = (await axios.post(backendUrl + '/api/user/register', { name, email, password })).data
      } else {
        data = (await axios.post(backendUrl + '/api/user/login', { email, password })).data
      }

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    } catch (err) {
      toast.error('Something went wrong!')
    }
  }

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden'>
      <div className='flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden'>

        {/* Left Side - Image */}
        <div className='md:w-1/2 hidden md:block relative'>
          <img 
            src={AboutImage} 
            alt="Login" 
            className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/60 to-transparent'></div>
          <div className='absolute inset-0 flex flex-col justify-center items-start p-12 text-white'>
            <h2 className='text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg'>Welcome to PrimeCare</h2>
            <p className='text-lg md:text-2xl drop-shadow-md'>Your health, our priority. Sign up or login to book appointments easily and securely.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form 
          onSubmit={onSubmitHandler} 
          className='md:w-1/2 p-8 md:p-12 flex flex-col gap-6 bg-gray-50'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
          <p className='text-gray-500 text-base md:text-lg'>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>

          {state === 'Sign Up' && (
            <div className='w-full'>
              <label className='text-gray-700 font-medium'>Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className='mt-2 p-3 md:p-4 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-base md:text-lg'
                required
              />
            </div>
          )}

          <div className='w-full'>
            <label className='text-gray-700 font-medium'>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className='mt-2 p-3 md:p-4 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-base md:text-lg'
              required
            />
          </div>

          <div className='w-full'>
            <label className='text-gray-700 font-medium'>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className='mt-2 p-3 md:p-4 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-base md:text-lg'
              required
            />
          </div>

          <button className='w-full py-3 md:py-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg md:text-lg transition duration-300'>
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          <p className='text-gray-500 text-center text-sm md:text-base'>
            {state === 'Sign Up' 
              ? <>Already have an account? <span onClick={() => setState('Login')} className='text-blue-600 cursor-pointer underline'>Login here</span></> 
              : <>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-blue-600 cursor-pointer underline'>Sign up</span></>
            }
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
