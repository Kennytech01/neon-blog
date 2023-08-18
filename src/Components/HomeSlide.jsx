import React, { useState, useEffect} from "react";
import SliderData from "./HomeSlideData";
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {BsArrowRightCircle,BsArrowLeftCircle} from 'react-icons/bs'
import {PiRadioButtonDuotone} from 'react-icons/pi'

export const HomeSlide = () => {
  // const [data] = useState(SliderData);
  const [activeIndex,setActiveIndex] = useState(0)

  // leftSlide 
  const slideLeft = () => {
    let Slider = document.getElementById('Slider')
    Slider.scrollLeft = Slider.scrollLeft - 300 
  }

   // RightSlide 
   const slideRight = () => {
    let Slider = document.getElementById('Slider')
    Slider.scrollLeft = Slider.scrollLeft + 300
  }

  return (
    <div className="carousel relative overflow-hidden flex flex-col justify-center items-center">
      <div id="Slider" className="inner whitespace-nowrap h-full w-full overflow-x-scroll scroll-smooth no-scrollbar relative">
        {
          SliderData.map((item, activeIndex) => {
            return (
              <div key={item.details} className="carousel-item w-full inline-flex items-center justify-center">
                {/* leftSide */}
                <div className=" w-full h-80 whitespace-normal flex flex-col justify-evenly items-start">
                  <div className='flex flex-wrap'>
                    {item.title? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{item.title}</span>) : null}
                    {item.titleOne? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{item.titleOne}</span>) : null}
                    {item.titleTwo? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{item.titleTwo}</span>) : null}
                    {item.titleThree? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-orange-400 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{item.titleThree}</span>) : null}
                  </div>
                  <h1 className="lg:text-4xl text-2xl hover:cursor-pointer sm: px-3 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">{item.header}</h1>
                  <h3 className="tracking-wide p-3 text-stone-600 detail font-normal line-clamp-3 md:line-clamp-none overflow-hidden">{item.details}</h3>
                  <p className="font-light text-stone-500 text-sm flex flex-wrap">
                    <span className="p-2 pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{item.date}</span>
                    <span className="p-2 px-4 flex justify-center items-center"><TfiTime className="m-1"/>{item.time}</span>
                  </p>
                </div> 
                {/* picture Display */}
                <div className="hidden md:flex items-center justify-center p-3 sm:flex w-full h-80 order-first md:order-2 ">
                  <img src={item?.image} alt="slider" className="w-full h-full rounded-[2rem] object-cover" />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex items-center relative justify-between px-5 w-full">
        <div>
          <BsArrowLeftCircle onClick={slideLeft} className="cursor-pointer hover:scale-95 ease-in duration-100"/>
        </div>
        <div className="indicators">
          {
            SliderData.map((item, index)=>{
              return(
                <button onClick={()=> updateIndex(index)} >
                  <span className= {`material-symbols-outlined text-xs ${index === activeIndex? '#EC940D' : 'blue'}`} >
                    radio_button_checked
                  </span>
                </button>
              )
            })
          }
          
        </div>
        <div>
          <BsArrowRightCircle onClick={slideRight} className="cursor-pointer hover:scale-95 ease-in duration-100"/>
        </div>
      </div>
    </div>
  )
}
