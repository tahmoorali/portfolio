import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import './index.css';
import Contact from "./components/pages/Home/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, SetPortfolioData, ShowLoading } from './redux/rootSlice';

function App() {
  const {loading, portfolioData} = useSelector((state)=>state.root);
  const dispatch = useDispatch();
  const getPortfolioData=async()=>{
    try {
      dispatch(ShowLoading(true));
      const response = await axios.get('https://render.com/docs/web-services#port-binding');
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      console.log(error);
    }
  }

  useEffect(()=>{
    if(!portfolioData){
      getPortfolioData();
    }
  },[[portfolioData]]);


  // Example useEffect to simulate loading
  // useEffect(() => {
  //   // Simulate a loading period
  //   const timer = setTimeout(() => {
  //     setShowLoading(false);
  //   }, 2000); // Show loader for 2 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
