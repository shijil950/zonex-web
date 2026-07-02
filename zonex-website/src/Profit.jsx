import React from 'react';

export default function Profit() {
  // നിങ്ങളുടെ പേരുകൾ കൃത്യമായി ഇതിൽ നൽകിയിട്ടുണ്ട്
  const content = [
    { type: 'video', fileName: 'video6.mp4', title: '28 WEEK P&L' },
    { type: 'video', fileName: 'video4.mp4', title: '6 MONTH P&L' },
    { type: 'video', fileName: 'video3.mp4', title: 'Valetax 1 WEEK P&L' },
    { type: 'video', fileName: 'video4.mp4', title: 'NFP DAY' },
    { type: 'video', fileName: 'video1.mp4', title: '3 MONTH P&L' },
    { type: 'video', fileName: 'video2.mp4', title: 'SMALL ACCOUNT FLIP' },
    { type: 'image', fileName: 'photo99.png', title: '1 YEAR P&L' },
    { type: 'image', fileName: 'photo98.png', title: '1 WEEK PROFIT' },
  ];

  return (
    <div className="min-h-screen bg-[#05070a] p-6 md:p-12 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">Live Profit & Loss Report</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {content.map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-900 p-4 rounded-3xl shadow-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300"
          >
            {item.type === 'video' ? (
              <video 
                className="w-full aspect-[9/16] rounded-2xl bg-black object-cover" 
                controls 
                controlsList="nodownload"
              >
                <source src={`/Videos/${item.fileName}`} type="video/mp4" />
              </video>
            ) : (
              <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-800">
                <img 
                  src={`/image/${item.fileName}`} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            <h3 className="mt-6 text-xl font-semibold text-center">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-12">
        <a 
          href="/" 
          className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </a>
      </div>
    </div>
  );
}