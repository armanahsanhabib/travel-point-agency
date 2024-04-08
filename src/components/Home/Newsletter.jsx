import { BsEnvelopeOpen } from 'react-icons/bs';

const Newsletter = () => {
    return (
        <div className="bg-blue-50">
            <div className="container mx-auto py-[80px] flex justify-between items-center">
                <div className="left flex items-center gap-x-8">
                    <div className="icon text-8xl text-purple-600"><BsEnvelopeOpen /></div>
                    <div className="text flex flex-col gap-y-3">
                        <h2 className='text-2xl font-semibold'>Get the latest news and offers</h2>
                        <h1 className='text-4xl font-semibold'>Subscribe to our newsletter</h1>
                    </div>
                </div>
                <div className="right">
                    <input
                        className='text-xl px-5 py-3 w-[350px] outline-[2px] outline-dashed outline-gray-200 focus:outline-purple-600 transition-all'
                        type="email"
                        name="subscribe"
                        id="subscribe"
                        placeholder='Enter your mail address'
                    />
                    <button className='text-xl px-5 py-3 bg-purple-600 border-[2px] border-purple-500 hover:border-purple-800 hover:bg-purple-800 text-gray-50'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;