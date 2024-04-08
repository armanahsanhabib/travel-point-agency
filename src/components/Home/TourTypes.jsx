/* eslint-disable react/prop-types */
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FaBriefcase, FaUmbrellaBeach } from 'react-icons/fa';
import { GiCampfire } from 'react-icons/gi';
import { MdFamilyRestroom, MdForest } from 'react-icons/md';

const TourTypes = () => {
    const tourTypesData = [
        {
            icon: GiCampfire,
            type: "Adventure Tour",
            price: "$300"
        },
        {
            icon: MdForest,
            type: "Explore Forest",
            price: "$250"
        },
        {
            icon: FaBriefcase,
            type: "Lone Travel",
            price: "$290"
        },
        {
            icon: FaUmbrellaBeach,
            type: "Beach Tour",
            price: "$125"
        },
        {
            icon: MdFamilyRestroom,
            type: "Family Tour",
            price: "$125"
        }
    ];

    const TourTypeCard = (props) => {
        return (
            <div className="rounded-xl border-[1px] p-5 text-center flex justify-center items-center">
                <div className='flex flex-col gap-y-2'>
                    <div className="icon flex justify-center text-5xl text-purple-600"><props.icon /></div>
                    <h3 className='text-xl font-semibold'>{props.type}</h3>
                    <p className='font-semibold text-[#818090]'>Package Starts from {props.price}</p>
                </div>
            </div>
        );
    }

    return (
        <div className=''>
            <div className="container mx-auto">
                <div className="top flex justify-between items-center mb-8">
                    <div className="left">
                        <h2 className='text-3xl text-[#212529] font-bold mb-2'>Tour Types</h2>
                        <p className='text-lg text-[#818090]'>Nostrud aliqua ipsum dolore velit labore nulla fugiat.</p>
                    </div>
                    <div className="right flex gap-x-3">
                        <button className='rounded-full h-[40px] w-[40px] flex justify-center items-center bg-gray-800 text-gray-50 text-2xl'><BiLeftArrowAlt /></button>
                        <button className='rounded-full h-[40px] w-[40px] flex justify-center items-center bg-gray-800 text-gray-50 text-2xl'><BiRightArrowAlt /></button>
                    </div>
                </div>
                <div className="cards-container grid grid-cols-5 gap-10">
                    {tourTypesData.map((data, index) => (
                        <TourTypeCard
                            key={index}
                            icon={data.icon}
                            type={data.type}
                            price={data.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourTypes;