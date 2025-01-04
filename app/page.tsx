
const page = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Kalari Center App Development
      </h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">
          About the Kalari Center
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Kalari Center is dedicated to preserving and promoting the
          ancient martial art of <strong>Kalaripayattu</strong>. It offers
          training programs, workshops, and events designed for enthusiasts of
          all levels, from beginners to advanced practitioners.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">
          Our Services
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Personalized training sessions</li>
          <li>Workshops on traditional Kalaripayattu techniques</li>
          <li>Health and wellness programs</li>
          <li>Instructor-led classes for all age groups</li>
        </ul>
      </section>

      {/* Image Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">
          Our Facilities
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <Image
            src="https://via.placeholder.com/400x300"
            alt="Kalari Training Hub"
            className="rounded-lg shadow-lg"
          /> */}
          <p className="text-gray-700 leading-relaxed">
            Our state-of-the-art training hubs provide the perfect environment
            for mastering Kalaripayattu. Equipped with all necessary amenities,
            our centers are designed to enhance your training experience.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">
          Join Us Today!
        </h2>
        <p className="text-gray-700 mb-4">
          Ready to embark on your Kalaripayattu journey? Sign up now and
          experience the power of this ancient martial art.
        </p>
        <button className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition">
          Get Started
        </button>
      </section>
    </main>
  );
};

export default page;
