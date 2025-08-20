import React from 'react';
import Tilt from 'react-parallax-tilt';

// Logos
import htmlLogo from '../../assets/tech_logo/html.png';
import cssLogo from '../../assets/tech_logo/css.png';
import jsLogo from '../../assets/tech_logo/javascript.png';
import reactLogo from '../../assets/tech_logo/reactjs.png';
import tailwindLogo from '../../assets/tech_logo/tailwindcss.png';
import viteLogo from '../../assets/tech_logo/Vitejs.png';

import nodeLogo from '../../assets/tech_logo/nodejs.png';
import mongoLogo from '../../assets/tech_logo/mongodb.png';
import djangoLogo from '../../assets/tech_logo/django.png';

import pythonLogo from '../../assets/tech_logo/python.png';
import cppLogo from '../../assets/tech_logo/cpp.png';
import sqlLogo from '../../assets/tech_logo/mysql.png';

import githubLogo from '../../assets/tech_logo/github.png';
import vscodeLogo from '../../assets/tech_logo/vscode.png';
import figmaLogo from '../../assets/tech_logo/figma.png';

const skillsData = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'React.js', logo: reactLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
      { name: 'Vite', logo: viteLogo },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', logo: nodeLogo },
      { name: 'MongoDB', logo: mongoLogo },
      { name: 'Django (Basics)', logo: djangoLogo },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'C/C++', logo: cppLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id='skills'
      className='py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient text-white'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl sm:text-5xl font-bold text-white'>SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skills Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10'>
        {skillsData.map((category, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={false}
            scale={1.02}
            transitionSpeed={1500}
            className='w-full'
          >
            <div
              className='bg-gray-900 ring-2 ring-white/60 p-6 min-h-[280px] flex flex-col justify-center rounded-3xl transition duration-300 ease-in-out hover:shadow-[0_0_30px_5px_rgba(130,69,236,0.6)]'
            >
              <h3 className='text-2xl font-bold text-[#8245ec] mb-5 text-center'>{category.title}</h3>
              <ul className='space-y-3 text-gray-400 text-center'>
                {category.items.map((item, i) => (
                  <li key={i} className='flex items-center gap-3 justify-center'>
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.name}
                        className='w-6 h-6 object-contain'
                      />
                    )}
                    <span className='text-lg'>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
