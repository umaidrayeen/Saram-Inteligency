import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';

const Features = () => {
  return (
    <div className=''>
        <Navbar/>
    <section className="bg-black text-white py-16 px-4">
     
      <div className="text-center mb-10 mt-10">
        <span className="text-sm bg-gray-600 text-[#b08d25] font-semibold px-3 py-1 rounded border-x-2 border-x-[#b08d25]">Features</span>
        <h2 className="text-5xl font-semibold mt-4">Solutions for your marketing game</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-8xl px-14 mx-auto">
        <div className="bg-[#1a1a1a]  text-white p-6 rounded-lg">
          <img src={card1} className=''/>
          <h3 className="text-2xl  font-semibold mt-2">AI Chatbot</h3>
          <p className="text-sm mt-2">
            Saram AI's chatbot automates customer support, sales inquiries, and FAQs, providing real-time, natural reponeses across platforms.
          </p>
        </div>

        <div className="bg-[#1a1a1a]  text-white p-6 rounded-lg">
          <img src={card2} />
          <h3 className="text-2xl font-semibold mt-2">AI Voice Assistant</h3>
          <p className="text-sm mt-2">
            A Voice-activated assistant that help users with task automation, scheduling, and voice-based interactions.
          </p>
        </div>

        <div className="bg-[#1a1a1a]  text-white p-6 rounded-lg">
          <img src={card3} />
          <h3 className="text-2xl  font-semibold mt-2">AI Personalization Engine</h3>
          <p className="text-sm mt-2">
            Saram AI analuzes user behavior to deliver to personalized recommendations, content and interactions in real-time.
          </p>
        </div>

        <div className="bg-[#1a1a1a]  text-white p-6 rounded-lg">
          <img src={card4} />
          <h3 className="text-2xl  font-semibold mt-2">AI Email & Marketing Automation</h3>
          <p className="text-sm mt-2">
            Saram Automates email campaigns, customer segmentation, and follow-ups,ensuring the right message reaches the right audience.
          </p>
        </div>
      </div> 
    </section>
      <Footer/>
    </div>
  );
};

export default Features
