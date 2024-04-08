import company1 from '../../assets/images/companies/1.png';
import company2 from '../../assets/images/companies/2.png';
import company3 from '../../assets/images/companies/3.png';
import company4 from '../../assets/images/companies/4.png';
import company5 from '../../assets/images/companies/5.png';
import company6 from '../../assets/images/companies/6.png';

const OurPartners = () => {
    return (
        <div className="bg-blue-50">
            <div className="container mx-auto py-[80px]">
                <h1 className="text-3xl text-center mb-10 underline underline-offset-[10px] decoration-2 decoration-purple-600 font-semibold text-[#212529]">Our Partners</h1>
                <div className="companies grid grid-cols-8 gap-x-[60px] gap-y-[30px]">
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company1} alt="company1" />
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company2} alt="company2" />
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company3} alt="company3" />
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company4} alt="company4" />
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company5} alt="company5" />
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company6} alt="company6" />
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company4} alt="company4" />
                    <img className='opacity-[50%] hover:opacity-[100%] transition-all' src={company5} alt="company5" />
                </div>
            </div>
        </div>
    );
};

export default OurPartners;