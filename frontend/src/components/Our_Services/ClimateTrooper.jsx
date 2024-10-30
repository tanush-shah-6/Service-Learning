import React from 'react';
import './ClimateTroopers.css';

const ClimateTroopers = () => {
  return (
    <div>
      <div className="background-container">
        <div className="content-box">
          <h1 className="title-text">CLIMATE TROOPERS</h1>
          <br />
          <h3 className="description-text">Facilitating the youth to take part<br /> in the global movement against climate change.</h3>
          <p className="para">The Climate Troopers Program educates, <br />serves and enables young innovators to build a healthier Earth.</p>
        </div>
      </div>

      <div className="bg-wrapper">
        <div className="bg-overlay"></div>
        <div className="content-container">
          <div className="point">
            <h1 className="content-header">LEARN</h1>
            <p className="content-paragraph">We offer training sessions, webinars, and interactions led by experts in the environmental arena.</p>
          </div>
          <div className="point">
            <h1 className="content-header">SHARE</h1>
            <p className="content-paragraph">We encourage participants to network, educate, and influence their peers towards environmental awareness.</p>
          </div>
          <div className="point">
            <h1 className="content-header">ACT</h1>
            <p className="content-paragraph">We facilitate the implementation of team-driven environmental and community initiatives.</p>
          </div>
        </div>
      </div>

      <div className="background-wrapper">
        <div className="overlay"></div>
        <div className="info-container">
          <div className="info-row">
            <div className="info-item">
              <h3 className="section-title">Campus Activities</h3>
              <p className="section-description">Campus activities must be provided by the Climate Troopers Core team to the Central Core Team. These activities are local to the institution. Examples of some activities are setting up waste segregation bins, creating a butterfly habitat, etc.</p>
            </div>
            <div className="info-item">
              <h3 className="section-title">Campaign Activities</h3>
              <p className="section-description">Centralised activities will be delegated by the Central Core team to all registered institutions on an annual basis. These activities are compulsory and need to be executed according to the guidelines prescribed by the Central core team. These activities may include hosting webinars, workshops, green audits, tree plantation drives, etc. to raise environmental awareness.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="kit-section">
        <div className="kit-content">
          <h2 className="kit-heading">CLIMATE TROOPER KIT</h2>
          <img src="./images/screenshot.jpeg" alt="Climate Trooper Kit" className="kit-image" />
        </div>
      </section>
    </div>
  );
};

export default ClimateTroopers;
