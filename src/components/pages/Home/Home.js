import React from 'react'
import Header from '../../Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Certifications from './Certifications'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'

export const Home = () => {
  const {portfolioData} = useSelector((state)=>state.root);
  return (
    <div><Header />{
      portfolioData &&(
      <div className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
        <Experiences/>
        <Projects/>
        <Certifications/>
        <Footer/>
        <LeftSider/>
      </div>)}
    </div>
  )
}
