import React from "react";
import SliderData from "../Components/HomeSlideData";
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {WiDirectionRight, WiDirectionLeft} from 'react-icons/wi'

export const HomeSlide = () => {
// let i = 0

  return (
    <div className="max-w-[1400px] m-auto py-10 overflow-hidden bg-green-300">
        <div className="slider h-[70vh] w-full flex group relative">
          {
            SliderData.map((slide, id) => (
            
                <div  key={id} className=" group-hover:cursor-pointer slide flex flex-col md:flex-row flex-shrink-0 w-full justify-center items-center">

                  <div className="md:w-1/2 p-4">
                    <span className="font-light px-3  bg-stone-200 m-1 rounded-full">{slide.title}</span>
                    <span className="font-light px-3 p-2 bg-stone-200 m-1 rounded-full">{slide.titleOne}</span>
                    <span className="font-light px-3 p-2 bg-stone-200 m-1 rounded-full">{slide.titleTwo}</span>
                    <span className="font-light px-3  bg-stone-200 m-1 rounded-full">{slide.titleThree}</span>
                    <h1 className="text-4xl hover:cursor-pointer py-8 px-3 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">{slide.header}</h1>
                    <h3 className="tracking-wide p-3 text-stone-600 detail font-thin">{slide.details}</h3>
                    <p className="font-light text-stone-500 text-sm flex ">
                      <span className="p-2 pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{slide.date}</span>
                      <span className="p-2 px-4 flex justify-center items-center"><TfiTime className="m-1"/>{slide.time}</span>
                    </p>
                  </div>

                  <div className=" md:w-2/3 order-first md:order-2 ">
                    <p className="bg-stone-100  rounded-[2rem] md:mr-10">
                      <img src={slide.image} alt="slider" className="w-full rounded-[2rem] h-[70vh] object-cover p-4 hover:scale- ease-in duration-200" />
                    </p>
                  </div>
                </div>
            ))
          }
        </div>
        <div className="md:flex hidden justify-center items-center bg-stone-300 absolute right-10 rounded-lg shadow-inner w-30 ">
          <WiDirectionLeft size={30}/>
          <WiDirectionRight size={40}/>
        </div>
    </div>
  )
}