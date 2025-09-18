import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32 relative z-10"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        
        {/* Left Side - Heading and Paragraph */}
        <motion.div
          className="text-white flex-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi, I am 
          </h1>

          <h2 className="text-[#f9f8f9] text-4xl md:text-5xl font-bold mb-4 leading-tight">Sujal Sen</h2>

          {/* skills heading */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'> 
            <span className='text-white'>I am an AIML Student</span>
          </h3>

          <p className="text-gray-300 text-lg md:text-xl mb-6">
            I’m an <span className="text-[#8245ec] font-medium">AI & Machine Learning student</span> and a passionate <span className="text-[#8245ec] font-medium">Full Stack Developer</span> who enjoys building intelligent, scalable, and modern web applications. Always learning, always building!
          </p>

          {/* Resume Button */}
          <a 
            href="https://drive.google.com/file/d/18CHk_GSLo9jM_1YI2SsFRaUeSm0g_lR3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-[#8245ec] text-white font-semibold 
              hover:scale-105 hover:bg-[#6f38d8] transition-all duration-300 border border-[#a47eff]
              shadow-lg shadow-[#8245ec]/50"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Right Side - Image */}
        <div className="flex-1 w-full flex justify-center">
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
            <img 
              src={profileImage} 
              alt="Sujal Sen"
              className="w-96 h-96 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
