import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title }) {
    return (
        <section className='flex items-center justify-center bg-[#4BA3C3]'>
            <Link to="/html">
                <div className='m-4 p-4 bg-[#CCE6F4] text-[#4BA3C3] w-56 h-72 flex items-center justify-center rounded-lg'>
                    <img src="https://static.javatpoint.com/htmlpages/images/html-tutorial.png" alt="" />
                    {/* <h1>HTML</h1> */}
                </div>
            </Link>
            <Link to="/html">
                <div className='m-4 p-4 bg-[#CCE6F4] text-[#4BA3C3] w-56 h-72 flex items-center justify-center rounded-lg'>
                    <img src="https://static.javatpoint.com/csspages/images/css-tutorial.png" alt="" />
                    {/* <h1>CSS</h1> */}
                </div>
            </Link>
            <Link to="/html">
                <div className='m-4 p-4 bg-[#CCE6F4] text-[#4BA3C3] w-56 h-72 flex items-center justify-center rounded-lg'>
                    <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="" />
                    {/* <h1>JavaScript</h1> */}
                </div>
            </Link>
            <Link to="/html">
                <div className='m-4 p-4 bg-[#CCE6F4] text-[#4BA3C3] w-56 h-72 flex items-center justify-center rounded-lg'>
                    <img src="https://static.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png" alt="" />
                    {/* <h1 >React JS</h1> */}
                </div>
            </Link>
            <Link to="/html">
                <div className='m-4 p-4 bg-[#CCE6F4] text-[#4BA3C3] w-56 h-72 flex items-center justify-center rounded-lg'>
                    <img src="https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png" alt="" />
                    {/* <h1 >Node JS</h1> */}
                </div>
            </Link>
        </section>
    );
}

export default Card;
