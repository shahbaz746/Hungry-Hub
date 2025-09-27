import React from "react";

const Tremandconditions = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-400 mb-6 text-center">
          📜 Terms & Conditions
        </h1>
        <p className="mb-6 text-gray-400 text-center">
          Welcome to HungryHub! By using our website or services, you agree to
          the following terms and conditions.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing or using HungryHub, you agree to be bound by these Terms
          & Conditions and our Privacy Policy. If you do not agree, please do
          not use our website.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          2. Use of Service
        </h2>
        <p>
          HungryHub provides food recipes for personal use only. You may not
          copy, distribute, or misuse the content for commercial purposes
          without prior written consent.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          3. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You agree to use HungryHub for lawful purposes only.</li>
          <li>
            You must not upload or share harmful, offensive, or misleading
            content.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            personal information.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          4. Recipes & Content Disclaimer
        </h2>
        <p>
          All recipes and food-related content are provided for informational
          purposes only. HungryHub is not responsible for dietary issues,
          allergies, or health effects that may arise from trying recipes. Please
          consult a professional if you have health concerns.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          5. Privacy & Data
        </h2>
        <p>
          Your privacy is important to us. We only collect necessary information
          such as email for communication. For more details, please refer to our{" "}
          <a href="/privacy" className="text-red-400 underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          6. Limitation of Liability
        </h2>
        <p>
          HungryHub shall not be held liable for any damages, losses, or issues
          arising from the use of our recipes, content, or website services.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          7. Changes to Terms
        </h2>
        <p>
          We may update these Terms & Conditions at any time. Continued use of
          HungryHub after changes means you accept the revised terms.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-red-300 mt-8 mb-3">
          8. Contact Us
        </h2>
        <p>
          If you have any questions about these Terms & Conditions, feel free to
          contact us:
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

export default Tremandconditions;
