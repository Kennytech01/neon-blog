import React from 'react'
import PageData from '../Components/PageData'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
export const PageDetails = () => {
  return (
    <div className='py-16 mx-10'>
      <div className=''>
        {
          PageData.map((pages, id) => (
            <div key={id} className='flex w-2/3 justify-cente p-5 my-16 rounded-xl bg-stone-100 h-80 shadow-inner'>
              <div className=''>
                <img src={pages.image} alt="image" className='rounded-xl h-full  object-cover ' />
              </div>
              <div className='pl-4'>
                <span className='font-light bg-stone-300 rounded-full p-2 px-4 capitalize '>{pages.type}</span>
                <p className='text-3xl hover:cursor-pointer py-5 px-3 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>{pages.header}</p>
                <p className='tracking-wide p-3 text-stone-600 detail font-thin'>{pages.details}</p>
                <p className="font-light text-stone-500 text-sm flex ">
                  <span className="p-2 pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{pages.date}</span>
                  <span className="p-2 px-4 flex justify-center items-center"><TfiTime className="m-1"/>{pages.time}</span>
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
