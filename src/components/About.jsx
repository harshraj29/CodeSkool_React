import React from 'react';
import DeveloperImage from '../assets/Developer.gif';


function About() {
  return (
    <section className="bg-[#4BA3C3] h-[70vh] flex item-center">
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <div className="md:w-1/2 px-6">
        <h2 className="text-[#CCE6F4] text-6xl font-bold mb-4 font-extrabold">Unleash the Coder Within!</h2>
        <p className="text-[#CCE6F4] text-2xl">
          Welcome to Codeskool, your ultimate coding learning platform where barriers cease to exist. Unravel the mysteries of programming languages for free and become the coding ninja you’ve always dreamt of being.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={DeveloperImage} alt="Coding Boy" className='h-[300px]'/>
      </div>
      </div>
    </section>
  );
}

export default About;
