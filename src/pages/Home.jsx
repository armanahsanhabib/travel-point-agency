import { useState } from 'react';
import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import NewsAndBlog from '../components/Home/NewsAndBlog';
import Newsletter from '../components/Home/Newsletter';
import OurPartners from '../components/Home/OurPartners';
import SearchOption from '../components/Home/SearchOption';
import TopDestinations from '../components/Home/TopDestinations';
import TourTypes from '../components/Home/TourTypes';

const Home = () => {
    const [searchCategory, setSearchCategory] = useState("Flights");

    const handleSearchCategoryClick = (category) => {
        setSearchCategory(category)
    }

    return (
        <div>
            <Hero />
            <SearchOption
                handleSearchCategoryClick={handleSearchCategoryClick}
                searchCategory={searchCategory}
            />
            <div className='mt-[250px] mb-[135px] flex flex-col gap-y-[100px]'>
                <TopDestinations />
                <TourTypes />
                <OurPartners />
                <NewsAndBlog />
                <Newsletter />
            </div>
            <Footer />
        </div>
    );
};

export default Home;