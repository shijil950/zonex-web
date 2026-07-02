import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="bg-[#0b0f19] text-white py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                
                {/* ടാഗ്‌ലൈൻ */}
                <span className="text-xs bg-cyan-900/30 text-cyan-400 px-4 py-1 rounded-full font-bold tracking-widest uppercase">
                    Empowering Future
                </span>

                {/* മെയിൻ ഹെഡിംഗ് - ഇവിടെയാണ് ഫോണ്ട് സ്റ്റൈൽ ചേർത്തത് */}
                <h1 className="text-4xl md:text-6xl font-black mt-8 leading-tight tracking-tighter font-['Playfair_Display',_serif]">
                    Trade with <br />
                    <span className="text-cyan-500">
                        Real Market Education.
                    </span>
                </h1>

                {/* ഉപശീർഷകം */}
                <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Live sessions, a structured curriculum, and hands-on mentorship — built around the way you actually learn.
                </p>

                {/* ബട്ടണുകൾ */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    {/* WhatsApp ബട്ടൺ */}
                    <a 
    href="https://wa.me/919037970700?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20mentorship%20programs." 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition text-center"
>
    Talk to us on WhatsApp
</a>

                    {/* Mentorship Plans ബട്ടൺ */}
                    <a 
                        href="#courses" 
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-xl transition text-center"
                    >
                        View Mentorship Plans
                    </a>
                </div>
            </div>
        </section>
    );
}