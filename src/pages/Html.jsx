import React from 'react';
import { Navbar, Blogs, Footer } from '../components';

const Html = ({ blogs }) => {
  console.log('Html:', blogs);

  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs} />    
      <Footer />
    </div>
  );
}

export default Html;
