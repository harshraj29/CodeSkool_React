import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ blogs }) => {
  const { id } = useParams();

  if (!blogs || !blogs.data || blogs.data.length === 0) {
    return <p>No blogs available</p>;
  }

  const blog = blogs.data.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const coverImgUrl = blog.attributes.coverImg?.data?.attributes?.url || '';

  return (
    <div className='w-full pb-10 '>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
          <div className='col-span-2 '>
            <img className='h-56 w-full object-cover' src={`http://localhost:1337${coverImgUrl}`} alt={blog.attributes.blogTitle} />
            <h1 className='font-bold text-2xl my-1 pt-5 text-white'>{blog.attributes.blogTitle}</h1>
            <div className='pt-5 text-white'>
              <ReactMarkdown className='line-break'>{blog.attributes.blogContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
