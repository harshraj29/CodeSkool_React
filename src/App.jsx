import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { Homepage, BlogContentPage } from './pages';

export default function App() {
  const { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage blogs={data ? data : ''} />} />
          <Route path="/blog/:id" element={<BlogContentPage blogs={data ? data : ''} />} />
        </Routes>
      </div>
    </Router>
  );
}
