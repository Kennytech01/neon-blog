import React, { useState, useEffect } from 'react'
import PageData from './PageData'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import { Aside } from './Aside'
import { Link, useParams } from 'react-router-dom'
import { Blog } from '../Pages/Blog'

export const PageDetails = ({ID}) => {
  const [visible, setVisible] = useState(4)
  
  const ShowMore = ()=>{
    setVisible((prev) => prev + 4)
  }

 const  state = {
    myData:PageData
  }
  console.log(state)

  const truncateString = (str, num) => { 
    if (str?.length > num) {
        return str.slice(0, num)+'...'
    } else {
        return str
    }
  };

  return (
    <div className=' relative lg:mx-10 md:mx-5 mx-3 max-w-[1400px] min-h-[100vh] md:flex justify-around my-10'>
      <div className='md:w-2/3 overflow-y-scroll scroll-smooth no-scrollbar'>
        {
          PageData?.filter((data)=> data.location === 'page').slice(0, visible).map((pages) => (
            <Link to={`/blog/${pages.id}`}  element={<Blog />} key={pages.location}>
              <div className=' md:h-80 h-auto lg:flex w-full flex flex-col justify-around lg:justify-center mb-10 items-center rounded-xl shadow-inner bg-white'>
                <div className='image relative h-1/2 flex justify-center mx-5'>
                  <img src={pages.image} alt="image" className='rounded-xl object-cover w-full '/>
                </div>
                <div className='details p-1'>
                  <div className='list-disc flex flex-wrap '>
                    { pages.type1? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{pages?.type1}</span>) : null}
                    { pages.type2? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages?.type2}</span>) : null}
                    { pages.type3? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages?.type3}</span>) : null}
                  </div>
                  <p className=' px-2'><a className='lg:text-2xl hover:cursor-pointer px-1 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>{pages.header}</a></p>
                  <p className='md:tracking-wide p-2 text-sm md:text-normal text-stone-600 detail line-clamp-2 md:line-clamp-none'>{truncateString(pages?.details, 90)}</p>
                  <p className="font-light text-stone-500 text-xs flex ">
                    <span className="pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{pages?.date}</span>
                    <span className="px-4 flex justify-center items-center"><TfiTime className="m-1"/>{pages?.time}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))
        }
        <div className='my-10 md:my-1 m-auto flex justify-center items-center p-2'>
          {PageData.length %12 && <button onClick={ShowMore} className='bg-[#EC094D] text-stone-100 p-3 px-10 rounded-full hover:bg-[#de7e9a] font-bold hover:scale-95 ease-in shadow-inner duration-200'>Load More</button>}
        </div>
      </div>
      {/* Sidebar */}
      <Aside/>
    </div>
  )
}
