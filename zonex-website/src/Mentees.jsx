import React from 'react';
import mentee1 from './assets/mentee1.png';
import mentee2 from './assets/mentee2.png';
import mentee3 from './assets/mentee3.png';
import mentee4 from './assets/mentee4.png';
import mentee5 from './assets/mentee5.png';
import mentee6 from './assets/mentee6.png';
// 6 പേരുടെ വിവരങ്ങൾ ഇവിടെ നൽകുക
const menteeData = [
  { name: "Nasheed Km", qualification: "Strategy ICT", image: new URL('./assets/mentee1.png', import.meta.url).href },  
  { name: "Binshad K", qualification: " strategy Lq Grs", image: new URL('./assets/mentee2.png', import.meta.url).href },
  { name: "Aswajith pv", qualification: "Strategy SMC", image: new URL('./assets/mentee3.png', import.meta.url).href },
  { name: "Shamil miyan", qualification: "Msnr+ trend line", image: new URL('./assets/mentee4.png', import.meta.url).href },
  { name: "Mehroof km", qualification: "Strategy MSNR", image: new URL('./assets/mentee5.png', import.meta.url).href },
  { name: "Anandu", qualification: "Strategy ICT", image: new URL('./assets/mentee6.png', import.meta.url).href  },
];

export default function Mentees() {
  return (
    <section id="mentees" className="bg-[#0b0f19] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-16 text-white font-['Playfair_Display',_serif]">
          Meet our mentors
        </h1>
        
        {/* 6 പേർക്കുള്ള ഗ്രിഡ് */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {menteeData.map((mentee, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500 transition-all text-center">
              <img 
                src={mentee.image} 
                alt={mentee.name} 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500/20" 
              />
              <h3 className="text-xl font-bold text-white mb-2">{mentee.name}</h3>
<p className="text-white font-medium">{mentee.qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}