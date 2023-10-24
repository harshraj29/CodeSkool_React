import React from 'react';
import image from '../assets/Designer.gif'

function Secondlast() {
  return (
    <section className="bg-[#4BA3C3] h-[100vh] flex items-center pb-10">
      <div className="max-w-screen-xl flex flex-col items-center justify-center mx-auto p-4 text-center text-[#CCE6F4] mt-10">
        <img
          src={image}
          alt="Coding Boy"
          className="h-48 md:h-64 lg:h-44 mb-8"
        />
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-4 mt-5 w-[60%]">
          Embark on Your Codeskool Adventure!
        </h1>
        <p className="text-base md:text-xl lg:text-2xl w-[70%] mb-10">
          Are you eager to reign supreme in the world of coding? Don't wait any
          longer! Sign up now and dive into our ocean of coding knowledge.
          Together, let's make your coding dreams come true!
        </p>
      </div>
    </section>
  );
}

export default Secondlast;
