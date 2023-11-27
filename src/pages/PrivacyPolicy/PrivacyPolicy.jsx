import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container p-8 mx-auto mt-8 bg-green-50">
      <h1 className="mb-4 text-3xl font-bold text-green-800">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Information We Collect</h2>
        <p className="text-gray-800">
          At Pollinate, we collect various types of information to provide you
          with a personalized and seamless experience on our platform. This
          includes:
        </p>
        <ul className="ml-6 text-gray-800 list-disc">
          <li>Your name and contact information, including email address.</li>
          <li>
            Demographic information such as location, preferences, and
            interests.
          </li>
          <li>Browsing and usage data to analyze and improve our services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">How We Use Your Information</h2>
        <p className="text-gray-800">
          We use the collected information for the following purposes:
        </p>
        <ul className="ml-6 text-gray-800 list-disc">
          <li>Personalization of user experience based on preferences.</li>
          <li>
            Communication regarding updates, promotions, and relevant
            information.
          </li>
          <li>
            Improvement of our services through analysis of user behavior.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Information Sharing</h2>
        <p className="text-gray-800">
          [Your Company Name] respects your privacy and does not sell, trade, or
          share your personal information with third parties without your
          consent, except as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-800">
          We use cookies and similar tracking technologies to enhance your
          browsing experience and analyze usage patterns. By using our platform,
          you consent to the use of these technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Data Security</h2>
        <p className="text-gray-800">
          [Your Company Name] employs industry-standard security measures to
          protect your data from unauthorized access, disclosure, alteration, or
          destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Your Choices</h2>
        <p className="text-gray-800">You have the right to:</p>
        <ul className="ml-6 text-gray-800 list-disc">
          <li>Access, correct, or delete your personal information.</li>
          <li>Opt-out of receiving promotional communications.</li>
          <li>Disable cookies in your browser settings.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Changes to This Policy</h2>
        <p className="text-gray-800">
          Pollinate reserves the right to update this privacy policy. We will
          notify you of any changes by posting the new policy on this page.
        </p>
      </section>
      <div className="container p-8 mx-auto mt-8 bg-gray-100">
        <h1 className="mb-4 text-3xl font-bold">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">User Responsibilities</h2>
          <p>
            By using Pollinate's services, you agree to the following
            responsibilities:
          </p>
          <ul className="ml-6 list-disc">
            <li>Respect the rights and privacy of other users.</li>
            <li>Adhere to community guidelines and standards.</li>
            <li>
              Provide accurate and truthful information when using our platform.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">Pro-User Memberships</h2>
          <p>
            Users who opt for a Pro membership enjoy additional benefits,
            including:
          </p>
          <ul className="ml-6 list-disc">
            <li>
              Access to premium features and advanced survey creation tools.
            </li>
            <li>Enhanced user privileges for a more tailored experience.</li>
            <li>Priority customer support for timely assistance.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">Prohibited Activities</h2>
          <p>
            Users are prohibited from engaging in activities that violate our
            terms, including but not limited to:
          </p>
          <ul className="ml-6 list-disc">
            <li>
              Attempting to manipulate survey results or engage in fraudulent
              activities.
            </li>
            <li>Disrupting the normal functioning of the platform.</li>
            <li>Violating the rights of other users or third parties.</li>
          </ul>
        </section>

        {/* Add more sections as needed */}
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default PrivacyPolicy;
