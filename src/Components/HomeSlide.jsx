import React, { useState } from "react";
import SliderData from "./HomeSlideData";
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {WiDirectionRight, WiDirectionLeft} from 'react-icons/wi'

export const HomeSlide = () => {
  const [slide, setSlide] = useState(1)

  const handleClick = { 
  }

  return (
    <div className="max-w-[1400px] overflow-hidden flex relative">
        <div className="slider m-1 flex ">
          {
            SliderData?.slice(0, slide).map((slide, id) => (
                <div  key={id} className="w-full flex md:flex-row flex-col flex-shrink-0 m-auto justify-between items-center ">
                  {/* writeUP side */}
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
        <div className="flex justify-center items-center bg-stone-300 absolute z-40 right-10 rounded-lg shadow-inner w-30 ">
          <WiDirectionLeft size={30} className="cursor-pointer"/>
          <WiDirectionRight size={40} className="cursor-pointer"/>
        </div>
    </div>
  )
}