import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/zonexlogo1.png';

export default function Navbar() {
  return (
    // ഇവിടെയാണ് h-50 നൽകിയിരിക്കുന്നത്
    <nav className="bg-[#05070a] h-27 px-12 flex items-center justify-between border-b border-gray-800 shadow-xl w-full sticky top-0 z-50">
      
      {/* ലോഗോ ഭാഗം */}
      <div className="flex items-center h-full py-2">
        <Link to="/">
          <img 
            src={logo} 
            alt="Zonex EduHub Logo" 
            className="h-50 w-auto object-contain" 
          />
        </Link>
      </div>

      {/* P&L ബട്ടൺ */}
      <div>
        <Link 
          to="/profit" 
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <span>📊</span> View Live P&L
        </Link>
      </div>
    </nav>
  );
}