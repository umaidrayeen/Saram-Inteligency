import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import card from '../images/card-container.png';

const About = () => {
    return (
        <div>
            <Navbar />
            
            <section className='p-10 bg-black'>
                <div className="bg-[#1a1a1a] px-6 py-16 rounded-xl mx-6 md:mx-8 mt-20 text-white">
                    <div className="flex justify-center pl-10 pr-10">
                        <img src={card} className='h-72 w-full' alt="Card visual" />
                    </div> 

                    {/* Description */}
                    <div className="text-center text-5xl font-medium text-white/90 mt-20 max-w-8xl mx-auto">
                        Businesses need more than just automation.<br />
                        They need AI that understands context,<br className="hidden md:block" />
                        adapts to different users, and delivers<br />
                        the right message at the right time.
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
