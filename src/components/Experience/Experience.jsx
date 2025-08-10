import React from 'react';

const experiences = [
  {
    title: 'Web Development Intern',
    year: '2025',
    company:'XYZ',
    description: 'Worked on frontend components using React and TailwindCSS.',
  },
  {
    title: 'Machine Learning Intern',
    year: '2023',
    company:'Ardent Softwares',
    description: ' developed a Facial Emotion Recognition system using Machine Learning that analyzes facial features to detect emotions such as happiness, anger, sadness, and surprise — enhancing the way machines understand and respond to human behavior in real time.',
  },
];

const Experience = () => {
  return (
    <section
      id='experience'
      className='py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom relative'
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical White Lightning Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white transform -translate-x-1/2 shadow-[0_0_25px_8px_rgba(255,255,255,0.7)] z-0"></div>

        <div className="relative flex flex-col gap-24 z-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full`}
            >
              {/* Left card */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-[calc(50%-20px)] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-right">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className='text-gray-300 mt-2'>{item.company}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                    <span className="text-sm text-purple-300 mt-2 block">{item.year}</span>
                  </div>

                  {/* Glowing Dot */}
                  <div className="w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_18px_6px_#8245ec] z-20 -ml-3 -mr-3">

                  </div>

                  <div className="hidden md:block w-[calc(50%-20px)]"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block w-[calc(50%-20px)]"></div>

                  {/* Glowing Dot */}
                  <div className="w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_18px_6px_#8245ec] z-20 -ml-3 -mr-3">
                    <img
    src="src\assets\company_logo\ardentsoft.webp" // <-- Adjust the path accordingly
    alt="dot-icon"
    className="w-6 h-6 object-contain"
  />
                  </div>

                  {/* Right card */}
                  <div className="w-full md:w-[calc(50%-20px)] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-left">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className='text-gray-300 mt-2'>{item.company}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                    <span className="text-sm text-purple-300 mt-2 block">{item.year}</span>
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

export default Experience;
