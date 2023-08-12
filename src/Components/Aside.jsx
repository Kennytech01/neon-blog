import React, { useState } from 'react'
import PageData from './PageData'

export const Aside = (props) => {

    console.log('this is a proping details',props)


  return (
    <div className='md:w-[50%] h-60 rounded-xl border bg-stone-100 shadow-inner mr-5 my-20 '>
        <div>
            <h1 className='font-bold p-3 text-xl'>Featured Posts</h1>
            <div>
                <h2 className='bg-blue-500'>{props.time}</h2>
            </div>
        </div>
    </div>
  )
}
