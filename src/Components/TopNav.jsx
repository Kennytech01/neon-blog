import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {LiaMoonSolid} from 'react-icons/lia'

export const TopNav = () => {
  return (
    <div className='h-20 m-10 rounded shadow-lg  border'>
        <div className='flex flex-wrap justify-between items-center p-3 '>
            <div>
                <Link to = "/" className='flex'>
                    <img src={logo} alt="logo" className='w-20 ' />
                    <h1 className='text-4xl font-semi-bold'>neon</h1>
                </Link>
            </div>
            <div className='flex justify-center items-center ' >
                <NavLink 
                    to = '/features' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-5">
                    Features
                </NavLink>
                <NavLink 
                    to = '/styleGuide' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-5 ">
                    Style Guide
                </NavLink>
                <NavLink 
                    to = '/tags' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-5">
                    Tags
                </NavLink>
                <NavLink 
                    to = '/Authors' 
                    style={
                        ({isActive}) => {
                        return {color: isActive? '#EC094D' : 'black'}
                    }}
                    className ="p-5">
                    Authors
                </NavLink>
                <button className='p-5'>More</button>
                <button className='p-5'><AiOutlineSearch size={20}/></button>
                <button className='p-5'><LiaMoonSolid size={20}/></button>
                <Link to = 'signIn'>
                    <button className='p-5'>
                        Sign In
                    </button>
                </Link>
                <button className='p-2 px-3 bg-[#EC094D] text-stone-100 rounded-full hover:scale-110 ease-out duration-200'>
                    Become member
                </button>
            </div>
        </div>
    </div>
  )
}
