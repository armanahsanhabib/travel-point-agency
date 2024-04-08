import HeroImg from '../../assets/images/bg-image.png';
import Header from './Header';
import HeaderTop from './HeaderTop';

const Hero = () => {
    return (
        <div
            className="relative w-full h-[800px]"
            style={{
                backgroundImage: `url(${HeroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="absolute top-0 left-0 w-full">
                <HeaderTop />
                <Header />
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='text-gray-50 text-center'>
                    <h1 className='text-7xl font-bold box-shadow mb-3'>Explore the world together</h1>
                    <h2 className='text-3xl'>Find awesome flights, hotel, tour, car and packages</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;