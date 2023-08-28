import React,{useEffect, useState} from 'react'
import { Aside } from '../Components/Aside'
import { Blog1 } from '../Components/Blog1'
// import {Blog2} from '../Components/Blog2'
// import { Blog3 } from '../Components/Blog3'
// import { useParams } from 'react-router-dom'
// import { tagData } from './Tags'
// import { data } from 'autoprefixer'
// import axios from 'axios'


export function Blog() {
  // const {blogId} = useParams()

  // const [blog, setBlog] = useState({})
  
   
    // const url = `https://api.coingecko.com/api/v3/coins/${blogId}`;
    // useEffect(()=>{
    //   axios.get(url).then((res)=>{
    //     setBlog(res.data)
    //     console.log(res.data)
    //   }).catch((error)=>{
    //     console.log(error)
    //   })
    // },[])
  return (
    <div className='relative lg:mx-10 md:mx-5 mx-3 max-w-[1400px] min-h-[100vh] md:flex justify-around my-10'>
      <div className='md:w-2/3'>
        <Blog1 ID ="1"/>
        {/* <Blog2 ID ="2"/>
        <Blog3 ID ="3"/> */}
      </div>
      <Aside />
    </div>
  )
}
