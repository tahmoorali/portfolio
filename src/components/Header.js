import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.png'; // Adjust the path as needed
import icon_home from './icons_home.png';

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='p-5 bg-primary flex justify-between fixed top-0 left-0 w-full z-50 sm:p-0 sm:justify-between sm:fixed sm:left-0 sm:top-0.1'>
      <Link to="/" className='inline-flex' onClick={scrollToTop}>
        <img src={icon_home} alt="Icon" className='h-10 w-10 mr-2 sm:h-8 sm:w-8' />
      </Link>
      <Link to="/" className='inline-flex'>
        <img src={icon} alt="Icon" className='h-20 w-20 mr-2 sm:h-10 sm:w-10' />
      </Link>
      <Link
        to="/contact"
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group sm:py-2 sm:pl-3 sm:pr-8 sm:text-sm"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 sm:pr-2">
          <svg
            className="w-5 h-5 text-green-400 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 sm:pl-1.5">
          <svg
            className="w-5 h-5 text-green-400 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white sm:text-xs">
          Contact Me
        </span>
      </Link>
    </div>
  );
}
