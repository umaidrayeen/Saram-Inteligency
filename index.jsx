import React from "react";
import Navbar from "../NavBar";
import Footer from '../Footer';
import sun from '../images/bg-image.png';

const Home = () => {
    return (
      <section className="bg-black pb-8 h-screen w-full ">
        <Navbar/>
        <div className="flex justify-between">
        <div className="max-w-4xl pl-16 pt-14 mt-14">
          <h1 className="text-6xl font-senif font-semibold leading-tight text-white">
            Listens, Engages,<br />and Personalizes
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            For smart communication, customer engagement,<br />
            and personalized automation.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Try for Free
          </button>
        </div>

        <div className="w-2/5 ">
            <img src={sun} className="mt-14" />
        </div>
        </div>
  
        {/* Ratings */}
        <div className="pl-16 flex items-center space-x-2">
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-400" />
          <div className="w-10 h-10 rounded-full bg-gray-400" />
          <div className="w-10 h-10 rounded-full bg-gray-400" />
        </div>
        <div className="text-1xl">
          <span className="text-yellow-400 text-2xl">★★★★★</span><br />
          <span className="text-white">4.8/5 (500k+ reviews)</span>
        </div>
      </div>
      <Footer/>
    </section>
    
    );
  };
  
  export default Home;
  