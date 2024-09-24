import React, { useEffect, useState } from 'react';
import bannerOne from "../Images/b1.jpg";
import BannerTwo from "../Images/b2.jpg";
const HomePage = () => {

  const [currentImage, setCurrentImage] = useState(0);

  // Array of images to slide through
  const images = [
    bannerOne,  // Add first image
    BannerTwo,  // Add second image
  ];
 // useEffect to update background image at intervals
 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }, 5000); // Change image every 5 seconds

  // Cleanup interval on component unmount
  return () => clearInterval(interval);
}, [images.length]);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header
  className="relative bg-cover bg-center h-screen transition-all duration-1000 ease-in-out"
  style={{ backgroundImage: `url(${images[currentImage]})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Content */}
  <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
    {/* Responsive Heading */}
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
      A Vision for the Future
    </h1>

    {/* Responsive Subheading */}
    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
      Leadership. Integrity. Progress.
    </p>

    {/* Responsive Button */}
    <button className="px-6 md:px-8 py-2 md:py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
      Join the Movement
    </button>
  </div>
</header>


      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src={bannerOne} alt="Politician" className="w-full h-auto rounded-lg shadow-lg md:max-h-72" />
          </div>
          <div className="md:w-1/2 md:pl-12 text-gray-700">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-6">
              I have dedicated my life to public service, with a focus on building a better future for our community. Through hard work,
              integrity, and a commitment to the people, I’ve been at the forefront of meaningful change.
            </p>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-12">
            Together, we can achieve a brighter future by focusing on economic growth, education, healthcare, and justice for all. 
            It’s time for new ideas, bold leadership, and a commitment to progress.
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
            Support the Cause
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-yellow-500 py-20">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Stand With Us</h2>
          <p className="text-xl mb-6">Make a difference by joining our campaign and helping us shape the future.</p>
          <button className="px-8 py-3 bg-white text-yellow-500 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Get Involved
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2024 Dr Manoj Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
