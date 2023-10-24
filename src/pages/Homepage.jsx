import React from 'react';
import { Navbar, Blogs, Footer, Hero ,About , Secondlast ,Faq , Card } from '../components';
import Slider from '../components/Slider';

const Homepage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Card/>
      <Secondlast/>
      {/* <Slider/> */}
      {/* <Blogs blogs={blogs} /> */}
      <Faq/>
      <Footer />
    </div>
  );
};

export default Homepage;
