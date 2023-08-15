import React, { useState } from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
import ghost from '../assets/images/ghost.png'
import premium from '../assets/images/premium.jpg'
import {BsPencilSquare} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdKeyboardArrowUp} from 'react-icons/md'
import productCard from '../assets/images/productCard.png'
import fiveStar from '../assets/images/fiveStar.png'
import {ImStarFull} from 'react-icons/im'

export const StyleGuide = () => {
  const [toggleOne, setToggleOne] = useState(false)
  const [toggleTwo, setToggleTwo] = useState(false)

    // textInput must be declared here so the ref can refer to it 
    // cot
   
  
  return (
    <div>
      <div className='text-center font-bold text-3xl pb-10'>
        <h1 className='text-stone-700'>Styled Guide</h1>
      </div>
      {/*  */}
      <div className='md:mx-10 mx-3 text-stone-700 bg-stone-100 rounded-xl mb-24'>
        <p className='p-5 py-10 lg:mx-20 md:mx-10 first-letter:text-3xl first-letter:ml-3 first-letter:font-bold'>This page demonstrates some basic elements and typography which you will use frequently within your site. Make the text bold or make it italic. Why not bold and italic both at a time. Here is the link to Ghost website. Do you want to link a long text here how it looks in this theme.</p>
        {/* Headings */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Headings</h1>
          <p>Following is the demonstration of headings depth of h1 - h6 most of the time bloggers use heading level two to heading level four within the article.</p>
          <div className='text-black font-bold'>
            <h1 className='py-3 text-3xl'>Heading level one</h1>
            <h2 className='py-3 text-2xl'>Heading level two</h2>
            <h3 className='py-3 text-xl'>Heading level three</h3>
            <h4 className='py-3 text-lg'>Heading level four</h4>
            <h5 className='py-3 text-normal'>Heading level five</h5>
            <h6 className='py-3 text-sm'>Heading level six</h6>
          </div>
        </div>
        {/*  Paragraph of dummy text*/}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Paragraph of dummy text</h1>
          <p className='py-5'><span className='font-bold'>Lorem Ipsum</span> is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className='py-5'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        {/* Unordered list */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Unordered list</h1>
          <ul className='list-disc px-5'>
            <li className='py-2'>Nam purus magna.</li>
            <li className='py-2'>Fusce iaculis elit ut elit.</li>
            <li className='py-2'>Nunc a sapien urna..</li>
            <li className='py-2'>Ut mattis at purus in efficitur.</li>
            <li className='py-2'>Condimentum, elit mauris.</li>
            <li className='py-2'>Nulla odio dui, iaculis quis turpis in.</li>
            <li className='py-2'>Donec faucibus sagittis porta</li>
          </ul>
        </div>
        {/* Ordered list */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Ordered list</h1>
          <ul className='px-5 list-decimal'>
            <li className='py-2'>Nam purus magna.</li>
            <li className='py-2'>Fusce iaculis elit ut elit.</li>
            <li className='py-2'>Nunc a sapien urna..</li>
            <li className='py-2'>Ut mattis at purus in efficitur.</li>
            <li className='py-2'>Condimentum, elit mauris.</li>
            <li className='py-2'>Nulla odio dui, iaculis quis turpis in.</li>
            <li className='py-2'>Donec faucibus sagittis porta</li>
          </ul>
        </div>
         {/* Markdown example with child items */}
         <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Markdown example with child items</h1>
          <ul className='list-disc px-5'>
            <li className='py-2'>Sed lorem mi.</li>
            <li className='py-2'>Praesent enim justo.
              <ul className='list-disc px-5 p-2'>
                <li>Quisque vel justo.</li>
                <li>Cras nibh elit.</li>
                <li>Ut pulvinar ullamcorper.</li>
              </ul>
            </li>
            <li className='py-2'>Praesent ac urna</li>
            <li className='py-2'>Ut mattis at purus in efficitur.</li>
            <li className='py-2'>Ut suscipit venenatis rutrum.</li>
          </ul>
        </div>
        {/* Quote */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Quote</h1>
          <p>Do you know you can type a greater than symbol and space at the beginnign of any text to make it a quote in Ghost Koenig Editor similar as markdown.</p>
          <div className='my-5 border-l-4 border-[#ec094d]'>
            <p className='p-3'>We still do not know one-thousandth of one percent of what nature has revealed to us. - Albert Einstein</p>
          </div>
        </div>
        {/* Quote alternative */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Quote alternative</h1>
          <p className='p-3'>Ghost support 2 types of blockquotes. Here is the second one.</p>
          <div className='border-t-2 border-b-2 border-b-[#ec094d] my-20 flex flex-col justify-center items-center'>
            <FaQuoteLeft className='mt-5 text-[#ec094d]' />
            <p className='m-auto p-10 text-2xl'>We still do not know one-thousandth of one percent of what nature has revealed to us. - Albert Einstein</p>
          </div>
        </div>
        {/* Bookmark */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Bookmark</h1>
          <p>In ghost editor, just paste a link and it will automatically converted to bookmark card. It is awesome</p>
         {/* ghost */}
          <div className='border md:mx-10 my-5 rounded-lg flex flex-col sm:flex-row md:h-40 h-auto shadow-inner hover:cursor-pointer'>
            <div className='w-full md:mx-5 p-2 '>
              <h2 className='font-bold text-black pt-4 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>Ghost: Turn your Audience in a business</h2>
              <p className='capitalize md:py-3 text-sm '>The world most popular modern platform for creating a new media platform. Used by Apple, Skynews, Buffer, OpenAi</p>
              <p className='text-xs py-2 text-stone-600 font-bold'>Ghost:The professional Publishing platform</p>
            </div>
            <div className='h-1/2 md:h-full md:w-1/2 w-full p-3 order-first sm:order-2'>
              <img src={ghost} alt="image" className='rounded-lg w-full h-full object-cover' />
            </div>
          </div>
          <p className='text-center text-sm cursor-text'>Optional caption</p>
          {/* premiumGhost */}
          <div className='border md:mx-10 my-5 rounded-lg flex flex-col sm:flex-row md:h-40 h-auto shadow-inner hover:cursor-pointer'>
            <div className='w-full md:mx-5 p-2 '>
              <h2 className='font-bold text-black pt-4 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>Premium Ghost themes</h2>
              <p className='capitalize py-3 text-sm'>Functional and beautiful Ghost themes, easily build your amazing websites using our premium quality SEO friendly themes</p>
              <p className='text-xs py-4 text-stone-600 font-bold'>GBJ solution</p>
            </div>
            <div className='h-1/2 md:h-full md:w-1/2 w-full p-3 order-first sm:order-2'>
              <img src={premium} alt="image" className='rounded-lg w-full h-full object-cover' />
            </div>
          </div>
        </div>
        {/* callOut */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Callout</h1>
          <p>Here are some callout examples. These are useful for drawing your reader's attention.</p>
          {/* div-1 */}
          <div className=' md:m-10 mt-5 bg-pink-300/20  rounded-lg shadow'>
            <div className='flex sm:flex-row flex-col items-center justify-center md:p-4 p-2'>
              <BsPencilSquare size={30}/>
              <p className='md:pl-3 p-1'>Proin at pharetra enim, quis sagittis eros. Nulla placerat ultrices arcu a iaculis. Mauris dolor orci, vehicula quis efficitur quis, venenatis in ex. Integer est neque, volutpat id pellentesque vitae, tempor vel est.</p>
            </div>
          </div>
          {/* div-2 */}
          <div className=' md:m-10 mt-5 bg-orange-100  rounded-lg shadow'>
            <div className='flex sm:flex-row flex-col items-center justify-center md:p-4 p-2'>
              <BsPencilSquare size={30}/>
              <p className='md:pl-3 p-1'>Proin at pharetra enim, quis sagittis eros. Nulla placerat ultrices arcu a iaculis. Mauris dolor orci, vehicula quis efficitur quis, venenatis in ex. Integer est neque, volutpat id pellentesque vitae, tempor vel est.</p>
            </div>
          </div>
          {/* div-3 */}
          <div className=' md:m-10 mt-5 bg-stone-300/30  rounded-lg shadow'>
            <div className='flex sm:flex-row flex-col items-center justify-center md:p-4 p-2'>
              <BsPencilSquare size={30}/>
              <p className='md:pl-3 p-1'>Proin at pharetra enim, quis sagittis eros. Nulla placerat ultrices arcu a iaculis. Mauris dolor orci, vehicula quis efficitur quis, venenatis in ex. Integer est neque, volutpat id pellentesque vitae, tempor vel est.</p>
            </div>
          </div>
          {/* div-4 */}
          <div className=' md:m-10 mt-5 bg-emerald-400/20  rounded-lg shadow'>
            <div className='flex sm:flex-row flex-col items-center justify-center md:p-4 p-2'>
              <BsPencilSquare size={30}/>
              <p className='md:pl-3 p-1'>Proin at pharetra enim, quis sagittis eros. Nulla placerat ultrices arcu a iaculis. Mauris dolor orci, vehicula quis efficitur quis, venenatis in ex. Integer est neque, volutpat id pellentesque vitae, tempor vel est.</p>
            </div>
          </div>
        </div>
        {/* toggle */}
        <div className='p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Toggle</h1>
          {/* toggle-1  */}
          <div className='border md:m-10 mt-5' onClick={()=> setToggleOne(!toggleOne)}>
            <h1 className='flex justify-between items-center p-2 font-bold'>
              <span>What is Ghost?</span> 
              {
                toggleOne? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
              }
            </h1>
            {
              toggleOne? <p className='p-2'>Ghost is an open-source publishing platform. It is a powerful app for creators and publishers to publish, share, and grow a business around their content.</p>
              :
              null
            }
          </div>
          {/* toggle-2  */}
          <div className='border md:m-10 mt-5 rounded' onClick={()=> setToggleTwo(!toggleTwo)} >
            <h1 className='flex justify-between items-center p-2 font-bold'>
              <span>Is Ghost headless?</span> 
              {
                toggleOne? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>
              }
            </h1>
            {
              toggleTwo? <p className='p-2 duration-300'>Ghost has a very strong front-end theme system. But you can also use Ghost as a headless CMS using the power of its content API and admin API.</p>
              :
              null
            }
          </div>
        </div>
        {/* productCard */}
        <div className='p-2 md:p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Product Card</h1>
          <div className='bg-white shadow-inner border lg:mx-20 md:mx-12 rounded flex flex-col justify-center items-center'>
            <img src={productCard} alt="" className='w-full p-2' />
            <div className='md:mx-12 '>
              <p className='md:flex justify-around items-center p-2 '>
                <span className='md:text-xl text-black w-full font-bold ' >Inros - multipurpose ghost theme</span>
                <span className='flex  text-[#EC094D] p-3'>
                  <ImStarFull className='mx-1'/>
                  <ImStarFull className='mx-1'/>
                  <ImStarFull className='mx-1'/>
                  <ImStarFull className='mx-1'/>
                  <ImStarFull className='mx-1'/>
                </span>
              </p>
              <p className='text-sm text-stone-700 p-3'>Inros is a modern classic blog theme for Ghost blog/publishing platform. If you are looking for a good theme for your Ghost site then Inros is a suitable theme for your website.</p>
              <ul className='p-5 list-disc'>
                <li className='py-2'>Membership and subscription</li>
                <li className='py-2'>Light and dark version</li>
                <li className='py-2'>Content search</li>
              </ul>
              {/* submit */}
              <form action="" method="post">
                <div className='my-10 w-full h-10 bg-[#EC094D] hover:bg-[#de7e9a] text-stone-200 duration-200  flex justify-center items-center font-bold rounded-full'>
                  <button type="submit" className=' outline-none '>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* video Card */}
        <div className='p-2 md:p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Video Card</h1>
          <div className='w-full'>
            <video width="auto" height="auto" controls className='w-full h-72' >
              <source src="https://youtu.be/W_MfNQ9cv9M" type="video"/>
            </video>
          </div>
        </div>
        {/* Audio Card */}
        <div className='p-2 md:p-5 lg:mx-20 md:mx-10'>
          <h1 className='font-bold text-black text-3xl py-5'>Video Card</h1>
        </div>
      </div>
    </div>
  )
}


// https://ads.google.com/













