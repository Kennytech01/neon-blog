import React, {useState} from 'react'
import LOGO from '../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {LiaMoonSolid} from 'react-icons/lia'
import {HiMiniBars3BottomRight} from 'react-icons/hi2'
import {BsArrowDownShort} from 'react-icons/bs'


export const TopNav = () => {
    const [nav, setnav] = useState(false)
    const [open, setOpen ] = useState(false);
    const [search, setSearch] = useState(false)

    
    
    
  return (
    <div id='topNav' className='max-w-[1040px] m-auto'>
        <div className='bg-stone-100 z-[999] h-20 my-20 border flex items-center justify-between p-3 shadow-lg rounded '>
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
                        <ul className={`absolute right-0 left-0 top-10 flex flex-col justify-center w-52 py-2 mt-2 rounded-lg shadow-xl border bg-stone-50`}>
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
                <div >
                    <button className='p-3 hover:text-[#EC094D]'>
                        <AiOutlineSearch size={20} className='hover:underline' onClick={()=>setSearch(true)} />
                    </button>
                    {
                        search? (
                            <div className='absolute top-0 right-0 left-0 h-full w-full flex mx-auto justify-center items-center' >
                                <div className='w-full h-full absolute bg-black/40' onClick={()=>setSearch(!search)}></div>
                                <div className='z-[999] absolute top-28 w-1/2 flex justify-start items-center bg-stone-50 h-16 rounded p-2 px-3 '>
                                    <AiOutlineSearch size={20} className=''/>
                                    <input 
                                    type="search" name="search-btn" id=""
                                    required 
                                    placeholder={`Search posts,tags and authors..`} 
                                    className='ml-3 w-full outline-none text-xl font-light'
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
                <span><HiMiniBars3BottomRight size={30}/></span>
            </div>

        </div>
    </div>
  )
}
// Home post vertical
// Home post masonry
// Post fullwidth
// Post no sidebar
// Post cover auto height
// Post with TOC
// Tag style two
// Author style two
// Author style three
// Yearly archive
// Monthly archive
// Contact
// Documentation