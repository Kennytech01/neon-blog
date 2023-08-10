import React, { useState } from 'react'
import PageData from '../Components/PageData'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {PiDotDuotone} from 'react-icons/pi'

export const PageDetails = () => {
  const [visible, setVisible] = useState(4)

  const Showmore = ()=>{
    set
  }
  return (
    <div className=' m-auto flex flex-cols-2 justify-center items-cente'>
      <div className='m-10 overflow-y-scroll  scroll-smooth no-scrollbar'>
        {
          PageData?.slice(0,visible).map((pages, id) => (
            <div key={id} className='flex flex-shrink-0 w-full p-5 my-10 rounded-xl bg-stone-100  shadow-inner'>
              <div className=''>
                <img src={pages.image} alt="image" className='rounded-xl h-full w-full  object-cover ' />
              </div>
              <div className='pl-4'>
                <div className='list-disc flex flex-shrink-0 '>
                  { pages.type1? (<span className='font-light bg-stone-200 rounded-full mx-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{pages.type1}</span>) : null}
                  { pages.type2? (<span className='font-light bg-stone-200 rounded-full mx-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages.type2}</span>) : null}
                  { pages.type3? (<span className='font-light bg-stone-200 rounded-full mx-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages.type3}</span>) : null}
                </div>
                <p className='py-4'><a className='text-3xl hover:cursor-pointer py-5 px-3 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>{pages.header}</a></p>
                <p className='tracking-wide p-3 text-stone-600 detail font-thin'>{pages.details}</p>
                <p className="font-light text-stone-500 text-sm flex ">
                  <span className="p-2 pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{pages.date}</span>
                  <span className="p-2 px-4 flex justify-center items-center"><TfiTime className="m-1"/>{pages.time}</span>
                </p>
              </div>
            </div>
          ))
        }
        <div className=' m-auto flex justify-center items-center p-2'>
          <button onClick={ShowMore} className='bg-[#EC094D] text-stone-100 p-3 px-5 rounded-full hover:bg-[#e4c5ce] font-bold hover:scale-110 shadow-inner ease-in duration-200'>Load More</button>
        </div>
      </div>
      {/* Sidebar */}
      <div className='w-[80%] rounded-xl bg-stone-100 shadow-inner m-10'>Helo </div>
    </div>
  )
}
