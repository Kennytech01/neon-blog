import React, { useState, useEffect } from 'react'
import PageData from './PageData'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import { Aside } from './Aside'

export const PageDetails = () => {
  const [visible, setVisible] = useState(4)
  // const [aside, setAside] = useState([])

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
    <div className=' flex justify-center items-cente relative'>
      <div className='md:m-10 w-2/3 md:w-full flex flex-col overflow-y-scroll scroll-smooth no-scrollbar'>
        {
          PageData?.slice(0,visible).map((pages, id) => (
            <div key={id} className='md:h-80 h-96 md:flex w-full justify-center items-center my-10 rounded-xl shadow-inner bg-stone-100'>
              <div className='relative md:w-2/3 lg:w-1/2 my-2'>
                <img src={pages.image} alt="image" className='rounded-xl object-cover h-40 w-full'/>
              </div>
              <div className=' md:w-2/3 m-auto'>
                <div className='list-disc flex flex-wrap '>
                  { pages.type1? (<span className='font-light bg-stone-200 rounded-full mx-2 p-2 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{pages?.type1}</span>) : null}
                  { pages.type2? (<span className='font-light bg-stone-200 rounded-full mx-2 p-2 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages?.type2}</span>) : null}
                  { pages.type3? (<span className='font-light bg-stone-200 rounded-full mx-2 p-2 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages?.type3}</span>) : null}
                </div>
                <p className='md:py-4 p-2'><a className='md:text-2xl hover:cursor-pointer px-1 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>{pages.header}</a></p>
                <p className='sm:tracking-wide sm:p-3 p-1 text-stone-600 detail font-thin'>{truncateString(pages?.details, 90)}</p>
                <p className="font-light text-stone-500 text-sm flex ">
                  <span className="pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{pages?.date}</span>
                  <span className="px-4 flex justify-center items-center"><TfiTime className="m-1"/>{pages?.time}</span>
                </p>
              </div>
            </div>
          ))
        }
        <div className=' m-auto flex justify-center items-center p-2'>
          {PageData.length %12 && <button onClick={ShowMore} className='bg-[#EC094D] text-stone-100 p-3 px-5 rounded-full hover:bg-[#e4c5ce] font-bold hover:scale-110 shadow-inner ease-in duration-200'>Load More</button>}
        </div>
      </div>
      {/* Sidebar */}
        <Aside {...state}/>
    </div>
  )
}
