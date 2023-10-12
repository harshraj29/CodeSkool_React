import React from 'react';
import { Navbar, Blogs, Footer } from '../components';
import useFetch from '../hooks/useFetch'; 

const Css = () => {
  const { loading, data, error } = useFetch('http://localhost:1337/api/csses?populate=*');

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <p className="text-4xl text-white p-4 rounded-lg">Loading...</p>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <p className="text-4xl text-white p-4 rounded-lg">Error!</p>
    </div>
  );

  console.log('Css:', data);

  return (
    <div>
      <Navbar />
      <Blogs blogs={data} />
      <Footer />
    </div>
  );
}

export default Css;