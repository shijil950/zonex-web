import React from 'react';

export default function Stats() {
  const statsData = [
    { label: "Students taught", value: "2,000+" },
    { label: "Active learners", value: "500+" },
    { label: "Mentoring students", value: "4 yrs" },
    { label: "Market experience", value: "7+ yrs" },
  ];

  return (
    <section className="bg-[#000] py-16 px-6 border-y border-white/10">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12 text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="p-4">
            <h3 className="text-4xl md:text-5xl font-black text-green-500 mb-2">
              {stat.value}
            </h3>
            <p className="text-white/70 font-medium text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}