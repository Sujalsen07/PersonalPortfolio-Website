import React from 'react';
import ecommImg from '../../assets/work_logo/ecomm.png'; // adjust path as needed
import ppw from '../../assets/work_logo/ppw.png';
import ED from '../../assets/work_logo/ED.png';

const projects = [
  {
    title: 'Facial Emotion Recognition',
    image: ED,
    description:
      'I developed a facial emotion recognition system using machine learning that detects emotions in real time.',
    github: 'https://github.com/your-username/project1',
  },
  {
    title: 'Personal Portfolio website',
    image: ppw,
    description:
      'A responsive personal portfolio built using React.js, Tailwind CSS, and Vite, featuring animated sections to showcase skills and projects effectively.',
    github: 'https://github.com/your-username/project2',
  },
  {
    title: 'Ecommerce Website using Django',
    image: ecommImg,
    description:
      'A dynamic e-commerce website built with Django, featuring user authentication, product listings, cart functionality, and an admin panel for seamless product and order management.',
    github: 'https://github.com/your-username/project3',
  },
  {
    title: 'Sentimental Analysis',
    image: 'https://via.placeholder.com/400x220.png?text=Project+4',
    description:
      'A sentiment analysis web app built using machine learning that classifies text input into positive, negative, or neutral sentiments with a user-friendly interface and real-time results.',
    github: 'https://github.com/your-username/portfolio',
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
