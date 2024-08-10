import React from 'react'
import SectionTitle from '../../SectionTitle'
import { useSelector } from 'react-redux';

export default function Experiences() {
    const {portfolioData } = useSelector((state) => state.root);
    const { experience } = portfolioData;
    const [selectedItemIndex, setSelectedItemIndex]=React.useState(0);
    return (
        <div>
            <SectionTitle title="Education and Experience" />

            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-wrap gap-10 border-l-2 border-tertiary w-1/3 sm:overflow-y-scroll sm:flex-row sm:w-full sm:justify-self-auto'>
                    {experience.map((experiences,i) => (
                        <div onClick={()=>{
                            setSelectedItemIndex(i);
                        }}
                        className='cursor-pointer'>
                            <h1 className={`text-xl flex-row px-5 font-mono ${selectedItemIndex===i ?'text-tertiary border-tertiary border-l-4 -ml-{3px} bg-slate-300 py-3'
                                :'text-slate-500'}` } >
                                {experiences.period}
                            </h1>

                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl font-serif font-semibold'>{experience[selectedItemIndex].title}</h1>
                    <h1 className='text-tertiary text-xl font-mono font-light'>{experience[selectedItemIndex].company}</h1>
                    <h1 className='text-slate-600 font-mono font-light text-justify'>{experience[selectedItemIndex].description}</h1>
                </div>

            </div>
            
            
        </div>

    )
}
