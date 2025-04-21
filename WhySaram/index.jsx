import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import whycard from '../images/whycards.png';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';

const WhySaram= () => {
  return (
    <div>
      <Navbar/>
    <section className="bg-black text-white py-16 px-20">
      <div className="max-w-8xl mx-auto mt-14 flex gap-6">
        {/* Left Side */}
        <div className='bg-[#1a1a1a] p-8 pr-12 rounded-lg w-3/5 '>
          <span className="text-sm bg-gray-600 text-[#b08d25] font-semibold px-3 py-1 rounded border-x-2 border-x-[#b08d25]">Why Saram</span>
          <h2 className="text-5xl font-semibold mt-4 leading-tight">
            We always understand <br /> and adapt for business
          </h2>
          <p className="text-gray-300 mt-4">
            From startups to global enterprises, businesses rely on Saram to automate
            communication without losing the human touch.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-full">
            Try for Free
          </button>
        </div>

        {/* Right Side */}
        <div className=" w-2/5 py-8 bg-[#1a1a1a] rounded-lg flex justify-center">
            <img src={whycard} className=' w-3/4' />
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-6 grid md:grid-cols-3 gap-6 max-w-8xl mx-auto">
        <div className="bg-[#1a1a1a] p-6 pr-20 rounded-lg">
            <img src={logo1} alt="" />
          <p className="text-2xl mt-10 font-semibold mb-2">Higher Engagement</p>
          <p className="text-sm text-gray-400">Reduce support costs while improving customer experience.</p>
          <a href="#" className="mt-12 inline-block text-sm text-white hover:underline">Learn More →</a>
          <hr className='w-24 mt-2' />
        </div>

        <div className="bg-[#1a1a1a] p-6 pr-20 rounded-lg">
            <img src={logo2} alt="" />
          <p className="text-2xl mt-10 font-semibold mb-2">Customizable & Scalable</p>
          <p className="text-sm text-gray-400">From startups to enterprises, Saram grows with your business.</p>
          <a href="#" className="mt-12 inline-block text-sm text-white hover:underline">Learn More →</a>
          <hr className='w-24 mt-2' />
        </div>

        <div className="bg-[#1a1a1a] p-6 pr-20 rounded-lg">
            <img src={logo3}  />
          <p className="text-2xl mt-10 font-semibold mb-2">Omnichannel Integration</p>
          <p className="text-sm text-gray-400">Connect seamlessly across chat, email, voice, and more.</p>
          <a href="#" className="mt-12 inline-block text-sm text-white hover:underline">Learn More →</a>
          <hr className='w-24 mt-2' />
        </div>
      </div>
    </section>
      <Footer/>
    </div>
  );
};

export default WhySaram;
