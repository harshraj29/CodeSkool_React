import React from 'react';
import { Navbar, Footer, BlogContent } from "../components";

const BlogContentPage = ({ blogs }) => {
  console.log("Blogs prop:", blogs);
  
  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs}/>    
      <Footer />
    </div>
  );
}

export default BlogContentPage;
