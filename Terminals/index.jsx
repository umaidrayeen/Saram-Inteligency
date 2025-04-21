import React, { useState } from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";
import container from '../images/container.png';

const Testimonial = () => {
  

  return (
    <div>
      <Navbar/>
    <section class="bg-black text-white py-20 px-20 z-0">
        <div class="max-w-8xl mx-auto bg-[#121212] p-20 rounded-2xl text-center  mt-10">
        
            {/* <!-- Label --> */}
            <span class="text-sm bg-gray-600 text-[#b08d25] font-semibold px-3 py-1 rounded border-x-2 border-x-[#b08d25]">Testimonial</span>

            {/* <!-- Heading --> */}
            <h2 class="text-5xl font-semibold mt-4">What they’re saying</h2>

            {/* <!-- Stars --> */}
            <div class="mt-4 text-yellow-400 text-3xl">
            ★★★★★
            </div>

            {/* <!-- Testimonial Text --> */}
            <div className='flex justify-between'>
             <button class="bg-gray-700 h-10 text-xl rounded-xl p-2"><FaArrowLeftLong/></button>

              <p class="mt-6 font-semibold text-2xl leading-relaxed">
              We saw a 40% increase in email engagement after switching to Saram’s <br /> AI-powered marketing automation!
              </p>

              <button class="bg-yellow-500 h-10 text-xl rounded-xl p-2"><FaArrowRightLong /></button>
            </div>

            {/* <!-- User Info --> */}
            <div class="flex justify-center items-center mt-8 gap-4">
            <div class="w-12 h-12 bg-gray-300 rounded-xl"></div>
            <div class="text-left">
                <p class="font-medium">Monica Stone</p>
                <p class="text-yellow-400 text-sm font-semibold">Digital Marketer</p>
            </div>
            </div>
        </div>
        <div className='w-full mt-40'>
            <img src={container} className='w-full' />
        </div>
    </section>
      <Footer/>
    </div>

  );
};

export default Testimonial
