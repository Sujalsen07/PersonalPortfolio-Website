import React, { useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
   { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  const handleMenuClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-4 md:px-6 py-4">
      <div className="flex justify-between items-center text-white">

       {/* Logo */}
<button
  onClick={() => handleMenuClick('about')}
  className="text-2xl md:text-3xl font-semibold cursor-pointer flex-shrink-0 focus:outline-none"
>
  <span className="text-[#8245ec]">&lt;</span>
  <span className="text-[#fcfcfd]">Sujal</span>
  <span className="text-[#8245ec]">/</span>
  <span className="text-[#fdfcfd]">Sen</span>
  <span className="text-[#8245ec]">&gt;</span>
</button>


        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6 text-gray-300 text-sm md:text-base">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-3 text-xl">
          <a
            href="https://www.linkedin.com/in/sujal-sen-11044734a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sujalsen07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec]"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <TfiMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 px-2 text-gray-300 space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer px-3 py-1.5 rounded hover:bg-[#8245ec1a] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
              onClick={() => handleMenuClick(item.id)}
            >
              {item.label}
            </div>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex justify-center gap-4 pt-3 text-xl border-t border-gray-600 mt-3">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8245ec]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8245ec]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
