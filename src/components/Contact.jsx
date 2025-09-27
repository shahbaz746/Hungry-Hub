import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-24 px-6 text-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-red-400 mb-10">
          📬 Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-red-400">Contact Info</h2>
            <p className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-red-400" />
              <a
                href="mailto:shahbazrao445@gmail.com"
                className="hover:underline text-blue-400"
              >
                shahbazrao445@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3 mb-4">
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

            {/* Social Media */}
            <div className="flex gap-6 mt-6 text-2xl">
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

          {/* Feedback Form */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-red-400">
              ✨ Feedback
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 transition text-white font-bold"
              >
                Send Feedback
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800 p-8 rounded-3xl shadow-xl mt-12">
          <h2 className="text-2xl font-bold mb-6 text-red-400">❓ FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">
                🔎 How can I search for recipes?
              </h3>
              <p className="text-gray-300">
                You can use the search bar in the navbar or explore categories
                like Beef, Chicken, Seafood, etc.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                📱 Can I use Hungry Hub on mobile?
              </h3>
              <p className="text-gray-300">
                Yes, the app is fully responsive and works perfectly on mobile
                devices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                🍽️ Do you provide step-by-step instructions?
              </h3>
              <p className="text-gray-300">
                Yes, each recipe includes ingredients and cooking instructions
                to make it easy for you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                🆓 Is Hungry Hub free to use?
              </h3>
              <p className="text-gray-300">
                Absolutely! You can explore and enjoy all recipes for free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

