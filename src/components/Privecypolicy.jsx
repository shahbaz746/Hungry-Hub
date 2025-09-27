import React from "react";

const Privecypolicy = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-400 mb-6 text-center">
          🔒 Privacy Policy
        </h1>
        <p className="mb-6 text-gray-400 text-center">
          Your privacy is very important to us. This Privacy Policy explains how
          HungryHub collects, uses, and protects your personal information.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal information you provide (name, email, phone number).</li>
          <li>Feedback or messages you send via forms.</li>
          <li>Basic browsing data (IP address, device type, browser info).</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide and improve our recipes and services.</li>
          <li>To respond to your inquiries and feedback.</li>
          <li>To send you updates, newsletters, or promotional content (if you subscribe).</li>
          <li>To improve website performance and user experience.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          3. Sharing Your Information
        </h2>
        <p>
          We do not sell or rent your personal information to third parties.
          However, we may share it if required by law or with trusted service
          providers (such as email newsletter services).
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          4. Cookies & Tracking
        </h2>
        <p>
          HungryHub may use cookies or similar technologies to enhance your
          browsing experience, analyze traffic, and improve our services. You
          can disable cookies in your browser settings if you prefer.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          5. Data Security
        </h2>
        <p>
          We implement reasonable security measures to protect your information.
          However, please note that no system is 100% secure.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          6. Your Rights
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You may request access, update, or deletion of your data.</li>
          <li>You can unsubscribe from our communications at any time.</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          7. Third-Party Links
        </h2>
        <p>
          Our website may contain links to third-party sites (e.g., recipe
          sources, social media). We are not responsible for their privacy
          practices.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          8. Updates to Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a revised date.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          9. Contact Us
        </h2>
        <p>
          If you have any questions regarding this Privacy Policy, you can reach
          us at:
        </p>
        <ul className="mt-3 space-y-1">
          <li>📧 Email: shahbazrao445@gmail.com</li>
          <li>📱 WhatsApp: 03091798762</li>
          <li>
            🌐 Facebook:{" "}
            <a
              href="https://www.facebook.com/shahbaz.rao.1420/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Shahbaz Rao
            </a>
          </li>
          <li>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Shahbaz Tofeeq
            </a>
          </li>
          <li>
            📷 Instagram:{" "}
            <a
              href="https://www.instagram.com/shahabaz.rao05/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              @shahabaz.rao05
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-400 mt-10 text-center">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Privecypolicy;
