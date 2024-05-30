import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import './footer.scss'; // Ensure this CSS file exists for custom styles

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQHibu7GEjIwLQ/profile-displayphoto-shrink_200_200/0/1663907068590?e=2147483647&v=beta&t=0HMXlE4a6cXVutTCpoBV8-spLVuwp31ErW8wJzGEfkw"
              alt="Logo"
              className="footer-logo"
            />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">
                <p className="footer-title">About Us</p>
                <ul className="footer-list">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="footer-title">Events</p>
                <ul className="footer-list">
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/admin-events">Admin Events</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="footer-title">Support</p>
                <ul className="footer-list">
                  <li>
                    <Link to="/donate">Donate</Link>
                  </li>
                  <li>
                    <Link to="/fund">Alumni Fund</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="footer-title">Additional Links</p>
                <ul className="footer-list">
                  <li>
                    <Link to="/donations">Donations</Link>
                  </li>
                  <li>
                    <Link to="/council">Council</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MainFooter;
