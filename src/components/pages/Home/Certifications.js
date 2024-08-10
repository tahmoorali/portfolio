import React from 'react'
import SectionTitle from '../../SectionTitle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Certifications() {
    const {portfolioData } = useSelector((state) => state.root);
    const { certification } = portfolioData;
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const handleOpenLink = () => {
        const link = certification[selectedItemIndex].link;
        window.open(link, '_blank'); // Opens the link in a new tab
    };
    return (
        <div>
            <SectionTitle title="Certifications" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-wrap gap-10 border-l-2 border-tertiary w-1/3 sm:overflow-x-scroll sm:w-full sm:justify-self-auto'>
                    {certification.map((certificate, i) => (
                        <div onClick={() => {
                            setSelectedItemIndex(i);
                        }}
                            className='cursor-pointer'>
                            <h1 className={`text-xl px-5 font-mono ${selectedItemIndex === i ? 'text-tertiary border-tertiary border-l-4 -ml-{3px} bg-slate-300 py-3'
                                : 'text-slate-500'}`} >
                                {certificate.title}
                            </h1>

                        </div>
                    ))}
                </div>


                <div className='flex flex-col gap-5'>

                    <h1 className='text-secondary text-xl font-serif font-semibold'>{certification[selectedItemIndex].company}</h1>
                    <h1 className='text-slate-600 font-mono font-light text-justify'>{certification[selectedItemIndex].description}</h1>
                    <button
                        onClick={handleOpenLink}
                        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-slate-800 transition-all duration-150 ease-in-out rounded border-2 border-tertiary bg-gray-50 group hover:pl-10 hover:pr-6">

                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-tertiary group-hover:h-full"></span>

                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>

                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>

                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Check_On_CLick</span>
                    </button>

                </div>
                <div className='flex items-center justify-center gap-5'>
                    <img src={certification[selectedItemIndex].image} alt="" className='h-full max-w-40' />

                </div>
            </div>

            <SectionTitle title="Say Hello" />
            <div class="flex justify-end h-[400px]">

                <dotlottie-player
                    src="https://lottie.host/304eff7e-f883-4d24-8e00-6708dc3d4666/3dLVQKus4t.json"
                    background="transparent"
                    speed="1"
                    autoplay
                ></dotlottie-player>
                
            </div>
            <Link to="/contact" className="relative inline-flex items-center justify-centre py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Contact_Me</span>
            </Link>


        </div>
    )
}
