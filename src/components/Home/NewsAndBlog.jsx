/* eslint-disable react/prop-types */
// import React from 'react';
import news1 from '../../assets//images/news-and-blog/news-1.png';
import news2 from '../../assets//images/news-and-blog/news-2.png';
import news3 from '../../assets//images/news-and-blog/news-3.png';

const NewsAndBlog = () => {
    const newsData = [
        {
            id: 1,
            image: news1,
            headline: "Revolutionizing the travel industry, one partnership at a time",
            date: "24th January",
            time: "5min"
        },
        {
            id: 2,
            image: news2,
            headline: "Exploring new horizons: The future of space travel",
            date: "10th February",
            time: "8min"
        },
        {
            id: 3,
            image: news3,
            headline: "Things you must know before travel Nepal. Nepal Tour tips, tricks.",
            date: "17th March",
            time: "3min"
        }
    ];

    const NewsCard = (props) => {
        return (
            <div className="card">
                <a href="#">
                    <img
                        className='rounded-2xl w-full h-auto transition-all duration-[0.5s]'
                        src={props.image}
                        alt={props.image}
                    />
                </a>
                <div className="txt mt-4">
                    <a href="#" className=''>
                        <h2 className='text-2xl font-bold'>{props.headline}</h2>
                    </a>
                    <div className="flex gap-x-2 items-center mt-2 text-gray-500">
                        <h6>{props.date}</h6>
                        <span className='w-[8px] h-[8px] rounded-full bg-gray-300'></span>
                        <h6>{props.time} read</h6>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <div className="heading flex justify-between items-center mb-8">
                <div className="left">
                    <h2 className='text-3xl text-[#212529] font-bold mb-2'>News and Blog</h2>
                    <p className='text-lg text-[#818090]'>Nostrud aliqua ipsum dolore velit labore nulla fugiat.</p>
                </div>
                <div className="right flex gap-x-3">
                    <a href="#" className="text-lg font-semibold text-purple-600">View All</a>
                </div>
            </div>
            <div className="news grid grid-cols-3 gap-8">
                {newsData.map((data, index) => (
                    <NewsCard
                        key={index}
                        image={data.image}
                        headline={data.headline}
                        date={data.date}
                        time={data.time}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsAndBlog;