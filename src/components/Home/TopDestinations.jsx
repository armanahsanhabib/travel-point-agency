/* eslint-disable react/prop-types */
import { useState } from 'react';
import BigImage from '../../assets/images/top-destination/big-img.png';
import Destination1 from '../../assets/images/top-destination/destination1.png';
import Destination2 from '../../assets/images/top-destination/destination2.png';
import Destination3 from '../../assets/images/top-destination/destination3.png';
import Destination4 from '../../assets/images/top-destination/destination4.png';
import Destination5 from '../../assets/images/top-destination/destination5.png';
import Destination6 from '../../assets/images/top-destination/destination6.png';
import Destination7 from '../../assets/images/top-destination/destination7.png';
import Destination8 from '../../assets/images/top-destination/destination8.png';

const TopDestinations = () => {
    const [isImageHover, setIsImageHover] = useState(false);

    const DestinationCard = (props) => {
        return (
            <div
                className='relative overflow-hidden rounded-lg'
            // onMouseEnter={() => setIsImageHover(true)}
            // onMouseLeave={() => setIsImageHover(false)}
            >
                <img
                    className={`h-auto w-full scale-[100%] hover:scale-[125%] transition-all ease-in-out duration-[0.5s]`}
                    src={props.image}
                    alt="" />
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] text-gray-50 z-10">
                    <h1 className='text-3xl text-center'>Thailand</h1>
                </div>
                {/* <div className={`absolute h-full w-full bg-purple-500 bg-opacity-[0%] hover:bg-opacity-[50%] top-0 left-0 transition-all ease-in-out duration-[0.5s]`}></div> */}
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center mb-[60px]">
                <span className="text-3xl font-bold text-purple-600 border-b-[5px] pb-3 border-b-purple-600">
                    Top Destinations
                </span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
                <div className="grid col-span-3">
                    <div
                        className='relative overflow-hidden rounded-lg'
                        onMouseEnter={() => setIsImageHover(true)}
                        onMouseLeave={() => setIsImageHover(false)}
                    >
                        <img
                            className={`h-auto w-full ${isImageHover ? "scale-[125%]" : "scale-[100%]"} transition-all ease-in-out duration-[0.5s]`}
                            src={BigImage}
                            alt="" />
                        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] text-gray-50 z-10">
                            <h1 className='text-5xl font-semibold text-center'>Thailand</h1>
                        </div>
                        <div className={`absolute h-full w-full top-0 left-0 ${isImageHover ? "bg-purple-600 bg-opacity-[50%]" : "bg-transparent bg-opacity-0"} transition-all ease-in-out duration-[0.5s]`}></div>
                    </div>
                </div>
                <div className="grid gap-5">
                    <DestinationCard image={Destination1} />
                    <div>
                        <img className="h-auto w-full rounded-lg" src={Destination2} alt="" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg" src={Destination3} alt="" />
                    </div>
                </div>
                <div className="grid gap-5">
                    <div>
                        <img className="h-auto w-full rounded-lg" src={Destination4} alt="" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg" src={Destination5} alt="" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg" src={Destination6} alt="" />
                    </div>
                </div>
                <div className="grid gap-5">
                    <div>
                        <img className="h-auto w-full rounded-lg" src={Destination7} alt="" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg" src={Destination8} alt="" />
                    </div>
                    <div className='w-full h-full'>
                        <a href="#" className='h-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 block rounded-lg text-gray-50 text-xl'>View All</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDestinations;