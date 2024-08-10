import React from 'react';
import icon_home from '../../icons_home.png';
import icon from '../../icon.png';
import { Link } from 'react-router-dom';
import image from "./background.jpg";
import Footer from './Footer';
import LeftSider from './LeftSider';
import { useSelector } from 'react-redux';

const ContactPage = () => {
    const { loading, portfolioData } = useSelector((state) => state.root);

    if (loading) {
        return <div>Loading...</div>; // or a spinner/loading animation
    }

    if (!portfolioData || !portfolioData.contact || !Array.isArray(portfolioData.contact)) {
        return <div>Error: Contact data not available.</div>;
    }

    const contact = portfolioData.contact[0]; // assuming contact is an array and you need the first object

    return (
        <div className='bg-primary px-40 sm:px-5 '>
            <div className='p-5 bg-primary flex justify-between fixed top-0 left-0 w-full z-50 sm:p-1 sm:justify-between sm:fixed sm:left-0 sm:top-0.2'>
                <Link to="/">
                    <img src={icon_home} alt="Icon" className='h-10 w-10 mr-2 sm:h-8 sm:w-8' />
                </Link>
                <Link to="/"><img src={icon} alt="Icon" className='h-20 w-20 mr-2 sm:h-10 sm:w-10' /></Link>
                <h1 className='text-xl text-tertiary font-thin font-mono sm:h-8 sm:text-sm sm:font-bold'>Tahmoor Ali Yezdani</h1>
            </div>

            <main className='flex-1 mt-24 flex flex-col lg:flex-row items-center lg:items-start lg:px-40 sm:px-5 sm:flex sm:flex-col'>
                <div className='flex flex-col items-center lg:flex-row lg:w-full lg:justify-center sm:flex-col'>
                    <div className='lg:w-1/2 flex justify-center'>
                        <img src={image} alt='Background' className='w-250 h-250 object-cover rounded-lg shadow-lg max-h-[400px] sm:w-auto sm:h-auto' />
                    </div>
                    <div className='lg:w-1/2 p-5 mt-10 lg:mt-0 flex justify-center '>
                        <div className='bg-slate-300 p-10 rounded-lg shadow-lg w-full h-full flex items-center justify-center max-h-[400px] sm:max-w-full sm:bg-primary sm:rounded-none sm:shadow-none'>
                            <div>
                                <h1 className='text-tertiary font-semibold text-lg mb-5'>{'{'}</h1>
                                {Object.keys(contact).map((key) => (
                                    key !== "_id" && (
                                        <h1 className='ml-5 mb-3' key={key}>
                                            <span className='text-secondary font-semibold'>{key}:</span>
                                            <span className='text-tertiary ml-3'>{contact[key]}</span>
                                        </h1>
                                    )
                                ))}
                                <h1 className='text-tertiary font-semibold text-lg'>{'};'}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <LeftSider/>
            <Footer />
        </div>
    );
};

export default ContactPage;
