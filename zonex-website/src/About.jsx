import React from 'react';
import teamPhoto from './assets/team-photo.png'; // നിങ്ങളുടെ ആ ഫോട്ടോ ഇവിടെ ഇമ്പോർട്ട് ചെയ്യുക

export default function About() {
    return (
        <section id="about" className="bg-[#4a90e2] text-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                
                {/* വിവരങ്ങൾ */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 font-['Playfair_Display',_serif]">
                        About Zonex
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                        Zonex EduHub is a premier financial education institute based in Palarivattom, Kochi, 
                        dedicated to empowering individuals with the knowledge and skills needed to succeed in the world of trading.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed">
                        At Zonex, we simplify global trading through structured training in Forex, Stock, and Crypto markets, 
                        designed for learners at any level. Join us and take your first step toward financial freedom.
                    </p>
                </div>

{/* ഫോട്ടോ */}
<div className="w-full">
    <img 
        src={teamPhoto} 
        alt="Zonex Team" 
        /* rounded-2xl എന്നതിന് പകരം ഒന്നും കൊടുക്കുന്നില്ല, 
           അപ്പോൾ അത് ഷാർപ്പ് എഡ്ജോട് കൂടി വരും */
        // className="w-full h-auto object-cover shadow-xl" 
    />
</div>
            </div>
        </section>
    );
}