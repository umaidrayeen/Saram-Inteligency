import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-white font-semibold' : 'text-white/70 hover:text-white transition';
  
    return (
      <nav className="flex items-center justify-between px-16 py-4 position fixed w-full z-1 bg-black">
        <div className="text-3xl font-extrabold text-white "><NavLink to="/" >SARAM</NavLink></div>
        <div className="space-x-6">
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/features" className={navLinkClass}>Features</NavLink>
          <NavLink to="/why-saram" className={navLinkClass}>Why Saram</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
          <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
          <NavLink to="/terminals" className={navLinkClass}>Terminals</NavLink>
        
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
        <NavLink to="/" >Get Started</NavLink>
        </button>
      </nav>
    );
  };
  
  export default Navbar;
  