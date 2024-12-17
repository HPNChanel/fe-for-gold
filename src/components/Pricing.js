import React from 'react';

function Pricing() {
  return (
    <div id="pricing" className="pricing-tables">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-heading">
              <h4>We Have The Best Pre-Order <em>Prices</em> You Can Get</h4>
              <img src="assets/images/heading-line-dec.png" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item-regular">
              <span className="price">$12</span>
              <h4>Standard Plan App</h4>
              <div className="icon">
                <img src="assets/images/pricing-table-01.png" alt="" />
              </div>
              <ul>
                <li>Lorem Ipsum Dolores</li>
                <li>20 TB of Storage</li>
                <li className="non-function">Life-time Support</li>
                <li className="non-function">Premium Add-Ons</li>
                <li className="non-function">Fastest Network</li>
                <li className="non-function">More Options</li>
              </ul>
              <div className="border-button">
                <a href="#">Purchase This Plan Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item-pro">
              <span className="price">$25</span>
              <h4>Business Plan App</h4>
              <div className="icon">
                <img src="assets/images/pricing-table-01.png" alt="" />
              </div>
              <ul>
                <li>Lorem Ipsum Dolores</li>
                <li>50 TB of Storage</li>
                <li>Life-time Support</li>
                <li>Premium Add-Ons</li>
                <li className="non-function">Fastest Network</li>
                <li className="non-function">More Options</li>
              </ul>
              <div className="border-button">
                <a href="#">Purchase This Plan Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item-regular">
              <span className="price">$66</span>
              <h4>Premium Plan App</h4>
              <div className="icon">
                <img src="assets/images/pricing-table-01.png" alt="" />
              </div>
              <ul>
                <li>Lorem Ipsum Dolores</li>
                <li>120 TB of Storage</li>
                <li>Life-time Support</li>
                <li>Premium Add-Ons</li>
                <li>Fastest Network</li>
                <li>More Options</li>
              </ul>
              <div className="border-button">
                <a href="#">Purchase This Plan Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
