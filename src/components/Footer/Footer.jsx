import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-300 py-8 px-4 text-center">
      {/* Name at the top */}
      <h3 className="text-xl font-semibold mb-4 text-purple-500">Sujal Sen</h3>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <a href="https://github.com/Sujalsen07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sujal-sen-11044734a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/Sujalsen_07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaInstagram />
        </a>
      </div>

      {/* Navbar-style Links */}
      <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-4">
        <li><a href="#home" className="hover:text-white transition">Home</a></li>
        <li><a href="#about" className="hover:text-white transition">About</a></li>
        <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
      </ul>

      {/* Copyright */}
      <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Sujal Sen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
