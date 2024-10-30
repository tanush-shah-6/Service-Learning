import React from "react";
import './Project8.css';

const Project8 = () => {
  return (
    <div>
      {/* First Section */}
      <div className="main first">
        <div className="overlay">
          <h1 style={{ color: '#d6ffd0', fontSize: '50px' }}>Project 8</h1>
          <br />
          <h2>Planting 1,00,000 trees Pan-India.</h2>
          <br />
          <p>
            Per Capita Carbon emissions in India are 2.7 tonnes/annum.
            <br />
            To put that into perspective, each person must plant 340 trees to offset this carbon emission.
            <br />
            Project 8 aims to create a carbon-neutral India by planting the ideal tree for the right
            location, based on extensive geographical research and impact.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="main second">
        <div className="grid-overlay">
          <h1>REDUCE YOUR CARBON FOOTPRINT</h1>
          <br />
          <h2 style={{ color: '#d6ffd0' }}>PROJECT 8 OBJECTIVES</h2>
          <br />
          <br />
          <div className="grid-section">
            <div className="grid-block">
              <h3>PLANTING NATIVE TREES</h3>
              <p>
                We will plant and maintain 1,00,000+ trees pan-India. All trees planted will be native
                to the region chosen. This is because native trees have a high survival rate and
                require less maintenance.
              </p>
            </div>
            <div className="grid-block">
              <h3>SUPPORTING LOCAL FARMERS</h3>
              <p>
                We donate native fruit trees to farmers, as fruit trees have a high commercial value.
                This acts as an additional source of income to the local farmers and supports their
                livelihood.
              </p>
            </div>
            <div className="grid-block">
              <h3>RAISING AWARENESS</h3>
              <p>
                We work on spreading awareness about native trees and the detrimental impact of exotic
                trees. We educate citizens about carbon emissions and offsetting techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section with elfsight widget */}
      <div className="first">
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-0d68f374-3a86-4fcf-9a60-792331f72c2a" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};

export default Project8;
