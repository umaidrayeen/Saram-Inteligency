import React, { useState } from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';

const faqs = [
  {
    question: 'How does Saram AI learn and improve over time?',
    answer: '',
  },
  {
    question: 'Can I integrate Saram AI with my existing CRM and tools?',
    answer:
      'Yes! Saram AI offers API and no-code integrations with popular CRMs, email platforms, and business tools.',
  },
  {
    question: 'Is my data safe with Saram AI?',
    answer: '',
  },
  {
    question: 'Can I customize Saram AI to match my brand’s tone and style?',
    answer: '',
  },
  {
    question: 'What happens if I exceed my plan’s conversation limit?',
    answer: '',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); // Default to 2nd item open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar/>
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mt-10">
        <span className="text-sm bg-gray-600 text-[#b08d25] font-semibold px-3 py-1 rounded border-x-2 border-x-[#b08d25]">FAQ</span>
        <h2 className="text-5xl font-semibold mt-4">Asked by others</h2>
        <p className="text-gray-400 text-sm mt-2">
          Still have questions or can’t find the answer? <br />
          reach out to our customer service
        </p>
        <button className="mt-5 mb-6 px-6 py-2 bg-white text-black rounded-full font-medium">
          Ask us anything
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-12 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`px-6 py-4 transition-colors duration-300 ${
              openIndex === index ? 'bg-[#1a1a1a] rounded-xl' : 'hover:bg-[#1a1a1a] rounded-xl'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium"
            >
              <span className='p-3'>{faq.question}</span>
              <span className="text-yellow-400 text-4xl font-semibold">
                {openIndex === index ? '×' : '+'}
              </span>
            </button>
            {openIndex === index && faq.answer && (
              <p className="mt-3 text-sm text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
      <Footer/>
    </div>
  );
};

export default FAQ;
