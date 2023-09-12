import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='main-footer style-one'>
      <div className='bg-image' style={{ backgroundImage: 'url(./images/background/5.jpg)' }}></div>
      {/* <!--Widgets Section--> */}
      <div className='widgets-section'>
        <div className='auto-container'>
          <div className='row'>
            {/* <!--Footer Column--> */}
            <div className='footer-column col-xl-3 col-sm-6'>
              <div className='footer-widget about-widget'>
                <div className='logo'>
                  <a href='#'>
                    <img src='./Soluris - Ecology &amp; Solar HTML Template _ Home Page 01_files/logo-2.png' alt='' />
                  </a>
                </div>
                <p className='text mb-2'>
                  012 Broklyn Street, 57 <br className='d-none d-xl-block' /> New York, USA
                </p>
                <p className='mb-2'>
                  <a className='text' href='#'>
                    needhelp@domain.com
                  </a>
                </p>
                <p>
                  <a className='text-white' href='tel:9993330000'>
                    999 333 0000
                  </a>
                </p>
              </div>
            </div>
            {/* <!--Footer Column--> */}
            <div className='footer-column col-xl-3 col-sm-6'>
              <div className='footer-widget'>
                <h3 className='widget-title'>Service</h3>
                <ul className='user-links'>
                  <li>
                    <a href='#'>Reliability &amp; Punctuality</a>
                  </li>
                  <li>
                    <a href='#'>Trusted Franchise</a>
                  </li>
                  <li>
                    <a href='#'>Warehoues Storage</a>
                  </li>
                  <li>
                    <a href='#'>Real Time Tracking</a>
                  </li>
                  <li>
                    <a href='#'>Transparent Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Footer Column--> */}
            <div className='footer-column col-xl-3 col-sm-6'>
              <div className='footer-widget gallery-widget'>
                <h3 className='widget-title'>Projects</h3>
                <ul className='user-links two-column'>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>New Projects</a>
                  </li>
                  <li>
                    <a href='#'>Our History</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                  <li>
                    <a href='#'>Blog Post</a>
                  </li>
                  <li>
                    <a href='#'>Press Release</a>
                  </li>
                  <li>
                    <a href='#'>Help Topics</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Terms Of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Footer Column--> */}
            <div className='footer-column col-xl-3 col-sm-6'>
              <div className='footer-widget'>
                <h3 className='widget-title'>Newsletter</h3>
                <div className='widget-content'>
                  <div className='subscribe-form'>
                    <div className='text'>Subscribe our newsletter to get our latest update &amp; news</div>
                    <form method='post' action='#'>
                      <div className='form-group'>
                        <input
                          type='email'
                          name='email'
                          className='email'
                          value=''
                          placeholder='Email Address'
                          required=''
                        />
                        <button type='button' className='theme-btn btn-style-one'>
                          <span className='btn-title'>
                            <i className='fa fa-paper-plane'></i>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Footer Bottom--> */}
      <div className='footer-bottom'>
        <div className='auto-container'>
          <div className='inner-container'>
            <div className='copyright-text'>
              <p>
                © Copyright 2023 by <a href='#'>Company.com</a>
              </p>
            </div>
            <ul className='social-icon-two'>
              <li>
                <a href='#'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-pinterest'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
