import React from 'react';
import { useSelector } from 'react-redux';

export default function Intro() {
  const {loading, portfolioData} = useSelector((state)=>state.root);
  const {intro} = portfolioData;
  const {firstName,lastName,welcomeText, description, caption} = intro;
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='intro-container h-screen w-full flex flex-col sm:h-auto sm:w-auto'>
      <div className='intro-content h-full bg-primary flex flex-col items-start justify-center gap-10 opacity-80 py-10 sm:h-auto sm:items-center sm:py-6 sm:px-4'>
        <h1 className='text-slate-700 font-mono font-extrabold text-2xl sm:text-xl sm: p-2.5 sm:mb-px'>
    {welcomeText || " "}
        </h1>
        <h1 className='text-secondary text-8xl sm:text-4xl font-semibold sm:mt-0'>
          {firstName+' '+lastName ||''}
        </h1>
        <h1 className='text-slate-900 text-6xl sm:text-3xl font-semibold'>
          {caption ||''}
        </h1>
        <p className='text-slate-700 font-mono font-extrabold text-justify sm:text-sm'>
         {description || ''}
        </p>
        <button onClick={scrollToAbout} className="relative inline-flex items-center justify-start py-2 pl-3 pr-12 overflow-hidden font-semibold text-slate-800 transition-all duration-150 ease-in-out rounded border-2 border-tertiary bg-gray-50 group hover:pl-10 hover:pr-6 sm:py-1 sm:pl-2 sm:pr-8">
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
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white sm:text-xs">
            Get Started
          </span>
        </button>
      </div>
      <div id="about-section" className='about-section'>
        {/* Content for the about section */}
      </div>
    </div>
  );
}
