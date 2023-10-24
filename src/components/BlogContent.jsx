import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ blogs }) => {
  const { id } = useParams();
  const idAsInt = parseInt(id);
  const index = blogs.data.findIndex((blog) => blog.id === idAsInt);

  if (!blogs || !blogs.data || blogs.data.length === 0) {
    return <p>No blogs available</p>;
  }

  if (index === -1) {
    return <p>Blog not found</p>;
  }

  const blog = blogs.data[index];
  const coverImgUrl = blog.attributes.coverImg?.data?.attributes?.url || '';

  const previousBlog = index > 0 ? blogs.data[index - 1] : null;
  const nextBlog = index < blogs.data.length - 1 ? blogs.data[index + 1] : null;

  return (
    <div className='w-full pb-10 bg-[#4BA3C3]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
          <div className='col-span-2 '>
            <img className='h-56 w-full object-cover' src={`http://localhost:1337${coverImgUrl}`} alt={blog.attributes.blogTitle} />
            <h1 className='font-bold text-2xl my-1 pt-5 text-[#CCE6F4]'>{blog.attributes.blogTitle}</h1>
            <div className='pt-5 text-[#CCE6F4]'>
              <ReactMarkdown className='line-break'>{blog.attributes.blogContent}</ReactMarkdown>
            </div>
            <div className='pt-5'>
              <div className='flex justify-between'>
                {previousBlog && (
                  <Link to={`/blog/${previousBlog.id}`} className='text-[#4BA3C3] bg-[#CCE6F4] p-5 rounded-l-full font-bold'>
                    &lt; Previous
                  </Link>
                )}
                {nextBlog && (
                  <Link to={`/blog/${nextBlog.id}`} className='text-[#4BA3C3] bg-[#CCE6F4] p-5 rounded-r-full font-bold'>
                    Next &gt;
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <aside className='bg-[#CCE6F4] text-[#4BA3C3] p-5 rounded-xl w-[80%]'>
              <h2 className='font-bold text-xl mt-4 mb-4'>UP NEXT</h2>
              <ul className=''>
                {blogs.data.map((b, i) => (
                  <li key={i} className={`p-2 ${b.id === idAsInt ? 'bg-[#4BA3C3] text-white rounded font-semibold' : ''}`}>
                    <Link to={`/blog/${b.id}`}>{b.attributes.blogTitle}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
