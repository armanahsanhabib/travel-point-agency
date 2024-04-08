/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaBuilding, FaBus, FaGlobe, FaHotel, FaPassport, FaPlaneArrival, FaPlaneDeparture, FaPlaneUp, FaShip } from 'react-icons/fa6';
import { TbArrowsLeftRight } from 'react-icons/tb';

const SearchOption = (props) => {
    const [selectedWay, setSelectedWay] = useState("Oneway");

    const searchCategoryList = [
        { icon: FaPlaneUp, category: "Flights" },
        { icon: FaGlobe, category: "Tours" },
        { icon: FaHotel, category: "Hotels" },
        { icon: FaPassport, category: "Visa" },
        { icon: FaBuilding, category: "Apartments" },
        { icon: FaBus, category: "Bus" },
        { icon: FaShip, category: "Cruise" }
    ];

    const SearchCategory = (props) => {
        return (
            <button
                className={`${props.searchCategory === props.category ? "bg-purple-600 text-gray-50" : "text-gray-800"} py-2 px-4 rounded-[6px] border-[1px] border-purple-600 flex items-center gap-x-2 font-semibold`}
                onClick={props.handleSearchCategoryClick}
            >
                <props.icon /> {props.category}
            </button>
        );
    }

    return (
        <div className="relative">
            <div className="max-w-[1280px] bg-gray-50 absolute left-[50%] bottom-[50%] -translate-x-[50%] translate-y-[50%] container shadow-lg rounded-xl p-8 flex flex-col gap-y-6">
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-x-5">
                        {searchCategoryList.map((item, index) => (
                            <SearchCategory
                                icon={item.icon}
                                category={item.category}
                                key={index}
                                searchCategory={props.searchCategory}
                                handleSearchCategoryClick={() => props.handleSearchCategoryClick(item.category)}
                            />
                        ))}
                    </div>
                    {props.searchCategory === "Flights" &&
                        <ul className='flex gap-x-5 font-semibold text-lg'>
                            <li
                                className={`${selectedWay === 'Oneway' ? "text-purple-600" : "text-gray-800"} cursor-pointer`}
                                onClick={() => setSelectedWay("Oneway")}
                            >One Way</li>
                            <li
                                className={`${selectedWay === 'Roundtrip' ? "text-purple-600" : "text-gray-800"} cursor-pointer`}
                                onClick={() => setSelectedWay("Roundtrip")}
                            >Round Trip</li>
                        </ul>
                    }
                </div>
                {props.searchCategory === 'Flights' &&
                    <div>
                        <div className='flex items-center gap-x-5'>
                            <div className="flex gap-x-4">
                                <div className="from w-[300px] relative px-5 py-3 bg-purple-100 flex flex-col gap-y-2 rounded-lg">
                                    <h3 className='text-gray-600'>From</h3>
                                    <FaPlaneDeparture className='absolute right-[40px] top-[20px] text-3xl' />
                                    <input className='bg-transparent text-2xl font-semibold focus:outline-none' value={"New York"} />
                                    <h3 className='text-gray-800 text-sm'>JFK - John F. Kennedy International...</h3>
                                </div>
                                <div className="arrows relative">
                                    <div className="absolute left-[50%] bottom-[50%] -translate-x-[50%] translate-y-[50%] rounded-full p-3 bg-purple-100 text-purple-600 outline text-3xl outline-gray-50 z-[2]">
                                        <TbArrowsLeftRight />
                                    </div>
                                </div>
                                <div className="to w-[300px] relative px-5 py-3 bg-purple-100 flex flex-col gap-y-2 rounded-lg">
                                    <h3 className='text-gray-600'>To</h3>
                                    <FaPlaneArrival className='absolute right-[40px] top-[20px] text-3xl' />
                                    <input className='bg-transparent text-2xl font-semibold focus:outline-none' value={"London"} />
                                    <h3 className='text-gray-800 text-sm'>LCY, London city airport</h3>
                                </div>
                            </div>
                            <div className="date relative px-5 py-3 bg-purple-100 flex justify-between w-[800px] rounded-lg">
                                <div className='flex flex-col gap-y-2'>
                                    <h3 className='text-gray-600'>Journey Date</h3>
                                    <input
                                        type='date'
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                    />
                                    <h3 className='text-gray-800 text-sm'>Thursday</h3>
                                </div>
                                {selectedWay === 'Roundtrip' &&
                                    <div className='flex flex-col gap-y-2'>
                                        <h3 className='text-gray-600'>Return Date</h3>
                                        <input
                                            type='date'
                                            className='bg-transparent text-2xl font-semibold focus:outline-none'
                                        />
                                        <h3 className='text-gray-800 text-sm'>Saturday</h3>
                                    </div>
                                }
                            </div>
                            <div className="passenger w-[220px] px-5 py-3 bg-purple-100 flex flex-col gap-y-2 rounded-lg">
                                <h3 className='text-gray-600'>Passenger, class</h3>
                                <input className='bg-transparent text-2xl font-semibold focus:outline-none' value={1} />
                                <h3 className='text-gray-800 text-sm'>Economy</h3>
                            </div>
                        </div>
                    </div>
                }
                {(props.searchCategory === 'Tours' || props.searchCategory === 'Hotels' || props.searchCategory === 'Apartments') &&
                    <div>
                        <div className='flex items-center gap-x-5'>
                            <div className="flex gap-x-4">
                                <div className="from w-[630px] relative px-5 py-3 bg-purple-100 flex flex-col gap-y-2 rounded-lg">
                                    <h3 className='text-gray-600'>Destination</h3>
                                    <input
                                        type='text'
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                        placeholder='Where are you going?'
                                    />
                                    <h3 className='text-gray-800 text-sm'>Where are you going?</h3>
                                </div>
                            </div>
                            <div className="date relative px-5 py-3 bg-purple-100 flex justify-between w-[800px] rounded-lg">
                                <div className='flex flex-col gap-y-2'>
                                    <h3 className='text-gray-600'>Journey Date</h3>
                                    <input
                                        type='date'
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                    />
                                    <h3 className='text-gray-800 text-sm'>Thursday</h3>
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <h3 className='text-gray-600'>Return Date</h3>
                                    <input
                                        type='date'
                                        className='bg-transparent text-2xl font-semibold focus:outline-none'
                                    />
                                    <h3 className='text-gray-800 text-sm'>Saturday</h3>
                                </div>
                            </div>
                            <div className="passenger w-[220px] px-5 py-3 bg-purple-100 flex flex-col gap-y-2 rounded-lg">
                                <h3 className='text-gray-600'>Passenger, class</h3>
                                <input className='bg-transparent text-2xl font-semibold focus:outline-none' value={1} />
                                <h3 className='text-gray-800 text-sm'>Economy</h3>
                            </div>
                        </div>
                    </div>
                }
                <div className='flex justify-center'>
                    <button className='bg-purple-600 hover:bg-purple-700 text-gray-50 text-xl font-semibold py-2 px-8 rounded-lg'>
                        Search
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SearchOption;