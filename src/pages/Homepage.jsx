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
      <Faq/>
      <Footer />
    </div>
  );
};

export default Homepage;
