import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const HeaderTop = () => {
    return (
        <div className="border-b">
            <div className="container mx-auto py-3 text-sm text-gray-50">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                        <ul className="flex items-center gap-x-2">
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                        </ul>
                        <span className="text-gray-200">|</span>
                        <a href="#">+699 2654-5445</a>
                        <span className="text-gray-200">|</span>
                        <a href="#">contact@admin.com</a>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <a href="#">Login</a>
                        <span className="text-gray-200">|</span>
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;