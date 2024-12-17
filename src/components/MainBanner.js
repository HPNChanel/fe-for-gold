// src/components/MainBanner.js
import React from 'react';

function MainBanner() {
  return (
    <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>Get The Latest App From App Stores</h2>
                      <p>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                    </div>
                    <div className="col-lg-12">
                      <div className="white-button first-button scroll-to-section">
                        <a href="#contact">Free Quote <i className="fab fa-apple"></i></a>
                      </div>
                      <div className="white-button scroll-to-section">
                        <a href="#contact">Free Quote <i className="fab fa-google-play"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src="assets/images/slider-dec.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
