import React from 'react';

const CourseDetails = () => {
  const courses = [
    {
      title: "FOREX/STOCK MARKET BASIC STRATEGIC COURSE",
      duration: "1 Month",
      fee: "5,000/-",
      details: [
        "Introduction to Forex & Global Markets",
        "Currency Pairs, Leverage, Margin & Orders",
        "Fundamental Analysis",
        "Technical Analysis",
        "Trading Strategy",
        "Trading Psychology",
        "Risk Management & Money Management",
        "Live Trading Sessions",
        "Strategy Building & Back testing",
        "Final Assessment / Certification",
        "Live Trading + Market Simulation"
      ]
    },
    {
      title: "FOREX/STOCK MARKET ADVANCED STRATEGIC COURSE",
      duration: "1 Month",
      fee: "15,000/-",
      details: [
        "Technical Analysis and Fundamental analysis",
        "Support and Resistance",
        "Candlestick Patterns, Chart Patterns, Indicators",
        "Placing orders and Stoploss",
        "Position sizing and risk management",
        "Introduction to Derivatives",
        "How to trade Future",
        "Introduction to options",
        "Option chains",
        "Option buying",
        "Strategy Building, Back testing"
      ]
    },
    {
      title: "FOREX & STOCK MARKET PERSONAL MENTORSHIP COURSE",
      duration: "2 Months",
      fee: "25,000/-",
      details: [
        "Advanced Technical Analysis",
        "Advanced Risk Management",
        "Algo trading bot handle",
        "Live Market Simulations",
        "Portfolio Management",
        "Final Assessment / Certification",
        "Refund policy",
        "Funded account worth 5K",
        "Bot access",
        "Trading cafe access ",
        "4 proven strategies",
        "Iceeds embassy approved certificate",
        "No duration",
      ]
    },
    {
      title: "FOREX & STOCK MARKET PERSONAL MENTORSHIP COURSE (Unlimited)",
      duration: "No Fixed Duration",
      fee: "45,000/-",
      details: [
        "Everything in Personal Mentorship",
        "Algo trading bot handle",
        "Lifetime Support",
        "Advanced Institutional Strategies",
        "Funded account",
        "Copy trading support",
        "Funded account 10K worth",
        "Crypto stock and forex",
        "Mutual fund Sip and swp",
        "Health insurance and term insurance"
      ]
    }
  ];

  return (
    <div className="bg-[#0b0f19] text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">COURSE DETAILS</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div key={index} className="bg-[#1a1f2e] p-8 rounded-2xl border border-gray-700 shadow-lg">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">{course.title}</h3>
            <p className="font-semibold">Duration: {course.duration}</p>
            <p className="font-semibold mb-6">Fee: {course.fee}</p>
            <ul className="space-y-2 text-gray-300">
              {course.details.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;