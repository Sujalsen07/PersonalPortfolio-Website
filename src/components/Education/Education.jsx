import React from 'react';
import csvtu from '../../assets/education_logo/csvtu.png';
import ssipmt from '../../assets/education_logo/ssipmt.jpg';
import NCS from '../../assets/education_logo/NCS.png';

const education = [
  {
    id: 0,
    img: csvtu,
    school: "CSVTU Bhilai, Raipur",
    date: "October 2022 - July 2026",
    desc: "I am pursuing my Bachelor's degree in Artificial Intelligence and Machine Learning from CSVTU Bhilai.",
    degree: "B.Tech",
    grade: "–"
  },
  {
    id: 1,
    img: ssipmt,
    school: "SSIPMT College, Raipur",
    date: "Sept 2022 - Aug 2026",
    grade: "7.4",
    desc: "I am pursuing B.Tech in AIML and working on real-world tech applications through various projects.",
    degree: "Bachelor of Technology",
  },
  {
    id: 2,
    img: NCS,
    school: "NCS School, Raipur",
    date: "Apr 2021 - March 2022",
    grade: "75%",
    desc: "Completed class 12 from CGBSE Board with PCM subjects (Physics, Chemistry, Math).",
    degree: "CGBSE (XII) - PCM",
  },
];

const Education = () => {
  return (
    <section
      id='education'
      className='py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom relative'
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic background and institutions that shaped my learning journey
        </p>
      </div>

      {/* Vertical Line */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white shadow-[0_0_25px_8px_rgba(255,255,255,0.7)] transform -translate-x-1/2 z-0"></div>

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-24 z-10">
          {education.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row items-center justify-between w-full"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Left Card */}
                  <div className="w-full md:w-[calc(50%-20px)] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-right">
                    <div className="flex justify-end mb-3">
                      <img
                        src={item.img}
                        alt="logo"
                        className="w-12 h-12 rounded-full object-contain border border-white"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.school}</h3>
                    <p className='text-purple-300 mt-1 text-sm'>{item.degree} • {item.date}</p>
                    <p className="text-gray-300 mt-2">{item.desc}</p>
                    <span className="text-sm text-gray-400 mt-2 block">Grade {item.grade}</span>
                  </div>

                  {/* Dot with Logo */}
                  <div className="w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_18px_6px_#8245ec] z-20 -ml-3 -mr-3 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt="logo"
                      className="w-5 h-5 rounded-full object-contain"
                    />
                  </div>

                  <div className="hidden md:block w-[calc(50%-20px)]"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block w-[calc(50%-20px)]"></div>

                  {/* Dot with Logo */}
                  <div className="w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_18px_6px_#8245ec] z-20 -ml-3 -mr-3 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt="logo"
                      className="w-5 h-5 rounded-full object-contain"
                    />
                  </div>

                  {/* Right Card */}
                  <div className="w-full md:w-[calc(50%-20px)] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-left">
                    <div className="flex justify-start mb-3">
                      <img
                        src={item.img}
                        alt="logo"
                        className="w-12 h-12 rounded-full object-contain border border-white"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.school}</h3>
                    <p className='text-purple-300 mt-1 text-sm'>{item.degree} • {item.date}</p>
                    <p className="text-gray-300 mt-2">{item.desc}</p>
                    <span className="text-sm text-gray-400 mt-2 block">CGPA: {item.grade}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
