import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { Homepage, BlogContentPage , Html ,Css ,JavaScript , React } from './pages';

export default function App() {
  const { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');

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
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage blogs={data ? data : ''} />} />
          <Route path="/html" element={<Html blogs={data ? data : ''} />}/>
          <Route path="/css" element={<Css blogs={data ? data : ''} />}/>
          <Route path="/blog/:id" element={<BlogContentPage blogs={data ? data : ''} />} />
        </Routes>
      </div>
    </Router>
  );
}
