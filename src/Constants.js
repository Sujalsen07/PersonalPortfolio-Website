// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';

import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import ardentsoft from './assets/company_logo/ardentsoft.webp';


// Education Section Logo's
import csvtu from './assets/education_logo/csvtu.png';
import NCS from './assets/education_logo/NCS.png';
import ssipmt from './assets/education_logo/ssipmt.jpg';

// Project Section Logo's
import ecomm from './assets/work_logo/ecomm.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ardentsoft,
      role: "python with Ml",
      company: "Ardent Softwares",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "python",
        "numpy",
        "pandas",
        "matplotlib",
        "scikitlearn",
        "Googlecollab",
        "Jupyter Notebook",
      ],
    },
    
    
  ];
  
  export const education = [
    {
      id: 0,
      img: csvtu,
      school: "csvtu University raipur",
      date: "october 2022 - July 2026",
      grade: "7.4 CGPA",
      desc: "I am pursuing my Bachelors degree in Artificial Intelligence and Machine Learning ",
      degree: "B Tech",
    },
    {
      id: 1,
      img: ssipmt,
      school: "ssipmt College, Raipur",
      date: "Sept 2022 - Aug 2026",
      grade: "70.32%",
      desc: "I completed my Bachelor's degree in AIML from ssipmt College, Raipur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at ssipmt College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology",
    },
    {
      id: 2,
      img: NCS,
      school: "NCS School ,Raipur",
      date: "Apr 2021 - March 2022",
      grade: "75%",
      desc: "I completed my class 12 education from NCS School ,Raipur under the CGBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CGBSE(XII) - PCM",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Ecommerce Website using Django",
      description:
        "A powerful and user-friendly Ecommerce website for buying the products.",
      image: ecomm,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
     
    },
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A personal portfolio website which is showcasing my Frontend skills by using frameworks and libraries and responsiveness.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      
    },
];