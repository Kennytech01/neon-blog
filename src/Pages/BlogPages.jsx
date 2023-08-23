import React from 'react'
import { Aside } from '../Components/Aside'
import { Blog1 } from '../Components/Blog1'
import {Blog2} from '../Components/Blog2'
import { Blog3 } from '../Components/Blog3'

export const BlogPages = () => {
  return (
    <div className='relative lg:mx-10 md:mx-5 mx-3 max-w-[1400px] min-h-[100vh] md:flex justify-around my-10'>
      <div className='md:w-2/3'>
        {/* <Blog1 id ="1"/> */}
        {/* <Blog2 id ="2"/> */}
        <Blog3 id ="3"/>
      </div>
      <Aside/>
    </div>
  )
}
