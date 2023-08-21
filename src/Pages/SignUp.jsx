import React from 'react'
import LOGO from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import {WiDirectionLeft} from 'react-icons/wi'

export const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full my-2'>
      <div className='md:w-1/3 sm:w-2/3 w-[90%] mx-1/2'>
        <div className='flex justify-center items-center p-2'>
          <button 
            className='p-2 bg-white border px-3 flex items-center justify-centerg5t font-semibold rounded-full hover:scale-95 ease-out duration-200'>
            <WiDirectionLeft size={20}/>
            back to home
          </button>
        </div>
        <div className='bg-white rounded-xl w-full text-center shadow-xl border'>
          <p className='p-5 flex justify-center'><img src={LOGO} alt="logo" /></p>
          <h1 className='font-bold text-3xl p-5 text-cente'>Sign up!</h1>
          <h4 className='sign text-lg p-2 text-center'>Get access to members only content.</h4>
          <div className='mx-5'>
            <form action="" method="post" >
              <div className='p-2'>
                <input type="text" name="" id="" className='w-full border p-3 rounded-full outline-none' autoFocus placeholder='Your name' />
              </div>
              <div className='p-2'>
                <input type="email" name="" id="" className='w-full border p-3 px-3 rounded-full outline-none' placeholder='Your email address' />
              </div>
              <div className='p-3 flex justify-center  '>
                <button type="submit" value='submit' className='submit w-full p-3 font-semibold rounded-full hover:scale-95 ease-out duration-200'>Send login link</button>
              </div>
            </form>
          </div>
          <p className='p-5'>
            Already have an account? <Link to='/signin' style={{color: 'var(--button-bg)'}}>signIn</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
