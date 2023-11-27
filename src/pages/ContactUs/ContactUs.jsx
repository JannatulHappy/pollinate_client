

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section with Background Image */}
      <div
        className="px-4 py-20 text-white bg-center bg-cover sm:px-6 lg:px-8 lg:py-28"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/1600x900/?polling,survey)",
        }}
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto mt-3 text-xl sm:mt-4">
              We'd love to hear from you! Reach out to us through the following
              channels.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="px-4 py-16 bg-white sm:px-6 lg:py-24 lg:px-8">
        <div className="relative mx-auto divide-y-2 divide-green-200 max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact Information
            </h2>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Contact Method 1 */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-2 text-sm text-gray-500">
                  info@yourpollingsurveyapp.com
                </p>
              </div>
              {/* Contact Method 2 */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-2 text-sm text-gray-500">+1 (123) 456-7890</p>
              </div>
              {/* Contact Method 3 */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Address</h3>
                <p className="mt-2 text-sm text-gray-500">
                  123 Main Street, Cityville, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 py-16 bg-green-50 sm:px-6 lg:py-24 lg:px-8">
        <div className="relative mx-auto divide-y-2 divide-green-200 max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Use the form below to send us a message, and we'll get back to you
              as soon as possible.
            </p>
            {/* Contact Form Placeholder */}
            <form className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
