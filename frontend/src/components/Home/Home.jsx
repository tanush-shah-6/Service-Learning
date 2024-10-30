import React, { useEffect } from "react";
import "./Home.css"; // Ensure this path is correct
import Swiper from "swiper"; // Import Swiper for the slider functionality

const Home = () => {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true,
    });

    // Create a script element for the Elfsight widget
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "defer");
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      {/* Donate Button */}
      <div className="donate-button" onClick={() => window.location.href='#'}>
        Donate
      </div>

      {/* Hero Section */}
      <div className="hero">
        <img
          src="/images/WhatsApp Image 2024-09-11 at 14.05.00.jpeg"
          alt="Hero"
        />
      </div>

      {/* Initiatives Section */}
      <section>
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-center text-4xl mb-12 m-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            OUR INITIATIVES.
          </h1>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    alt="Skill Development"
                    className="w-full h-64 object-cover"
                    height="400"
                    src="/images/explore it skil development.jpeg"
                    width="600"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 m-3">
                      Skill Development
                    </h2>
                    <hr className="border-t-2 border-gray-300 mb-4" />
                    <p className="text-gray-700 m-3">
                      ExploreIT has conducted a variety of skill-based trainings, workshops, webinars, competitions, and internship drives with the objective of equipping the youth with the finest set of skills and abilities to succeed as the leaders of our future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    alt="Environmental Projects"
                    className="w-full h-64 object-cover"
                    height="400"
                    src="/images/explore it enviromental proejcts.jpeg"
                    width="600"
                  />
                  <div className="p-9">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 m-3">
                      Environmental Projects
                    </h2>
                    <hr className="border-t-2 border-gray-300 mb-5" />
                    <p className="text-gray-700 m-3">
                      Our team has organized cleaning drives, tree donation and plantation drives, and climate awareness campaigns in order to empower the youth to take climate action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    alt="Eco-expeditions"
                    className="w-full h-64 object-cover"
                    height="400"
                    src="/images/explore it image 3.jpeg"
                    width="600"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 m-3">
                      Eco-expeditions
                    </h2>
                    <hr className="border-t-2 border-gray-300 mb-4" />
                    <p className="text-gray-700 m-3">
                      We have organized several expeditions, with agendas ranging from research and educational tours to eco-trails and celebrations. Our expeditions are guided by a holistic itinerary, with sustainability as our main focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination"></div>
            {/* Add Navigation */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>
      <br /><br />
      <div className="elfsight-app-fe684ddf-b897-41a0-b31a-c10145630e4d" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Home;
