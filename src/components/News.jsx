import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [reloading, setReloading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalresults, setTotalresults] = useState(0);



    const datafetch = async () => {
        props.updateprogress(10);
        setReloading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pagesize=12&apiKey=${import.meta.env.VITE_apikey}&page=${page}`
        props.updateprogress(40);
        //fetching data from api--
        let data = await fetch(url);
        let jsondata = await data.json();
        props.updateprogress(80);
        setArticles(jsondata.articles);
        setReloading(false);
        setTotalresults(jsondata.totalResults);
        props.updateprogress(100);
    }

    useEffect(() => {
        document.title = `V-News- ${props.category}`;
        datafetch();
    }, []);

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pagesize=12&apiKey=${import.meta.env.VITE_apikey}&page=${page + 1}`
        let data = await fetch(url);
        let jsondata = await data.json();
        setArticles(articles.concat(jsondata.articles));
    }

    const capitalise = (value) => {
        let lower = value.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className="container py-4 mx-auto w-[100vw] mb-5 2xl:mb-10">
            <h1 className='xl:text-6xl xl:my-10 md:text-5xl md:my-8 text-5xl mb-6  text-center font-extrabold  italic text-gray-800'>V-News : Top {capitalise(props.category)} Headlines</h1>

            {reloading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length != totalresults}
                loader={<Spinner />}
            >
                <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-7 2xl:grid-cols-4">
                    {!reloading && articles.map((element) => {

                        return <Newsitem key={element.url} title={element.title} descrip={element.description} urlToImage={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author == null ? "unknown" : element.author} />
                    })}
                </div>

            </InfiniteScroll>

        </div>

    )
}

News.defaultProps = {
    country: 'in',
    category: 'sports'
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}

export default News;
