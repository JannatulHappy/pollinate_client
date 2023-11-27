const AboutPage = () => {
  return (
    <div className="overflow-hidden bg-green-100">
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative py-16 bg-green-800">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://source.unsplash.com/1600x900/?polling,survey"
            alt="Polling and Survey"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative px-4 py-24 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Our Platform
          </h1>
          <p className="mt-6 text-xl text-white">
            Empowering Surveys and Polls for Informed Decisions
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-4 py-16 bg-white sm:px-6 lg:py-24 lg:px-8">
        <div className="relative mx-auto divide-y-2 divide-green-200 max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              We are on a mission to democratize opinions, making it easy for
              individuals and organizations to gather insights, understand
              trends, and make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-4 py-16 bg-green-100 sm:px-6 lg:py-24 lg:px-8">
        <div className="relative mx-auto divide-y-2 divide-green-200 max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Transparency, User-Centricity, Innovation, and Inclusivity drive
              our efforts to create a platform that resonates with your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 py-16 bg-white sm:px-6 lg:py-24 lg:px-8">
        <div className="relative mx-auto divide-y-2 divide-green-200 max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Our diverse and passionate team is committed to bringing the best
              experience to our users. Get to know the individuals driving the
              success of our platform.
            </p>
            {/* Team Members */}
            <div className="grid gap-16 mt-6 lg:grid-cols-2 xl:grid-cols-3">
              {/* Team Member 1 */}
              <div>
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src="https://i.ibb.co/ZgF5Zzz/avatar-1.png"
                  alt="Tom Koch"
                />
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  Tom Koch
                </h3>
                <p className="mt-2 text-sm text-gray-500">CEO of Unicorn</p>
              </div>
              {/* Team Member 2 */}
              <div>
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src="https://i.ibb.co/8BLjmqz/avatar-2.png"
                  alt="Alan Max"
                />
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  Alan Max
                </h3>
                <p className="mt-2 text-sm text-gray-500">CTO and Co-founder</p>
              </div>
              {/* Team Member 3 */}
              <div>
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src="https://i.ibb.co/y0KCX7p/avatar-3.png"
                  alt="Kera Joo"
                />
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  Kera Joo
                </h3>
                <p className="mt-2 text-sm text-gray-500">Lead Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="px-4 py-16 bg-green-100 sm:px-6 lg:py-24 lg:px-8">
        <div className="relative mx-auto divide-y-2 divide-green-200 max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Technology
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              We leverage cutting-edge technologies to ensure a seamless and
              secure experience for our users.
            </p>
            {/* Placeholder Technology Images */}
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Technology 1"
              />
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Technology 2"
              />
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Technology 3"
              />
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Technology 4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="px-4 py-16 bg-white sm:px-6 lg:py-24 lg:px-8">
        <div className="relative mx-auto divide-y-2 divide-green-200 max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Community Engagement
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              We actively engage with our community through forums, webinars,
              and social media. Your feedback is invaluable in shaping the
              future of our platform.
            </p>
            {/* Placeholder Community Images */}
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Community 1"
              />
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Community 2"
              />
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Community 3"
              />
              <img
                className="object-cover w-full h-32 rounded-lg"
                src="https://via.placeholder.com/400x200"
                alt="Community 4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
