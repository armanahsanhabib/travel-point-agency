import { FaCcAmex, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className="footer-main container mx-auto flex justify-between mb-[100px]">
                <div className="left flex flex-col gap-y-10">
                    <h2 className='text-2xl underline underline-offset-[14px] decoration-0 font-semibold decoration-purple-600'>Need any help?</h2>
                    <div className='border-l-[2px] border-l-purple-600 pl-3'>
                        <h3 className="text-lg font-semibold">Call 24/7 for any help</h3>
                        <a
                            href="tel:+00-123-456-789"
                            className='text-2xl font-semibold text-purple-600'
                        >
                            +00-123-456-789
                        </a>
                    </div>
                    <div className='border-l-[2px] border-l-purple-600 pl-3'>
                        <h3 className="text-lg font-semibold">Mail to our support team</h3>
                        <a
                            href="mailto:support@domain.com"
                            className='text-2xl font-semibold text-purple-600'
                        >
                            support@domain.com
                        </a>
                    </div>
                    <div className='border-l-[2px] border-l-purple-600 pl-3'>
                        <h3 className="text-lg font-semibold mb-2">Follow us on</h3>
                        <ul className="flex items-center gap-x-2 text-purple-600">
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="right flex gap-x-[160px]">
                    <div className="">
                        <h2 className='text-xl underline underline-offset-[10px] decoration-0 decoration-purple-600 mb-5'>Company</h2>
                        <ul className="flex flex-col gap-y-4">
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">About Us</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Testimonials</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Rewards</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Work with Us</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Meet the Team</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className='text-xl underline underline-offset-[10px] decoration-0 decoration-purple-600 mb-5'>Support</h2>
                        <ul className="flex flex-col gap-y-4">
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Account</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Faq</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Legal</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Contact</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Affiliate Program</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className='text-xl underline underline-offset-[10px] decoration-0 decoration-purple-600 mb-5'>Other Services</h2>
                        <ul className="flex flex-col gap-y-4">
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Community Program</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Investor Relations</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Rewards Program</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">PointsPLUS</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Partners</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">List My Hotel</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className='text-xl underline underline-offset-[10px] decoration-0 decoration-purple-600 mb-5'>Top Cities</h2>
                        <ul className="flex flex-col gap-y-4">
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Chicago</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">New York</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">San Francisco</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">California</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Ohio</a></li>
                            <li><a className='text-gray-800 hover:text-purple-600 transition-all' href="#">Alaska</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright bg-blue-50">
                <div className="container mx-auto py-5 flex justify-between items-center">
                    <h6 className="">Copyright &copy; 2023 All Rights Reserved</h6>
                    <div className="flex gap-x-3 text-3xl">
                        <FaCcVisa className='text-gray-400 hover:text-purple-600 cursor-pointer transition-all' />
                        <FaCcMastercard className='text-gray-400 hover:text-purple-600 cursor-pointer transition-all' />
                        <FaCcAmex className='text-gray-400 hover:text-purple-600 cursor-pointer transition-all' />
                        <FaCcPaypal className='text-gray-400 hover:text-purple-600 cursor-pointer transition-all' />
                        <FaCcJcb className='text-gray-400 hover:text-purple-600 cursor-pointer transition-all' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;