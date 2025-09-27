import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-24 px-6 text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-red-400 mb-6 animate-pulse">
          🍴 Welcome to Hungry Hub
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Hungry Hub is your <span className="text-red-400 font-semibold">food recipe finder app</span> 
          where you can discover, explore, and enjoy <span className="font-bold">yummy dishes</span> 
          from around the globe 🌍.  
          Search recipes, browse by categories, or get random tasty surprises!
        </p>

        {/* Info Section */}
        <div className="bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl mb-14">
          <h2 className="text-3xl font-bold text-red-400 mb-6 text-center">
            🚀 Why Hungry Hub?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            <li>🔎 Instant search for your favorite recipes.</li>
            <li>🍽️ Explore categories like Italian, Indian, Japanese & more.</li>
            <li>🎲 Get random recipe ideas when you’re unsure what to cook.</li>
            <li>📖 Detailed cooking instructions & ingredients at your fingertips.</li>
          </ul>
          <p className="text-lg sm:text-xl leading-relaxed mt-6 text-center text-gray-300">
            Created with ❤️ and passion by <span className="text-red-400 font-semibold">Shahbaz Rao</span>,  
            making cooking fun, simple, and accessible for everyone.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-red-400 mb-6 text-center">
            📬 Contact Me
          </h2>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4 text-lg sm:text-xl">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-400" />
              <a href="mailto:shahbazrao445@gmail.com" className="hover:underline text-blue-400">
                shahbazrao445@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/923091798762"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-green-400"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-8 mt-8 text-3xl">
            <a
              href="https://www.facebook.com/shahbaz.rao.1420/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/shahabaz.rao05/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
