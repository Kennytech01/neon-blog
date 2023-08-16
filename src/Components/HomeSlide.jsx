import React, { useState } from "react";
import SliderData from "./HomeSlideData";
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {BsArrowRightCircle,BsArrowLeftCircle} from 'react-icons/bs'

export const HomeSlide = () => {
  const [slide, setSlide] = useState(1)

  // .sort((a,b)=> a.title.localeCompare(b.title))
 
  return (
    <div className="max-w-[1400px] overflow-hidden relative my-10">
        <div className="slider m-1 flex z-20">
          {
            SliderData?.sort((a,b)=> a.date.localeCompare(b.date)).slice(0, slide).map((slide, id) => (
              <div  key={id} className="slide w-full flex md:flex-row flex-col flex-shrink-1 m-auto justify-between items-center ">
                {/* leftSide */}
                <div className="md:w-2/3 sm:p-4 m-auto">
                  <div className='flex flex-wrap'>
                    { slide?.title? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{slide?.title}</span>) : null}
                    { slide?.titleOne? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{slide?.titleOne}</span>) : null}
                    { slide?.titleTwo? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{slide?.titleTwo}</span>) : null}
                    { slide?.titleThree? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-orange-400 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{slide?.titleThree}</span>) : null}
                  </div>
                  <h1 className="sm:text-4xl text-2xl hover:cursor-pointer py-8 px-2 sm:px-3 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">{slide.header}</h1>
                  <h3 className="tracking-wide p-3 text-stone-600 detail font-thin">{slide.details}</h3>
                  <p className="font-light text-stone-500 text-sm flex ">
                    <span className="p-2 pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{slide.date}</span>
                    <span className="p-2 px-4 flex justify-center items-center"><TfiTime className="m-1"/>{slide.time}</span>
                  </p>
                </div>
                {/* picture Display */}
                <div className=" md:w-2/3 order-first md:order-2 m-auto flex justify-center items-center p-4 mx-1">
                  <p className="bg-stone-100  rounded-[2rem]">
                    <img src={slide.image} alt="slider" className=" w-full rounded-[2rem] object-cover p-2 hover:scale- ease-in duration-200" />
                  </p>
                </div>
              </div>
          ))
          }
        </div>
        <div className="flex justify-between items-center absolute bottom-0 right-10 text-stone-600">
          <BsArrowLeftCircle size={30} className="cursor-pointer hover:scale-95 ease-in duration-100"/>
          <BsArrowRightCircle size={30} className="cursor-pointer ml-3 hover:scale-95 ease-in duration-100"/>
        </div>
    </div>
  )
}