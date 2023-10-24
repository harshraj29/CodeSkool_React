import React from 'react';
import Particlebg from './Particlebg';

const Hero = () => {
  return (
    <div className="relative block md:flex h-screen flex items-center justify-center">
      <Particlebg />
      <div className="max-w-screen-xl px-4 py-10 lg:flex flex-col gap-5 justify-center items-center lg:h-screen lg:items-center text-white md:flex-row-reverse">
        <div className="md:w-[60%] md:h-[80vh] md:my-auto">
          <img
            src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
            alt="CodeSkool Girl"
            className="md:w-full md:h-full"
          />
        </div>
        <div className="xs:w-[70%] w-full text-center">
          <h1 className="font-extrabold text-9xl text-[#CCE6F4] font-Hero">CodeSkool</h1>
          <h3 className="text-5xl text-[#CCE6F4]">Learn To Code</h3>
          <p className="text-2xl text-[#CCE6F4] my-6">Start your coding journey with us!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
