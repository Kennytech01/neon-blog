import React, { useState, useEffect,useRef} from "react";
import SliderData from "./HomeSlideData";
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {PiRadioButtonDuotone} from 'react-icons/pi'
import { Blog } from "../Pages/Blog";
import { Link } from "react-router-dom";

const delay = 5000;
export const HomeSlide = () => {
  const [index,setIndex] = useState(0)

  const timeoutRef = useRef(null);

  const resetTimeout = ()=> {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
 

  return (
    <div className=" relative overflow-hidden slideshow ">
      <div  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className="slideshowSlider flex inner group h-full w-full relative">
        {
          SliderData.map((item) => {
            return (
              <Link key={item.id} to = {`/blog/${item.id}`} element={<Blog/>} className="slide w-full displayItems group-hover:cursor-pointer flex-shrink-0 flex ">
                {/* leftSide */}
                <div className=" w-full h-80 whitespace-normal flex flex-col justify-evenly items-start">
                  <div className='flex flex-wrap'>
                    {item.title? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{item.title}</span>) : null}
                    {item.titleOne? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{item.titleOne}</span>) : null}
                    {item.titleTwo? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{item.titleTwo}</span>) : null}
                    {item.titleThree? (<span className='font-light bg-stone-100 rounded-full m-2 p-2 px-3 capitalize relative flex justify-center items-center'><span className='bg-orange-400 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{item.titleThree}</span>) : null}
                  </div>
                  <h1 className="lg:text-4xl text-2xl hover:cursor-pointer px-3 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">{item.header}</h1>
                  <h3 className="tracking-wide p-3 h-20 md:h-auto text-stone-600 detail font-normal line-clamp-3 md:line-clamp-none overflow-hidden">{item.details}</h3>
                  <p className="font-light text-stone-500 text-sm flex flex-wrap">
                    <span className="p-2 pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{item.date}</span>
                    <span className="p-2 px-4 flex justify-center items-center"><TfiTime className="m-1"/>{item.time}</span>
                  </p>
                </div> 
                {/* picture Display */}
                <div className="hidden md:flex items-center justify-center p-3 sm:flex w-full h-80 order-first md:order-2 ">
                  {/* <div className="p-2 bg-stone-50"> */}
                    <img src={item?.image} alt="slider" className="w-full h-full rounded-[2rem] object-cover" />
                  {/* </div> */}
                </div>
              </Link>
            )
          })
        }
      </div>
      <div className="slideshowDots text-center py-10">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ` active` : ""} rounded-full h-[10px] w-[10px] inline-block cursor-pointer bg-[#c4c4c4]`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

