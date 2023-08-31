import React, { useState, } from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import { Aside } from '../Pages/Aside'
import { Link} from 'react-router-dom'
import { Blog } from '../Pages/Blog'
import travel from '../assets/images/travel.jpeg'
import food from '../assets/images/food.jpeg'
import lifestyle from '../assets/images/lifestyle.jpeg'
import bag from '../assets/images/bag.jpeg'
import food2 from '../assets/images/food2.jpeg'
import health from '../assets/images/health.jpeg'
import friuts from '../assets/images/fruits.jpeg'
import PageData from './PageData'

export const PageDetails = ({ID}) => {
  const [visible, setVisible] = useState(4)
  
  const ShowMore = ()=>{
    setVisible((prev) => prev + 4)
  }


  const truncateString = (str, num) => { 
    if (str?.length > num) {
        return str.slice(0, num)+'...'
    } else {
        return str
    }
  };

  const Data = [
    {
      "id": 1,
      'location': 'page',
      'image': `${bag}`,
      'type1': 'Technology',
      'type2': 'Nature',
      'type3': 'Inspiration',
      'header': 'Bangladesh has developed plastic alternative using jute',
      'details': "Dr. Johnson, as usual, spoke contemptuously of Colley Cibber. 'It is wonderful that a man, who for forty years had lived with the great and the witty, should have acquired so ill the talents of",
      'date': 'June 18, 2023',
      'time': '3 min read'
    },
    {
      "id": 2,
      'location': 'page',
      'image': `${food2}`,
      'type1': 'Food',
      'header': 'I do not stick to rules when cooking. I rely on my imagination',
      'details': "I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to interest myself in a yellow-",
      'date': 'June 12, 2023',
      'time': '4 min read'
    },
    {
      "id": 3,
      'location': 'page',
      'image': `${health}`,
      'type1': 'health',
      'header': 'The mind and body are not separate. what affects one, affects the other',
      'details': 'His recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress. He really shouted with',
      'date': 'June 05, 2023',
      'time': '3 min read'
  }, 
  {
    "id": 4,
    'location': 'page',
    'image': `${lifestyle}`,
    'type1': 'Lifestyle',
    'header': 'Self-observation is the first step of inner unfolding',
    'details': "Mr. Branghton's house is small and inconvenient; though his shop, which takes in all the ground floor, is large and commodious. I believe I told you before, that he is a silver-smith.",
    'date': 'July 20, 2023',
    'time': '5 min read',
    'name': 'Harini Banerjee'
  },     
   {
      "id": 5,
      'location': 'page',
      'image': `${friuts}`,
      'type1': 'Food',
      'type2': 'Inspiration',
      'header': 'The secret ingredient in good food is always love',
      'details': "I am surely in the toils. Last night the Count asked me in the suavest tones to write three letters, one saying that my work here was nearly done, and that I should start for home within a few",
      'date': 'April 28, 2022',
      'time': '3 min read'
    },
    {
      "id": 6,
      'location': 'page',
      'image': `${travel}`,
      'type1': 'Travel',
      'header': 'Never let your memories be greater than your dreams',
      'details': 'Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time',
      'date': 'July 30, 2023',
      'time': '4 min read ',
      'name': 'Apurba Talukdar & Ishan Sharma'
    },
    {
      "id": 7,
      'location': 'page',
      'image': `${food}`,
      'type1': 'Food',
      'header': 'Dramatically improve your cooking using just your imagination',
      'details': 'You cannot too assiduously attend to Madame Duval herself; but I would wish you to mix as little as possible with her associates, who are not likely to be among those whose acquaintance would',
      'date': 'July 28, 2023',
      'time': '4 min read',
      'name': 'Biswajit Saha'
    },             
]

  return (
    <div className=' relative lg:mx-10 md:mx-5 mx-3 max-w-[1400px] min-h-[100vh] md:flex justify-around my-10'>
      <div className='md:w-2/3 overflow-y-scroll scroll-smooth no-scrollbar'>
        {
          PageData.slice(0, visible).map((pages) => (
            <Link to={`/blog/${pages.id}`}  element={<Blog/>} key={pages.id}>
              <div className=' md:h-80 h-auto lg:flex w-full flex flex-col justify-around lg:justify-center mb-10 items-center rounded-xl shadow-inner bg-white'>
                <div className='image relative h-1/2 flex justify-center mx-5'>
                  <img src={pages.image} alt="image" className='rounded-xl object-cover w-full '/>
                </div>
                <div className='details p-1 '>
                  <div className='list-disc flex flex-wrap '>
                    { pages.type1? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{pages?.type1}</span>) : null}
                    { pages.type2? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages?.type2}</span>) : null}
                    { pages.type3? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{pages?.type3}</span>) : null}
                  </div>
                  <p className=' px-2'><a className='lg:text-2xl hover:cursor-pointer px-1 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>{pages.header}</a></p>
                  <p className='md:tracking-wide p-2 text-sm md:text-normal text-stone-600 detail line-clamp-2 md:line-clamp-none'>{truncateString(pages?.details, 90)}</p>
                  <p className="font-light text-stone-500 text-xs flex ">
                    <span className="pl-2 px-4 flex justify-center items-center"><BsCalendarDate className="m-1"/>{pages?.date}</span>
                    <span className="px-4 flex justify-center items-center"><TfiTime className="m-1"/>{pages?.time}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))
        }
        <div className='my-10 md:my-1 m-auto flex justify-center items-center p-2'>
          {Data.length %12 && <button onClick={ShowMore} className='bg-[#EC094D] text-stone-100 p-3 px-10 rounded-full hover:bg-[#de7e9a] font-bold hover:scale-95 ease-in shadow-inner duration-200'>Load More</button>}
        </div>
      </div>
      {/* Sidebar */}
      <Aside/>
    </div>
  )
}
