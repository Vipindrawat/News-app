import React, { useEffect } from 'react'

const About =()=> {
  
    return (

      <div className='container mx-auto mt-5 mb-20 navbar h-16 '>
        <h1 className='text-6xl my-10 font-bold px-7 text-gray-800 pt-5'> What is V-News?</h1>
        <p className='text-2xl my-5 font-serif px-7 text-gray-700'>V-News is a news web Application which feeds data(news) from news api and shows to user. </p>
        <p className='text-2xl my-5 font-serif px-7 text-gray-700'>News api is a free platform which provides us with free api with some endpoints to access information related to news written by different authors.</p>
        <p className='text-2xl my-5 font-serif px-7 text-gray-700'>V-News allow us to choose the category of the news according to our interest.
          There are total of 7 categories of news-General category,Business Category,Sports category,Entertainment Category,Health Category,Science category,Technology Category.
        </p>
        <p className='text-2xl my-5 font-serif px-7 text-gray-700'>
          V-News also provide option like Read More to read more information related to any particular news from category. 
        </p>
        <p className='text-2xl my-5 text-red-500 font-serif px-7 '>We will continue to make changes in  V-news in future ,if required  ..Hope you enjoy using V-News</p>
        <p className="px-7 text-gray-700">Thank you ...</p>
      </div>
    )
}

export default About;
