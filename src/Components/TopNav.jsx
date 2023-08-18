import React, {useEffect, useState} from 'react'
import LOGO from '../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {LiaMoonSolid} from 'react-icons/lia'
import {HiMiniBars3BottomRight} from 'react-icons/hi2'
import {BsArrowDownShort} from 'react-icons/bs'
import {LiaTimesSolid} from 'react-icons/lia'
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa'


export const TopNav = () => {
    const [mobile, setMobile] = useState(false)
    const [open, setOpen ] = useState(false);
    const [search, setSearch] = useState(false)

    useEffect(()=>{
        const body = document.querySelector('body');
        body.style.overflow = mobile? 'scroll' : 'auto';
        body.style.overflow = search? 'hidden' : 'auto';
    }, [mobile,search]);
    
    
  return (
    <div id='topNav' className='max-w-[1040px] m-auto relativ'>
        <div className='bg-stone-100 z-[99] h-20 md:my-20 my-5 border flex items-center justify-between p-3 shadow-lg rounded '>
            <Link to = "/" >
                <img src={LOGO} alt="logo" className=''/>
            </Link>
            <div className='hidden lg:flex flex-wrap justify-center items-center ' >
                <NavLink 
                    to = '/features' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    Features
                </NavLink>
                <NavLink 
                    to = '/styleGuide' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    Style Guide
                </NavLink>
                <NavLink 
                    to = '/tags' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    Tags
                </NavLink>
                <NavLink 
                    to = '/author' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                    Authors
                </NavLink>
                <div className="relative" onMouseLeave={() => setOpen(false)} >
                    <button 
                        className='p-3 items-center flex hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'
                        onMouseOver={()=> setOpen(true)}>
                            More 
                            <BsArrowDownShort size={20}/>
                    </button>
                    { open? (
                        <ul className={`z-[99] absolute right-0 left-0 top-10 flex flex-col justify-center w-52 py-2 mt-2 rounded-lg shadow-xl border bg-stone-50`}>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Home post vertical</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Home post masonry</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post fullwidth</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post no sidebar</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post cover auto height</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Post with TOC</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Tag style two</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Authur style two</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Author style three</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Yearly archive</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Monthly archive</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Contact</li>
                            </NavLink>
                            <NavLink to = '/#' className= "hover:underline decoration-[#EC094D] decoration-2 underline-offset-4" >
                                <li className='flex items-center px-3 py-2 text-sm hover:bg-stone-100 m-1 rounded-lg'>Documentation</li>
                            </NavLink>
                        </ul>
                        )
                        :
                        null
                    }
                </div>
                <div className=''>
                    <button className='p-3 hover:text-[#EC094D]'>
                        <AiOutlineSearch size={20} className='hover:underline' onClick={()=>setSearch(true)} />
                    </button>
                    {
                        search? (
                            <div id='mySearch' className=' absolute top-0 right-0 left-0 h-full w-full flex mx-auto justify-center items-center' >
                                <div className='w-full h-full fixed left-0 right-0  bg-black/60 z-[999]' onClick={()=>setSearch(!search)}></div>
                                <div className='z-[999] absolute top-28 w-2/3 flex justify-start items-center bg-white h-16 rounded p-2 px-3 '>
                                    <AiOutlineSearch size={20} className=''/>
                                    <input 
                                    type="search" name="search-btn" id=""
                                    autoFocus
                                    placeholder={`Search posts,tags and authors..`} 
                                    className='ml-3 w-full h-full outline-none'
                                    />
                                </div>
                            </div>
                        )
                        :
                        null 
                    }
                </div>
                <button className='p-3'><LiaMoonSolid size={20}/></button>
                <Link to = 'signIn'>
                    <button className='p-3'>
                        Sign In
                    </button>
                </Link>
                <button 
                    className='p-2 px-3 bg-[#EC094D] text-stone-100 font-semibold rounded-full hover:scale-110 ease-out duration-200'>
                    Become member
                </button>
            </div>
            
                 {/*mobile view */}
            <div className='flex flex-cols lg:hidden'>
                <span onClick={()=> setMobile(!mobile)} className='duration-300'>
                    {mobile?<LiaTimesSolid size={30} /> : <HiMiniBars3BottomRight size={30} />}
                </span>
            </div>

        </div>
        {/* mobile view */}
        {
            mobile? (
                <div>
                    <div onClick={()=> setMobile(!mobile)} className='bg-black/60 fixed w-full h-full left-0 right-0 top-0 z-20'></div>
                    <div onMouseLeave={()=> setMobile(!mobile)} className=' duration-300 ease-in  z-[999] absolute sm:right-8 right-4  top-24 md:top-32  sm:w-[70%] w-[80%] py-2 px-5 mt-2 rounded-lg shadow-xl bg-pink-50'>
                        <ul  className={`flex flex-col justify-center h-auto overflow-y-scroll scroll-smooth no-scrollbar`}>
                            <NavLink
                                onClick={()=> setMobile(!mobile)}
                                to = '/features' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Features
                            </NavLink>
                            <NavLink 
                                onClick={()=> setMobile(!mobile)}
                                to = '/styleGuide' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Style Guide
                            </NavLink>
                            <NavLink 
                                onClick={()=> setMobile(!mobile)}
                                to = '/tags' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Tags
                            </NavLink>
                            <NavLink
                                onClick={()=> setMobile(!mobile)} 
                                to = '/author' 
                                style={
                                    ({isActive}) => {
                                    return {color: isActive? '#EC094D' : 'black'}
                                }}
                                className ="p-3 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4">
                                Authors
                            </NavLink>
                            <div >
                                <button className='p-3'><LiaMoonSolid size={20} onClick={()=> setMobile(!mobile)}/></button>
                                <button className='p-3 hover:text-[#EC094D]'>
                                    <AiOutlineSearch size={20} className='hover:underline' onClick={()=>setSearch(true)} />
                                </button>
                                {
                                    search? (
                                        <div id='mySearch' className=' fixed top-0 right-0 left-0 h-full w-full flex mx-auto justify-center items-center' >
                                            <div className='w-full h-full fixed left-0 right-0  bg-black/60' onClick={()=>setSearch(!search)}></div>
                                            <div className='z-[999] absolute top-28 w-[80%] mx-2 flex justify-start items-center bg-stone-50 md:h-16 h-12 rounded p-2 px-3 '>
                                                <AiOutlineSearch size={20} className=''/>
                                                <input 
                                                type="search" name="search-btn" id=""
                                                autoFocus 
                                                placeholder={`Search posts,tags and authors..`} 
                                                className='ml-3 w-full outline-none '
                                                />
                                            </div>
                                        </div>
                                    )
                                    :
                                    null 
                                }
                            </div>
                            <Link to = 'signIn' onClick={()=> setMobile(!mobile)}>
                                <button className='p-3'>
                                    Sign In
                                </button>
                            </Link>
                            <button 
                                onClick={()=> setMobile(!mobile)}
                                className='p-2 m-2 px-3 bg-[#EC094D] text-stone-100 font-semibold rounded-full hover:scale-95 ease-out duration-200'>
                                Become member
                            </button>
                            <div>
                                <h1 className='font-bold p-2'>Follow Us</h1>
                                <span className='flex p-2'>
                                    <FaTwitter className='m-2 text-blue-400 hover:scale-110 ease-in duration-100' size={20}/>
                                    <FaFacebookF className='m-2 text-blue-800 hover:scale-110 ease-in duration-100' size={20}/>
                                    <FaInstagram className='m-2 text-red-600 hover:scale-110 ease-in duration-100' size={20}/>
                                    <FaLinkedinIn className='m-2 text-blue-900 hover:scale-110 ease-in duration-100' size={20}/>
                                    <FaGithub className='m-2 text-black hover:scale-110 ease-in duration-100' size={20}/>
                                </span>
                            </div>   
                        </ul>
                    </div>
                </div>
                )
            :
            null
        }
    </div>
  )
}
