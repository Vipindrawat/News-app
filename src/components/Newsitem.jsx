import React from 'react'

const Newsitem=(props)=> {

        const { title, descrip, urlToImage ,url,author,publishedAt} = props;

        return (

            <div className="max-w-sm sm:max-w-xs md:max-w-sm max-h-full rounded overflow-hidden shadow-md bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                <img className="w-full" src={urlToImage} />
                <div className="px-6 md:py-4 pt-2">
                    <div className="font-bold md:text-xl text-sm mb-2">{title}</div>
                    <p className="text-blue-300 text-base  mb-2">
                        By : {author} on {new Date(publishedAt).toGMTString()}
                    </p>
                    <p className="text-gray-100 text-base ">
                        {descrip}
                    </p>
                </div>
                <div className="px-6 pt-1 pb-2 ">
                    <a href={url} target="_blank"><button className="bg-blue-700 hover:bg-green-700 text-white md:py-2.5 md:px-3 py-1.5 px-1.5 rounded mb-2"> Read more</button></a>
                </div>
            </div>
            
        )
    
}

export default Newsitem;
