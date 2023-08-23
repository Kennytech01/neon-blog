import React, { useState } from 'react'
import PageData from './PageData'
import {BsClockHistory} from 'react-icons/bs'
import {FaTwitter, FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'

export const Aside = () => {

  const truncateString = (str, num)=> {
    if (str.length > num){
      return (str.slice(0, num) + '...')
    } else{
      return (
        str
      )
    }
  }
  return (
    <div className='lg:ml-10 md:ml-5 md:w-1/3 h-full mx-auto py-3 rounded-xl border bg-stone-100 '>
      {/* featured Posts */}
      <div className='m-5'>
        <h1 className='font-bold p-5 text-lg'>Featured Posts</h1>
        {
          PageData.filter((data)=> data.id === 'featured').map((item, idx)=> (
            <div className='mb-10 sm:mx-auto ' >
              <div key={idx} className='ease-in bg-white duration-300 hover:scale-95 relative flex h-20 overflow-hidden my-3 rounded-xl'>
                <div className='w-1/4'>
                  <img src={item.image} alt="image " className='w-full h-full object-cover '/>
                </div>
                <div className='border pl-2 w-full h-full flex flex-col items-start justify-around'>
                  <h2 className='text-stone-600 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4 line-clamp-2 md:line-clamp-none'>{truncateString(item?.header,50)}</h2>
                  <p className='flex justify-start items-center text-sm font-thin'><BsClockHistory className='mx-1' />{item.time}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {/* Tags */}
      <div className='m-5'>
        <h1 className='font-bold p-2 text-lg'>Tags</h1>
        {
          PageData?.filter((data)=> data.tags === 'id').map((result, idd)=>{
            return(
              <div key={idd} >
                <div className='flex-wrap flex p-2 '>
                  <span className='bg-stone-200 p-1 m-1 rounded-full px-3 font-light'>{result?.tag1}</span>
                  <span className='bg-stone-200 p-1 m-1 rounded-full px-3 font-light'>{result?.tag2}</span>
                  <span className='bg-stone-200 p-1 m-1 rounded-full px-3 font-light'>{result?.tag3}</span>
                  <span className='bg-stone-200 p-1 m-1 rounded-full px-3 font-light'>{result?.tag4}</span>
                  <span className='bg-stone-200 p-1 m-1 rounded-full px-3 font-light'>{result?.tag5}</span>
                  <span className='bg-stone-200 p-1 m-1 rounded-full px-3 font-light'>{result?.tag6}</span>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* Latest Posts */}
      <div className='m-5'>
        <h1 className='font-bold p-5 text-lg'>Latest Posts</h1>
        {
          PageData.filter((data)=> data.id === 'latest').map((item, idx)=> (
            <div className='mb-10 sm:mx-auto' >
              <div key={idx} className='duration-100 relative flex h-20 overflow-hidden shadow my-3 rounded-xl bg-white'>
                <div className='w-1/4'>
                  <img src={item.image} alt="image " className='w-full h-full object-cover '/>
                </div>
                <div className=' p-2 w-full h-full flex flex-col items-start justify-around'>
                  <h2 className='text-stone-600 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4 line-clamp-2 md:line-clamp-none'>{truncateString(item?.header,50)}</h2>
                  <p className='flex justify-start items-center text-sm font-thin'><BsClockHistory className='mx-1' />{item.time}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {/* NewsLetter */}
      <div className='bg-[#EC094D]  rounded-lg py-10 mx-5'>
        <div className='text-center text-stone-100 mx-5'>
          <h1 className='font-bold text-2xl p-3'>News Letter</h1>
          <p className='p-2'>Get the latest posts delivered straight to your inbox.</p>
        </div>
        <form action="" method="post" className='items-center flex flex-col justify-center mx-5'>
          <div className='my-3 w-full h-10'>
            <input type="text" name="name" id="" className=' outline-none px-4 w-full h-full rounded-full p-2' placeholder='Your Name ' />
          </div>
          <div className='my-3 w-full h-10'>
            <input type="email" name="" id="" className=' outline-none px-4 w-full h-full rounded-full p-2' placeholder='Your Email ' />
          </div>
          <div className='my-3 w-full h-10 bg-stone-100 hover:bg-[#de7e9a] text-stone-700 hover:text-stone-200 duration-200  flex justify-center items-center font-bold rounded-full'>
            <button type="submit" className=' outline-none '>Subscribe</button>
          </div>
        </form>
      </div>
      {/* follow us  */}
      <div className='m-5'>
        <h1 className='font-bold p-2 py-5 text-lg'>Follow Us</h1>
        <span className='flex p-2'>
          <FaTwitter className='m-2 text-blue-400 hover:scale-110 ease-in duration-100' size={20}/>
          <FaFacebookF className='m-2 text-blue-800 hover:scale-110 ease-in duration-100' size={20}/>
          <FaInstagram className='m-2 text-red-600 hover:scale-110 ease-in duration-100' size={20}/>
          <FaLinkedinIn className='m-2 text-blue-900 hover:scale-110 ease-in duration-100' size={20}/>
          <FaGithub className='m-2 text-black hover:scale-110 ease-in duration-100' size={20}/>
        </span>
      </div>
    </div>
  )
}
