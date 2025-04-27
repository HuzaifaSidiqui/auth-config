import React from 'react'
import Navbar from '../Components/home/Navbar';
import Hero from '../Components/home/Hero';
import Products from '../Components/home/Products';
import Categories from '../Components/home/Categories';
import Testimonials from '../Components/home/Testimonials';
import Footer from '../Components/home/Footer';
import { CssBaseline } from '@mui/material';

const LandingPage = () => {
  return (
    <>
    <CssBaseline />
      <Navbar />
      <Hero />
      <Products />
      <Categories />
      <Testimonials />
      <Footer />
    </>
  )
}

export default LandingPage
