import React from 'react'

export const StyleGuide = () => {
  return (
    <div>
      <div className='text-center font-bold text-3xl pb-10'>
        <h1>Styled Guide</h1>
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
          <div className='my-10 border-l-4 border-[#ec094d]'>
            <p className='p-3'>We still do not know one-thousandth of one percent of what nature has revealed to us. - Albert Einstein</p>
          </div>
        </div>
      </div>
    </div>
  )
}










