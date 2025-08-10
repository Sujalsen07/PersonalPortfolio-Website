import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x0s5r7t',    // Your EmailJS service ID
        'template_qojxxya',   // Your EmailJS template ID
        formRef.current,
        'A-4ZWTn28SHmSKHxM'   // Your EmailJS public key
      )
      .then(
        (result) => {
          toast.success('🚀 Message sent successfully!');
          formRef.current.reset(); // Reset form after sending
        },
        (error) => {
          toast.error('❌ Something went wrong. Please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <section
      id='contact'
      className='py-20 px-[6vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom relative text-white'
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-3 text-base md:text-lg font-medium">
          I'd love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.4)] ring-1 ring-white/40 transition duration-300 space-y-5"
      >
        <h3 className="text-center text-2xl font-semibold mb-4">
          Connect with me <span role="img" aria-label="boost">⚡</span>
        </h3>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full p-2.5 bg-white/5 text-white placeholder-gray-400 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="your@email.com"
              className="w-full p-2.5 bg-white/5 text-white placeholder-gray-400 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Subject <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="subject"
            required
            placeholder="What's this about?"
            className="w-full p-2.5 bg-white/5 text-white placeholder-gray-400 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            required
            placeholder="Write your message..."
            rows="4"
            className="w-full p-2.5 bg-white/5 text-white placeholder-gray-400 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2.5 px-8 rounded-full transition-all duration-300 shadow-lg shadow-pink-500/40 text-sm"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
