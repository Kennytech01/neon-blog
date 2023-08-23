import React, { useState } from 'react'
import {FaTwitter, FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {WiDirectionUp} from 'react-icons/wi'
import PageData from '../Components/PageData'
import {BsClockHistory} from 'react-icons/bs'



export const Footer = () => {
    
    const truncateString = (str, num) => {
        if (str?.length > num){
            return( str.slice(0, num)+'...')
        } else{
            return str
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
  return (
    <div className='bg-stone-300/30'>
        <div className='grid md:grid-cols-3 grid-cols-1 p-3 gap-8'>
            {/* News letter */}
            <div>
                <h1 className='font-bold p-2 text-lg'>New Letter</h1>
                <p className='p-3 py-5'>Get the latest posts delivered straight to your inbox.</p>
                <div className='border h-12 bg-blue-200 flex justify-between items-center rounded-full '>
                    <input type="search" name="" placeholder='Your email address' className='outline-none w-full h-full rounded-l-full p-3' />
                    <button type="submit" className='p-2 bg-[#EC094D] rounded-r-full text-stone-100 h-full hover:scale-95 ease-in duration-100'>Subscribe</button>
                </div>
                <div>
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
            {/* Latest Posts */}
            <div className=''>
                <h1 className='font-bold p-2 text-lg'>Latest Posts</h1>
                <div>
                    {
                        PageData.filter((show)=> show.id === 'footer').map((item, idx)=> (
                            <div key={idx} >
                                <div className=' duration-100 relative flex h-20 overflow-hidden bg-stone-100 shadow-inner my-3 rounded-xl'>
                                    <div className='w-1/4'>
                                        <img src={item.image} alt="image " className='w-full h-full object-cover '/>
                                    </div>
                                    <div className=' p-2 w-full h-full flex flex-col items-start justify-around'>
                                        <h2 className=' hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>{truncateString(item?.header,50)}</h2>
                                        <p className='flex justify-start items-center text-sm font-thin'><BsClockHistory className='mx-1' />{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Tags */}
            <div className=''>
                <h1 className='font-bold p-2 text-lg'>Tags</h1>
                {
                    PageData?.filter((data)=> data.tags === 'id').map((result, idd)=>{
                        return(
                            <div key={idd} >
                                <div className='flex-wrap flex p-2 '>
                                    <span className='bg-stone-100 p-2 m-1 rounded-full px-3 font-light'>{result?.tag1}</span>
                                    <span className='bg-stone-100 p-2 m-1 rounded-full px-3 font-light'>{result?.tag2}</span>
                                    <span className='bg-stone-100 p-2 m-1 rounded-full px-3 font-light'>{result?.tag3}</span>
                                    <span className='bg-stone-100 p-2 m-1 rounded-full px-3 font-light'>{result?.tag4}</span>
                                    <span className='bg-stone-100 p-2 m-1 rounded-full px-3 font-light'>{result?.tag5}</span>
                                    <span className='bg-stone-100 p-2 m-1 rounded-full px-3 font-light'>{result?.tag6}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {/* last div */}
        <div className='flex flex-wrap justify-between items-center p-3 py-5'>
            <div className='p-2' >© 2023 Neon - All right Reserved. Proudly Published with Ghost</div>
            <div onClick={scrollToTop} className='flex justify-center items-center p-2 cursor-pointer '>
                <WiDirectionUp/>    
                back top top    
            </div>
        </div>
    </div>
  )
}

