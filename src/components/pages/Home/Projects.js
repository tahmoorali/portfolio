import React from 'react'
import SectionTitle from '../../SectionTitle'
import { projects } from '../../../resources/projects';
import { useSelector } from 'react-redux';


export default function Projects() {
    const {portfolioData } = useSelector((state) => state.root);
    const { project } = portfolioData;
    const [selectedItemIndex, setSelectedItemIndex]=React.useState(0);
  return (
    <div>
        <SectionTitle title="Projects"/>
        <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-wrap gap-10 border-l-2 border-tertiary w-1/3 sm:overflow-y-scroll sm:flex-row sm:w-full sm:justify-self-auto'>
                    {project.map((projects,i) => (
                        <div onClick={()=>{
                            setSelectedItemIndex(i);
                        }}
                        className='cursor-pointer'>
                            <h1 className={`text-xl px-5 font-mono ${selectedItemIndex===i ?'text-tertiary border-tertiary border-l-4 -ml-{3px} bg-slate-300 py-3'
                                :'text-slate-500'}` } >
                                {projects.title}
                            </h1>

                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-10'>
                    <img src={projects[selectedItemIndex].image} alt="" className='h-full max-w-sm'/>

                </div>
                <div className='flex flex-col gap-5'>
                
                <h1 className='text-secondary text-xl font-serif font-semibold'>{projects[selectedItemIndex].title}</h1>
                    <h1 className='text-slate-600 text-xl font-serif font-semibold'>{projects[selectedItemIndex].technology}</h1>
                    <h1 className='text-slate-600 font-mono font-light text-justify'>{projects[selectedItemIndex].description}</h1>
                </div>

            </div>
    </div>
  )
}
