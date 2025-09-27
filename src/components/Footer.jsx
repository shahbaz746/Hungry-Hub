import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold text-red-400 mb-4">📞 Contact</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/contact" className="hover:text-white">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:text-white">Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>

        {/* Personal Info */}
        <div>
          <h3 className="text-lg font-bold text-red-400 mb-4">👤 My Info</h3>
          <p className="flex items-center gap-2">
            <Mail size={18}/> shahbazrao445@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <MessageCircle size={18}/> 
            <a 
              href="https://wa.me/923091798762" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-green-400"
            >
              WhatsApp: 03091798762
            </a>
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/shahbaz.rao.1420/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Facebook size={22}/>
            </a>
            <a href="https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin size={22}/>
            </a>
            <a href="https://www.instagram.com/shahabaz.rao05/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <Instagram size={22}/>
            </a>
          </div>
        </div>

        {/* Feedback & Subscribe */}
        <div>
          <h3 className="text-lg font-bold text-red-400 mb-4">✍️ Feedback</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <textarea
              rows="3"
              placeholder="Your Feedback..."
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            ></textarea>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
              Send Feedback
            </button>
          </form>

          <h3 className="text-lg font-bold text-red-400 mt-6 mb-3">🔔 Subscribe & Follow</h3>
          <p className="text-sm">Stay connected with me on all social accounts 🚀</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HungryHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
