import React from 'react'
import { Aside } from '../Components/Aside'
import { BlogOne } from '../Components/BlogOne'

export const BlogPages = () => {
  return (
    <div className='relative lg:mx-10 md:mx-5 mx-3 max-w-[1400px] min-h-[100vh] md:flex justify-around my-10'>
      <div className='md:w-2/3'>
        <BlogOne id ="1"/>
        {/* <BlogOne id ="2"/> */}
      </div>
      <Aside/>
    </div>
  )
}
