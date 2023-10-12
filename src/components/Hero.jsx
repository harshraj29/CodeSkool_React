import React from 'react';
import '../styles/background.css';

const Hero = () => {
  return (
    <section className=" bg-[#181826] relative block md:flex bg-animation h-[100vh] flex items-center justify-center ">
      <div className="area -z-50 absolute w-full h-full">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className=" max-w-screen-xl px-4 py-32 lg:flex flex-col gap-5 justify-center items-center lg:h-screen lg:items-center text-white">
        <div className='xs:w-[550px] w-[400px]'>
        <h1 className='text-white font-extrabold xs:text-[60px] text-[70px] text-center font-DotGothic16'>CodeSkool</h1>
          <h3 className='text-white  xs:text-[60px] text-[38px] text-center font-Orbitron'>Learn To Code</h3>
        </div>
      </div>
    </section>
  )
}

export default Hero;