import React from 'react'
import {LiaCheckCircle} from 'react-icons/lia'

const data =[
    {
        id: 1,
        type:"Free",
        money: '$0',
        duration: 'forever',
        details: 'Signup to access all the free members-only posts.',
        opt1: 'Access to all free private posts',
        opt2: 'Weekly new content',
        opt3: 'Support independent publishing',
        opt4: 'No card details required',
        submit: 'Subscribe now'
    },
    {
        id: 2,
        type:"Platinum",
        money: '$9',
        duration: '/month',
        details: 'Get entry to our bi-weekly webinar and support us to continue our publishing.',
        opt1: 'Access to all premium paid posts',
        opt2: 'Weekly two new content',
        opt3: 'Support independent publishing',
        opt4: 'Get entry to our bi-weekly webinar',
        submit: 'Subscribe now'
    },
    {
        id: 3,
        type:"Gold",
        money: '$4',
        duration: '/month',
        details: 'Access paid posts and support us to continue our publishing.',
        opt1: 'Access to all paid private posts',
        opt2: 'Weekly new content',
        opt3: 'Support independent publishing',
        opt4: 'Simple, secure card payment',
        submit: 'Subscribe now'
    },
]
export const Membership = () => {
  return (
    <div>
        <div className='text-center'>
            <h1 className='font-bold text-stone-800 text-4xl p-5'>Membership</h1>
            <p className='p-5 text-lg'>Choose your subscription and unlock full access and see the entire collection of members-only content</p>
            <div className='flex items-center  text-center justify-center font-bold p-2'>
                <button className='bg-[#EC094D] text-stone-50 p-3 rounded-l-full '>Monthly</button>
                <button className='bg-stone-200/30 p-3 rounded-r-full'>Yearly</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-8 m-2'>
                {
                    data.map((item)=>{
                        return (
                            <div key={item.id} className='border rounded text-stone-700 bg-white shadow-xl'>
                                <div className='text-start border-b-2 p-5 mx-4'>
                                    <h4 className='text-lg py-3'>{item.type}</h4>
                                    <h1 className='py-3'>
                                        <span className='text-black font-bold text-4xl'>{item.money}</span>
                                        <span>{item.duration}</span>
                                    </h1>
                                    <p className='py-3'>{item.details}</p>
                                </div>
                                <div className='p-5 text-start'>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt1}</p>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt2}</p>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt3}</p>
                                    <p className='flex items-center p-2'><LiaCheckCircle className='mx-2'/>{item.opt4}</p>
                                </div>
                                <div className='m-5 hover:scale-95 duration-200 ease-in'>
                                    <button className='bg-[#EC094D] w-full rounded-full text-stone-50 p-3'>{item.submit}</button>
                                </div>
                           </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
