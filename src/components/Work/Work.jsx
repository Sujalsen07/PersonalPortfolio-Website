import React from 'react';
import ecommImg from '../../assets/work_logo/ecomm.png'; // adjust path as needed
import ppw from '../../assets/work_logo/ppw.png';
import netflix from '../../assets/work_logo/netflix.png';
import senti1 from '../../assets/work_logo/senti1.png';

const projects = [
  {
    title: 'Netflix Clone',
    image: netflix,
    description:
      'Showcasing MERN stack skills through a Netflix Clone that combines visually appealing frontend design with backend services like JWT authentication and API handling.',
    github: 'https://github.com/Sujalsen07/Netflix-Clone',
  },
  {
    title: 'Personal Portfolio website',
    image: ppw,
    description:
      'A responsive personal portfolio built using React.js, Tailwind CSS, and Vite, featuring animated sections to showcase skills and projects effectively.',
    github: 'https://personal-portfolio-website-yyde-8trmglt4p-sujal-sens-projects.vercel.app/',
  },
  {
    title: 'Ecommerce Website using Django',
    image: ecommImg,
    description:
      'A dynamic e-commerce website built with Django, featuring user authentication, product listings, cart functionality, and an admin panel for seamless product and order management.',
    github: 'https://github.com/Sujalsen07/E-Commerce-website-using-Django',
  },
  {
    title: 'Sentimental Analysis',
    image: senti1,
    description:
      'A sentiment analysis web app built using machine learning that classifies text input into positive, negative, or neutral sentiments with a user-friendly interface and real-time results.',
    github: 'https://github.com/Sujalsen07/Sentiment-Analysis',
  },
];

const Work = () => {
  return (
    <section
      id='work'
      className='py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans relative bg-[#0e0e0e]'
    >
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-[#1e1e1e] border border-white rounded-2xl p-5 shadow-lg hover:shadow-[0_0_25px_white] transition duration-300 group'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover rounded-xl mb-4 border border-white'
            />
            <h3 className='text-2xl font-bold text-white mb-2'>
              {project.title}
            </h3>
            <p className='text-gray-300 text-[15px] mb-4'>
              {project.description}
            </p>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-5 py-2 mt-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300 font-medium'
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
