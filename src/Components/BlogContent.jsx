import React from 'react'
import { useParams,Link } from 'react-router-dom'
import nature from '../assets/images/nature.jpeg'
import {BsCalendarDate} from 'react-icons/bs'
import {TfiTime} from 'react-icons/tfi'
import {LiaUserEditSolid} from 'react-icons/lia'
import Jakob from '../assets/images/Jakob.png'
import dreamBig from '../assets/images/dreamBig.jpeg'
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import author2 from '../assets/images/author2.png'
import author1 from '../assets/images/author1.png'
import author4 from '../assets/images/author4.png'
import author5 from '../assets/images/author5.png'
import austin from '../assets/images/austin.png'
import slider5 from '../assets/images/slider5.png'
import slider3 from '../assets/images/slider3.png'
import slider4 from '../assets/images/slider4.png'
import slider2 from '../assets/images/slider2.png'
import slider1 from '../assets/images/slider1.png'
import bag from '../assets/images/bag.jpeg'
import food2 from '../assets/images/food2.jpeg'
import PageData from './PageData'

export const BlogContent = () => {
    const {id} = useParams() 

    const Data = [
        {
            id: 1,
            type1: "Technology",
            type2: "Nature",
            type3: "Health",
            header: "New tech innovation for low cost ocean cleanup",
            details: "Nearly a year later, in the month of October, London was startled by a crime of singular ferocity and rendered all the more notable by the high position of the victim. The details were few and startling. A maid servant living alone in a house not far from the river.",
            date: "Dec 14, 2021",
            time: "2 min read",
            image: `${slider1}`,
            'name': 'Biswajit Saha',
            authorImage: `${author1}`
        },
        {
            id: 2,
            location: 'page',
            image: `${food2}`,
            type1: 'Food',
            header: 'I do not stick to rules when cooking. I rely on my imagination',
            details: "I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to interest myself in a yellow-",
            date: 'June 12, 2023',
            time: '4 min read',
            name: 'Ishan Sharma',
            authorImage: `${author2}`

        }, 
        {
            id: 3,
            type2: 'Inspiration',
            type3: 'Travel',
            header: 'Never let your memories be greater than your dreams',
            details: "Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this time backed to the east, and there was a shudder amongst the watchers on",
            date: "May 2, 2022",
            time: "4 min read",
            name: 'Surabhi Gupta',
            image: `${slider3}`,
            authorImage: `${author1}`
        },
        {
            id: 4,
            type2: "Lifestyle",
            header: "Self-observation is the first step of inner unfolding",
            details: "Mr. Branghton's house is small and inconvenient; though his shop, which takes in all the ground floor, is large and commodious. I believe I told you before, that he is a silver-smith.",
            date: "May 2, 2022",
            time: "5 min read",
            name: 'Harini Banerjee',
            image: `${slider4}`,
            authorImage: `${author4}`
        },
        {
            id: 5,
            type2: 'Health',
            type3: 'Lifestyle',
            header: "All the money in the world can't buy you back good health",
            details: "My dear, it never rains but it pours. How true the old proverbs are. Here am I, who shall be twenty in September, and yet I never had a proposal till to-day, not a real proposal, and to-day I have had three. Just fancy! THREE proposals in one day! Isn't",
            date: " Oct 9, 2021",
            time: "3 min read",
            name: 'Apurba Talukdar',
            image: `${slider5}`,
            authorImage: `${author5}`
        },
        {
            id: 6,
            location: 'page',
            image: `${bag}`,
            type3: 'Technology',
            titleTwo: 'Nature',
            header: 'Bangladesh has developed plastic alternative using jute',
            details: "Dr. Johnson, as usual, spoke contemptuously of Colley Cibber. 'It is wonderful that a man, who for forty years had lived with the great and the witty, should have acquired so ill the talents of",
            date: 'June 18, 2023',
            time: '3 min read',
            name: 'Harini Banerjee',
            authorImage: `${author4}`
        },
        {
            id: 7,
            type1: "Food",
            type2: " Health",
            header: "The mind and body are not separate. what affects one, affects the other",
            details: "His recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress. He really shouted with pleasure; and, shaking Monsieur Du Bois strenuously by the hand",
            date: "Mar 28, 2022",
            time: "3 min read",
            name: 'Ishan Sharma',
            image: `${slider2}`,
            authorImage: `${author2}`
        }  
      ]

    let blog = Data.filter((data)=> data.id == id)
    blog = blog[0]
    console.log(blog)

  return (
    <div className='h-[100rem] overflow-auto no-scrollbar ' >
        <div className=''>
            <div className='bg-stone-50 rounded-xl mb-10'>
                <div className='h- text-center'>
                    <p className='h-96 group'>
                    <img src={blog.image} alt="image" className='group-hover:scale-105 ease-in duration-500 object-cover object-center w-full h-full rounded-[3rem] p-5'/>
                    </p>
                    <em className='hover:underline decoration-[#EC094D] underline-offset-2 text-stone-700 text-sm'>photo by Microsoft 360/unsplash</em>
                </div>
                <div className='md:mx-10 mx-5'>
                    <div className='list-disc flex flex-wrap '>
                        { blog.type1? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-green-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center  '></span>{blog.type1}</span>) : null}
                        { blog.type2? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-pink-500 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{blog.type2}</span>) : null}
                        { blog.type3? (<span className='font-light bg-stone-200 rounded-full mx-2 p-1 px-3 sm:text-normal text-sm capitalize relative flex justify-center items-center'><span className='bg-blue-600 rounded-full mr-1 w-2 h-2 flex justify-center items-center '></span>{blog.type3}</span>) : null}
                    </div>
                    <h1 className='lg:text-4xl hover:cursor-pointer px-1 py-4 font-bold hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>
                        {blog.header}
                    </h1>
                    <p className="font-light text-sm text-stone-500 flex items-center justify-start">
                        <span className='flex items-center'> <LiaUserEditSolid className='mr-1'/>{blog.name}</span>
                        <span className="pl-2 px-2 flex items-center"><BsCalendarDate className="m-1"/>{blog.date}</span>
                        <span className="px-1 flex items-center"><TfiTime className="m-1"/>{blog.time}</span>
                    </p>
                </div>
                <div className='md:mx-10 mx-5 py-5 text-stone-700'>
                    <p className='py-5'>Al poco tiempo el reflector descubrió a cierta distancia una goleta.
                        con todas las velas izadas, aparentemente el mismo barco que había sido visto más temprano en la noche.
                        Para entonces el viento había retrocedido hacia el este y hubo un escalofrío entre los observadores a bordo.
                        el acantilado cuando se dieron cuenta del terrible peligro en el que se encontraba ahora. Entre ella y el puerto se encontraba el gran
                        arrecife plano en el que tantos buenos barcos han sufrido de vez en cuando, y, con el viento que sopla desde su actual dirección,
                        sería completamente imposible que llegara a la entrada del puerto.
                    </p>
                    <p className='py-5'>También se explayó sobre el deleite que debería tener, en común conmigo,
                        de mortificar el orgullo de ciertas personas y mostrarles que no podía ser menospreciada impunemente.
                    </p>
                    <h4 className='border-[#EC094D] border-l-4 text-xl my-10 p-2'>
                        A mind that is stretched by a new experience can never go back to its old dimensions
                    </h4>
                    <p>
                        En medio de este discurso, me sentí aliviado cuando me invitaron a tomar el té. Madame Duval estaba de muy buen humor; pero mi emoción era demasiado dolorosa para ocultarla, y todos preguntaron por la causa. De buena gana habría renunciado al tema, pero Madame Duval estaba decidida a hacerlo público. Ella les dijo que se le había metido en la cabeza hacer algo conmigo y que pronto me llamarían con otro nombre que no fuera el de Anville; y, sin embargo, que tampoco iba a casar al niño
                    </p>
                    <div className='my-10 text-center'>
                        <p className='md:h-96 h-60 group'>
                            <img src={Jakob} alt="image" className='group-hover:scale-105 ease-in duration-500 object-cover object-center w-full h-full rounded-[3rem] md:p-5'/>
                        </p>
                        <em className='hover:underline underline-[#EC094D] text-stone-700'>photo by Microsoft 360/unsplash</em>
                    </div>
                    <p>
                        No pude soportar oírla proceder e iba a salir de la habitación; Lo cual, cuando Lady Howard se dio cuenta, rogó a Madame Duval que dejara su información para otra oportunidad; pero estaba tan ansiosa por comunicar su plan que no pudo soportar ninguna demora; y por eso me permitieron ir sin oposición. En efecto, cada vez que madame Duval menciona mi situación o mis asuntos, habla de ellos con tanta franqueza y severidad, que no se me puede encomendar tarea más cruel que escucharla.
                    </p>
                    <div>
                        <h1 className='font-bold p-4 text-xl text-black'>Y las hojas cayeron</h1>
                        <p>Después la señorita Mirvan me informó de algunos detalles de la conversación; quien me dijo que Madame Duval les informó de su plan con la mayor complacencia y parecía considerarse muy afortunada de haberlo sugerido; pero, poco después, accidentalmente reveló que había sido instigada a realizar el plan por sus parientes los Branghton, cuyas cartas, que recibió hoy, mencionaban por primera vez la propuesta. Declaró que no tendría nada que ver con ningún rodeo, sino que acudiría abierta e inmediatamente a la ley para demostrar mi nacimiento, mi verdadero nombre y el título de propiedad de mis antepasados.</p>
                    </div>
                    <div>
                        <h1 className='font-bold p-4 text-xl text-black'>Colores de otoño</h1>
                        <p>
                            ¡Qué impertinente y oficioso por parte de estos Branghton interferir así en mis preocupaciones! Difícilmente puedes imaginar el trastorno que este plan ha causado en la familia. El Capitán, sin investigar ningún detalle del asunto, se ha declarado perentoriamente en contra, simplemente porque ha sido propuesto por Madame Duval; y han luchado juntos contra el punto con gran violencia. La señora Mirvan dice que ni siquiera pensará hasta que escuche su opinión. Pero Lady Howard, para mi gran sorpresa, confiesa abiertamente su aprobación de la intención de Madame Duval; sin embargo, ella misma le escribirá sus razones y sentimientos sobre el tema.
                        </p>
                    </div>
                    <div className='h- text-center'>
                        <p className='md:h-96 h-60 group'>
                        <img src={austin} alt="image" className='object-cover object-center w-full h-full rounded-[3rem] p-5 group-hover:scale-105 ease-in duration-500'/>
                        </p>
                        <em className='hover:underline decoration-[#EC094D] text-stone-700'>photo by Microsoft 360/unsplash</em>
                    </div>
                    <p className='py-5'>
                        En cuanto a la señorita Mirvan, ella es mi segundo yo, y no tiene esperanzas ni temores, sino lo mismo que yo. Y en cuanto a mí, no sé qué decir, ni siquiera qué desear; A menudo he pensado que mi destino es particularmente cruel: tener un solo padre y ser desterrado de él para siempre; mientras que, por otro lado, he conocido y sentido demasiado bien lo apropiado de la separación. Y, sin embargo, es mucho mejor que usted se imagine de lo que yo puedo expresar la angustia interna que a veces oprime mi corazón cuando reflexiono sobre la extraña indiferencia que debe ocasionar a un padre que nunca hace la más mínima preocupación por la salud, el bienestar o incluso la vida de su hijo!
                    </p>
                    {/* ghost */}
                    <div className='border md:mx- my-5 rounded-lg flex flex-col sm:flex-row md:h-80 lg:h-72 h-auto bg-white hover:cursor-pointer'>
                        <div className='w-full md:mx-5 p-2 items-cente flex flex-col justify-center'>
                            <h2 className='font-bold text-lg text-black pt-4 hover:underline decoration-[#EC094D] decoration-2 underline-offset-4'>Es durante nuestros momentos más oscuros que debemos concentrarnos para ver la luz.</h2>
                            <p className='capitalize md:py-3 text-sm '>Mina se interesó cada vez más por todo y me alegró ver que la exigencia de las cosas la ayudaba a olvidar por un tiempo la terrible experiencia de la noche. Estaba muy, muy pálida.</p>
                            <p className='text-xs py-2 text-stone-600 font-bold'>{blog.name}</p>
                        </div>
                        <div className='h-2/3 md:h-full md:w-1/2 w-full p-3 order-first sm:order-2 group'>
                            <img src={dreamBig} alt="image" className='rounded-lg w-full h-full object-cover group-hover:scale-95 duration-300 ease-linear' />
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
                        <img src={blog.authorImage} alt="image" className='w-full h-full object-cover rounded-2xl group-hover:scale-105 ease-out duration-300 '/>
                    </div>
                    <div className='w-2/3 p-3 '>
                        <p className='font-bold text-stone-700 text-lg p-2'>{blog.name}</p>
                        <span className='flex md:backdrop:p-2'>
                            <FaTwitter className='m-2 text-blue-400 hover:scale-110 ease-in duration-100'/>
                            <FaFacebookF className='m-2 text-blue-800 hover:scale-110 ease-in duration-100'/>
                            <FaInstagram className='m-2 text-red-600 hover:scale-110 ease-in duration-100'/>
                            <FaLinkedinIn className='m-2 text-blue-900 hover:scale-110 ease-in duration-100'/>
                            <FaGithub className='m-2 text-black hover:scale-110 ease-in duration-100'/>
                        </span>
                        <p className='text-sm line-clamp-3 lg:line-clamp-none'>
                            Harini Banerjee es una joven bloguera y comercializadora de contenidos galardonada. Ella también canta algún tiempo. Viajero frecuente, aficionado al cricket y entusiasta de la tecnología.
                        </p>
                    </div>
                </div>
            </div>
            {/* older posts */}
            <div className='rounded-lg border hover:cursor-pointer flex flex-col justify-center items-end '>
                <div className='sm:flex justify-center items-center p-2 sm:h-40  md:w-1/2 w-2/3 bg-stone-100 rounded-2xl'>
                    <div className='w-1/3 h-2/3 p-2  order-2 group transition-all'>
                        <img src={nature} alt="image" className='w-full h-full object-cover rounded-2xl group-hover:scale-95 ease-in duration-500'/>
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
                <h1 className='font-bold text-center text-xl p-3'>También te puede interesar</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 transition-all sm:p-10 p-5'>
                    {
                        PageData.filter(item => item.type1 === 'Travel' ).map((item) => {
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
            <div className='h-96 bg-stone-50 rounded-xl my-5 mb-10 flex flex-col justify-center items-center'>
                <div>
                    <ul className='flex justify-between items-center p-5 w-full space-x-8'>
                        <li className='font-bold md:text-3xl text-lg'>Member discusion</li>
                        <li className='text-stone-500'>0 comments</li>
                    </ul>
                    <div className='border-y-2 mx-2 w-full text-center text-stone-500'>
                        <h1 className='text-2xl font-bold p-2'>Start the conversation</h1>
                        <p className='p-2'>Become a member of neon to start commenting</p>
                        <form action="" method="post" className='mb-4'>
                            <button className='bg-[#EC094D] text-stone-50 p-2 rounded-xl font-bold px-3 hover:scale-105 ease-in duration-500'>Sign up now</button>
                            <p className='md:py-5 font-light p-2'>Already a member?
                                <Link to='/signin' style={{color: 'var(--button-bg)'}} className='px-2 font-bold'>SignIn</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



