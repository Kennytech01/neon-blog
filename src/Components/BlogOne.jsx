import React, { useState } from 'react'
import nature from '../assets/images/nature.jpeg'
import PageData from './PageData'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {LiaUserEditSolid} from 'react-icons/lia'
import flower from '../assets/images/flower.png'
import flower2 from '../assets/images/flower2.png'
import viox from '../assets/images/viox.png'
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import author3 from '../assets/images/author3.png'
import travel from '../assets/images/travel.jpeg'
import { Link } from 'react-router-dom'

export const BlogOne = () => {
    // const [visible, setVisible] = useState(0)
  return (
    <div className='h-[100rem] overflow-auto no-scrollbar ' >
        <div className=''>
            <div className='bg-stone-50 rounded-xl mb-10' >
                <div className='h- text-center'>
                    <p className='h-96 group'>
                    <img src={nature} alt="image" className='group-hover:scale-95 ease-in duration-300 object-cover object-center w-full h-full rounded-[3rem] p-5'/>
                    </p>
                    <em className='hover:underline hover:text-[#EC094D] text-stone-700'>photo by Microsoft 360/unsplash</em>
                </div>
                <div className='mx-10'>
                    <span className='w-24 h-10 font-light bg-stone-200 rounded-full mx-10 sm:text-normal text-sm capitalize relative flex justify-center items-center'>
                        <span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center'></span>Nature
                    </span>
                    <h1 className='lg:text-4xl hover:cursor-pointer px-1 py-4 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>Autumn is a second spring when every leaf is a flower</h1>
                    <p className="font-light text-stone-500 flex items-center">
                        <span className='flex items-center'> <LiaUserEditSolid className='mr-1'/>Harini Banerjee</span>
                        <span className="pl-2 px-2 flex items-center"><BsCalendarDate className="m-1"/>May 2, 2023</span>
                        <span className="px-2 flex items-center"><TfiTime className="m-1"/>4 min read</span>
                    </p>
                </div>
                <div className='mx-10 py-5 text-stone-700'>
                    <p className='py-5'>She then expatiated very warmly upon the advantages I should reap from her plan; 
                        talked in a high style of my future grandeur; assured me how heartily I should despise
                        almost every body and every thing I had hitherto seen; predicted my marrying into some family
                        of the first rank in the kingdom; and, finally, said I should spend a few months in Paris, 
                        where my education and manners might receive their last polish.
                    </p>
                    <p className='py-5'>She enlarged also upon the delight she should have, in common with myself,
                        from mortifying the pride of certain people, and showing them that she was not to be slighted with impunity.
                    </p>
                    <h4 className='border-[#EC094D] border-l-4 text-xl my-10 p-2'>
                        The butterfly counts not months but moments, and has time enough. - Rabindranath Tagore
                    </h4>
                    <p>
                        In the midst of this discourse, I was relieved by a summons to tea. Madame Duval was in great spirits; but my emotion was too painful for concealment, and every body enquired into the cause. I would fain have waived the subject, but Madame Duval was determined to make it public. She told tham that she had it in her head to make something of me, and that they should soon call me by another name than that of Anville; and yet that she was not going to have the child married neither.
                    </p>
                    <div className='my-10 text-center'>
                        <p className='h-96 group'>
                            <img src={flower} alt="image" className='group-hover:scale-95 ease-in duration-300 object-cover object-center w-full h-full rounded-[3rem] p-5'/>
                        </p>
                        <em className='hover:underline underline-[#EC094D] text-stone-700'>photo by Microsoft 360/unsplash</em>
                    </div>
                    <p>
                        I could not endure to hear her proceed, and was going to leave the room; which, when Lady Howard perceived, she begged Madame Duval would defer her intelligence to some other opportunity; but she was so eager to communicate her scheme, that she could bear no delay; and therefore they suffered me to go without opposition. Indeed, whenever my situation or affairs are mentioned by Madame Duval, she speaks of them with such bluntness and severity, that I cannot be enjoined a task more cruel than to hear her.
                    </p>
                    <div>
                        <h1 className='font-bold p-4 text-xl text-black'>And the leaves came tumbling down</h1>
                        <p>I was afterwards accquainted with some particulars of the conversation by Miss Mirvan; who told me that Madame Duval informed them of her plan wih the utmost complacency, and seemed to think herself very fortunate in having suggested it; but, soon after, she accidentally betrayed, that she had been instigated to the scheme by her relations the Branghtons, whose letters, which she received today, first mentioned the proposal. She declared that she would have nothing to do with any roundabout ways, but go openly and instantly to law, in order to prove my birth, real name, and title to the estate of my ancestors.</p>
                    </div>
                    <div>
                        <h1 className='font-bold p-4 text-xl text-black'>Autumn colors</h1>
                        <p>
                            How impertinent and officious in these Branghtons, to interfere thus in my concerns! You can hardly imagine what a disturbance this plan has made in the family. The Captain, without enquiring into any particulars of the affair, has peremptorily declared himself against it, merely because it has been proposed by Madame Duval; and they have battled the point together with great violence. Mrs. Mirvan says, she will not even think, till she hears your opinion. But Lady Howard, to my great surprise, openly avows her appprobation of Madame Duval's intention; however, she will write her reasons and sentiments upon the subject to you herself.
                        </p>
                    </div>
                    <div className='h- text-center'>
                        <p className='h-96 group'>
                        <img src={flower2} alt="image" className='object-cover object-center w-full h-full rounded-[3rem] p-5 group-hover:scale-95 ease-in duration-300'/>
                        </p>
                        <em className='hover:underline hover:text-[#EC094D] text-stone-700'>photo by Microsoft 360/unsplash</em>
                    </div>
                    <p className='py-5'>
                        As to Miss Mirvan, she is my second self, and neither hopes nor fears but as I do. And as to me,-I know not what to say, nor even what to wish; I have often thought my fate peculiarly cruel, to have but one parent, and from that one to be banished for ever;-while, on the other side, I have but too well known and felt the propriety of the separation. And yet, you may much better imagine, than I can express, the internal anguish which sometimes oppresses my heart, when I reflect upon the strange indifference that must occasion a father never to make the least enquiry after the health, the welfare, or even the life of his child!
                    </p>
                    {/* ghost */}
                    <div className='border md:mx- my-5 rounded-lg flex flex-col sm:flex-row md:h-80 lg:h-72 h-auto bg-white hover:cursor-pointer'>
                        <div className='w-full md:mx-5 p-2 items-cente flex flex-col justify-center'>
                            <h2 className='font-bold text-lg text-black pt-4 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>It is during our darkest moments that we must focus to see the light</h2>
                            <p className='capitalize md:py-3 text-sm '>Mina took a growing interest in everything and I was rejoiced to see that the exigency of affairs was helping her to forget for a time the terrible experience of the night. She was very, very pale</p>
                            <p className='text-xs py-2 text-stone-600 font-bold'>Viox Surabhi Gupta</p>
                        </div>
                        <div className='h-2/3 md:h-full md:w-1/2 w-full p-3 order-first sm:order-2 group'>
                            <img src={viox} alt="image" className='rounded-lg w-full h-full object-cover group-hover:scale-95 duration-300 ease-linear' />
                        </div>
                    </div>
                    <p className='py-5'>
                        O Sir, to me the loss is nothing!-greatly, sweetly, and most benevolently have you guarded me from feeling it; but for him, I grieve indeed!-I must be divested, not merely of all filial piety, but of all humanity, could I ever think upon this subject, and not be wounded to the soul.
                    </p>
                    <p className='py-5'>
                        Again I must repeat, I know not what to wish; think for me, therefore, my dearest Sir, and suffer my doubting mind, that knows not which way to direct its hopes, to be guided by your wisdom and unerring counsel. EVELINA.
                    </p>
                </div>
            </div>
            {/* share links */}
            <div className='my-5 bg-stone-50 h-48 rounded-2xl border flex flex-col items-center justify-center'>
                <h1 className='font-bold text-xl p-3'>
                    Share this article:
                </h1>
                <span className='flex p-2 transition-transform'>
                    <FaTwitter className='m-2 text-blue-400 hover:scale-110 ease-in duration-100' size={20}/>
                    <FaFacebookF className='m-2 text-blue-800 hover:scale-110 ease-in duration-100' size={20}/>
                    <FaInstagram className='m-2 text-red-600 hover:scale-110 ease-in duration-100' size={20}/>
                    <FaLinkedinIn className='m-2 text-blue-900 hover:scale-110 ease-in duration-100' size={20}/>
                    <FaGithub className='m-2 text-black hover:scale-110 ease-in duration-100' size={20}/>
                </span>
            </div>
            {/* the Author */}
            <div className='bg-stone-100 rounded-lg border mb-5'>
                <div className='flex justify-center p-2 h-48'>
                    <div className='w-1/3 h-full group transition-all'>
                        <img src={author3} alt="image" className='w-full h-full object-cover rounded-2xl group-hover:scale-95 ease-out duration-300 '/>
                    </div>
                    <div className='w-2/3 p-3 '>
                        <p className='font-bold text-stone-700 text-lg p-2'>Harini Banerjee</p>
                        <span className='flex md:backdrop:p-2'>
                            <FaTwitter className='m-2 text-blue-400 hover:scale-110 ease-in duration-100'/>
                            <FaFacebookF className='m-2 text-blue-800 hover:scale-110 ease-in duration-100'/>
                            <FaInstagram className='m-2 text-red-600 hover:scale-110 ease-in duration-100'/>
                            <FaLinkedinIn className='m-2 text-blue-900 hover:scale-110 ease-in duration-100'/>
                            <FaGithub className='m-2 text-black hover:scale-110 ease-in duration-100'/>
                        </span>
                        <p className='text-sm line-clamp-3 lg:line-clamp-none'>
                            Harini Banerjee is award winning young blogger and content marketer. She also sings some time. Frequent traveler, cricket fan and technology enthusiast.
                        </p>
                    </div>
                </div>
            </div>
            {/* older posts */}
            <div className='rounded-lg border hover:cursor-pointer flex flex-col justify-center items-end '>
                <div className='sm:flex justify-center items-center p-2 sm:h-40  md:w-1/2 w-2/3 bg-stone-100 rounded-2xl'>
                    <div className='w-1/3 h-2/3 p-2  order-2 group transition-all'>
                        <img src={travel} alt="image" className='w-full h-full object-cover rounded-2xl group-hover:scale-95 ease-in duration-300'/>
                    </div>
                    <div className='sm:w-2/3 p- '>
                        <p className='font-bold text-stone-500 text-lg p-2 hover:underline'>older posts</p>
                        <p className='hover:underline decoration-[#EC094D] decoration-2 underline-offset-4 px-2'>
                            Never let your memories be greater than your dreams
                        </p>
                        <span className="px-2 flex items-center text-stone-500 py-2"><TfiTime className="m-1"/>4 min read</span>
                    </div>
                </div>
            </div>
            {/* you may like */}
            <div className='bg-stone-50 rounded-xl lg:h-96 my-5'>
                <h1 className='font-bold text-center text-xl p-3'>You may also like</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 transition-all sm:p-10 p-5'>
                    {
                        PageData.filter(item => item.type1 === 'Nature' ).map((item) => {
                            return (
                                <div key={item.image} className='border p-2 m-1 rounded-2xl group'>
                                    <div className='group-hover:scale-95 ease-in duration-300'>
                                        <p>
                                            <img src={item.image} alt="image" className='w-full h-full rounded-2xl' />
                                        </p>
                                        <h1 className=''>
                                            <p className='p-2'>{item.header}</p>
                                            <p className='text-stone-700'>{item.time}</p>
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* member discusion */}
            <div className='h-96 bg-stone-50 rounded-xl my-5 mb-10 '>
                <ul className='flex justify-around items-center md:p-10 p-5'>
                    <li className='font-bold md:text-3xl text-lg'>Member discusion</li>
                    <li className='text-stone-500'>0 comments</li>
                </ul>
                <div className='border-y-2 md:mx-16 mx-5 py-5  text-center text-stone-500 h-2/3 flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-bold p-2'>Start the conversation</h1>
                    <p className='p-2'>Become a member of neon to start commenting</p>
                    <form action="" method="post">
                        <button className='bg-[#EC094D] text-stone-50 p-2 rounded-xl font-bold px-3 hover:scale-95 ease-in duration-300'>Sign up now</button>
                        <p className='md:py-5 font-light p-2'>Already a member?
                            <Link to='/signin' style={{color: 'var(--button-bg)'}} className='px-2 font-bold'>SignIn</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}



