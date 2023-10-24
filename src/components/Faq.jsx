import React, { useState } from 'react';
import Accordion from "./Accordion";
import { accordions } from "../assets/Data";

export const Faq = () => {
    return (
        <div className=" wrapper bg-[#4BA3C3] text-[#CCE6F4] pb-24">
            <h1 className="text-center text-5xl font-semibold ">FAQ</h1>
            <p className='text-center mb-10'>Frequently Asked Questions</p>

            {/* main content here */}
            <div className="lg:w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
                {accordions.map((item, id) => {
                    const { question, answer } = item;
                    return (
                        <div className="bg-darkcolor p-5 rounded-md" key={id}>
                            {/* passing two props to this component */}
                            <Accordion question={question} answer={answer}></Accordion>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};