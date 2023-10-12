import React from 'react';
import { Navbar, Blogs, Footer, Hero } from '../components';
import Slider from '../components/Slider';

const Homepage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Slider/> */}
      <Blogs blogs={blogs} />
      <Footer />
    </div>
  );
};

export default Homepage;
