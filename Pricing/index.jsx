import React, { useState } from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import badge from '../images/badge.png';
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div>
      <Navbar/>
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mt-10">
        <span className="text-sm bg-gray-600 text-[#b08d25] font-semibold px-3 py-1 rounded border-x-2 border-x-[#b08d25]">Pricing</span>
        <h2 className="text-5xl font-semibold mt-4">Plans and features</h2>
        <p className="text-gray-400 mt-2">Choose plan that suits your needs.</p>

        {/* Billing Toggle */}
        <div className="mt-6 flex justify-center ">
          <div className='bg-gray-800 p-1 rounded-full'>
          <button
            className={`px-6 py-2 rounded-full font-medium ${
              billingCycle === 'monthly' ? 'bg-white text-black rounded-full' : 'bg-gray-800 p-2 text-white '
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full font-medium ${
              billingCycle === 'annual' ? 'bg-white text-black rounded-full' : 'bg-gray-800 text-white'
            }`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual
          </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          {/* Basic Plan */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl mt-6 font-semibold">Basic Plan</h3>
              <p className="text-4xl text-[#e8ab66] font-bold mt-2">Free</p>
              <p className="text-gray-400 mt-1">Try our starter features</p>
              <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-medium">
                Try Saram Now
              </button>
              <ul className="mt-6 space-y-3 text-sm text-white flex ">
                <div className='text-xl text-yellow-700 mt-3 mr-2'>
                  <FaCheck />
                  <FaCheck className='mt-4'/>
                  <FaCheck className='mt-3'/>
                  <FaCheck className='mt-3'/>
                </div>
                <div className=''>
                <li>Basic AI Chatbot & Voice Assistant</li>
                <li className='mt-3'>1,000 Conversations per Month</li>
                <li className='mt-3'>Basic Personalization Features</li>
                <li className='mt-3'>Standard Marketing Automation</li>
                </div>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#1a1a1a]  rounded-xl ">
            <span className=""><img src={badge} className='w-12 ml-72'/></span>
            <div className='px-6 pb-6'>
              <h3 className="text-2xl font-semibold">Pro Plan</h3>
              <p className="text-4xl text-[#e8ab66] font-bold mt-2">$29.99</p>
              <p className="text-sm text-gray-400">per user per month</p>
              <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-medium">
                Try Saram Now
              </button>
              <ul className="mt-6 space-y-3 text-sm text-white flex ">
                <div className='text-xl text-yellow-700 mt-3 mr-2'>
                  <FaCheck />
                  <FaCheck className='mt-4'/>
                  <FaCheck className='mt-3'/>
                  <FaCheck className='mt-3'/>
                </div>
                <div className=''>
                <li>Everything in Free, plus:</li>
                <li className='mt-3'>50,000 Conversations per Month</li>
                <li className='mt-3'>Advanced AI Personalization</li>
                <li className='mt-3'>AI-Driven Customer Segmentation</li>
                </div>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div>
              <h3 className="text-2xl mt-6 font-semibold">Enterprise</h3>
              <p className="text-4xl text-[#e8ab66] font-bold mt-2">Custom</p>
              <p className="text-gray-400 mt-1">Contact our sales</p>
              <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-medium">
                Try Saram Now
              </button>
              <ul className="mt-6 space-y-3 text-sm text-white flex ">
                <div className='text-xl text-yellow-700 mt-3 mr-2'>
                  <FaCheck />
                  <FaCheck className='mt-4'/>
                  <FaCheck className='mt-3'/>
                  <FaCheck className='mt-3'/>
                </div>
                <div className=''>
                <li>Everything in Pro, plus:</li>
                <li className='mt-3'>Unlimited AI Conversations</li>
                <li className='mt-3'>Custom AI Model Training</li>
                <li className='mt-3'>On-Premise Deployment</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </div>
  );
};

export default Pricing;
