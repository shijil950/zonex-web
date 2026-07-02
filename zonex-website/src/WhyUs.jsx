import React from 'react';

// ഗൂഗിൾ ക്രോമിൽ നിന്നുള്ള ഓൺലൈൻ ഇമേജ് ലിങ്ക് നേരിട്ട് ഇവിടെ നൽകിയിരിക്കുന്നു.
import studentImg from './assets/teresaa1.png'; // നിങ്ങളുടെ പ്രോജക്ട് ഫോള്ഡറിൽ ഈ ഇമേജ് ഉണ്ടെന്ന് ഉറപ്പാക്കുക
export default function WhyUs() {
  const points = [
    {
        title: 'Funded Account',
        desc: 'Free to get minimum 5K funded account.'
    },
    {
        title: 'Embassy Approved Certificate', 
        desc: 'ICEEDS embassy approved certification provided.'
    },
{
        title: 'Refund Policy', 
        desc: 'if your not a profitable trader after the 6 month you will get full amount of your course fee.'
    },
    {
        title: 'No Duration', 
        desc: 'Anytime available, any market, any trader.'
    },
    {
        title: '4 Proven Strategies', 
        desc: 'SMC, ICT , MSNR, MSNR+TREND LINE, PRICE ACTION WITH LQ.'
    },
    {
      title: 'Career-Oriented Skillset',
      desc: 'Learn a globally in-demand, high-income skill alongside your degree.'
    },
    {
      title: 'Practical Training',
      desc: 'Live trading sessions, real-time analysis & mentorship from expert traders.'
    },
    {
      title: 'Funding Opportunity',
      desc: 'Our training equips you to pass a funded trading account, giving you the chance to trade with real capital.'
    },
    {
      title: 'Flexible Schedule',
      desc: 'Designed to fit within your academic routine - online & offline sessions available.'
    },
    {
      title: 'Community Access',
      desc: 'Get lifetime access to Zonex\'s trading community on Discord, WhatsApp & Telegram.'
    },
    {
      title: 'Certification',
      desc: 'Receive a recognized certificate on course completion.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          
          {/* ഇടത് വശം: വിവരങ്ങൾ (Points Section) */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose <span className="text-cyan-500">Zonex?</span>
            </h2>
            <div className="mt-8 space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-3 w-3 rounded-full bg-blue-600 mt-2"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* വലത് വശം: പരമാവധി ഹൈറ്റിൽ ചിത്രം കാണിക്കുന്ന ഭാഗം */}
<div className="mt-10 lg:mt-0 flex justify-center items-center h-full w-full">
  <img 
    className="h-[700px] w-full object-cover rounded-none" 
    src={studentImg} 
    alt="Theresa" 
  />
</div>

        </div>
      </div>
    </div>
  );
}