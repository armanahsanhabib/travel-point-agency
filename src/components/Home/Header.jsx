
const Header = () => {
    // const [fix, setFix] = useState(false);

    // const setFixed = () => {
    //     if (window.scrollY > 45) {
    //         setFix(true);
    //     } else {
    //         setFix(false);
    //     }
    // }

    // window.addEventListener("scroll", setFixed);

    return (
        <header className={`transition-all sticky top-0 left-0 z-50`}>
            <div className='py-[15px] flex justify-between items-center container mx-auto text-gray-50'>
                <h2 className="text-3xl font-bold">Travel<span className="font-light">Point</span></h2>
                <nav>
                    <ul className={`flex gap-x-8 text-lg`}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">News and Blog</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </nav>
                <div className='flex gap-x-3 text-gray-800'>
                    <a href="#" className={`rounded px-3 py-2`}>Subscribe to Newsletter</a>
                </div>
            </div>
        </header>
    );
};

export default Header; 