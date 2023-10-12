import React from 'react';
import '../styles/background.css';

const Hero = () => {
  return (
    <section className=" relative block md:flex  h-[100vh] flex items-center justify-center">
      <div className="max-w-screen-xl px-4 py-32 lg:flex flex-col gap-5 justify-center items-center lg:h-screen lg:items-center text-white">
        <div className="xs:w-[550px] w-[400px]">
          <h1 className="text-white font-extrabold xs:text-[60px] text-[70px] text-center font-DotGothic16">CodeSkool</h1>
          <h3 className="text-white xs:text-[60px] text-[38px] text-center font-Orbitron">Learn To Code</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
