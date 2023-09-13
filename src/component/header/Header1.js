import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-2.png';

const Header1 = () => {
  return (
    <header className='main-header header-style-one fixed-header'>
      {/* Header Top */}
      <div className='header-top'>
        <div className='top-left'>
          {/* Info List */}
          <ul className='list-style-one'>
            <li>
              <i className='fa fa-map-marker-alt'></i> 380 St Kilda Road, Australia
            </li>
            <li>
              <i className='fa fa-clock'></i> Mon - Sat: 8am - 5pm
            </li>
            <li>
              <i className='fa fa-phone-volume'></i> <a href='tel:+92(8800)87890'>+92 (8800) 87890</a>
            </li>
          </ul>
        </div>

        <div className='top-right'>
          <ul className='social-icon-one'>
            <li>
              <a href='#'>
                <span className='fab fa-facebook-square'></span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='fab fa-twitter'></span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='fab fa-pinterest-p'></span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='fab fa-instagram'></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Header Top */}

      {/* Header Lower */}
      <div className='header-lower'>
        {/* Main box */}
        <div className='main-box'>
          <div className='logo-box'>
            <div className='logo'>
              <a href='index.html'>
                <img src={logo} alt='' title='Tronis' />
              </a>
            </div>
          </div>

          {/* Nav Box */}
          <div className='nav-outer'>
            <nav className='nav main-menu'>
              <ul className='navigation'>
                <li className='current'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className=''>
                  <NavLink to='#'>About</NavLink>
                </li>
                <li className=''>
                  <NavLink to='/testimonial'>Testimonial</NavLink>
                </li>
                <li className=''>
                  <NavLink to='/team'>Team</NavLink>
                </li>

                <li className=''>
                  <NavLink to='/service-list'>Service</NavLink>
                </li>

                <li className=''>
                  <NavLink to='/project-list'>Projects</NavLink>
                </li>

                <li className=''>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>

                {/* Add more menu items here */}
              </ul>
            </nav>
            {/* Main Menu End */}
            <div className='outer-box'>
              {/* <button className='ui-btn ui-btn search-btn'>
                <span className='icon lnr lnr-icon-search'></span>
              </button> */}
              {/* <a href='#' className='ui-btn'>
                <i className='lnr-icon-shopping-cart'></i>
              </a> */}
              <a href='#' className='theme-btn btn-style-one alternate'>
                <span className='btn-title'>Get A Quote</span>
              </a>

              {/* Mobile Nav Toggler */}
              <div className='mobile-nav-toggler'>
                <span className='icon lnr-icon-bars'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Lower */}

      {/* Mobile Menu */}
      <div className='mobile-menu'>
        <div className='menu-backdrop'></div>
        {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
        <nav className='menu-box'>
          <div className='upper-box'>
            <div className='nav-logo'>
              <a href='index.html'>
                <img src='images/logo-2.png' alt='' title='Fesho' />
              </a>
            </div>
            <div className='close-btn'>
              <i className='icon fa fa-times'></i>
            </div>
          </div>

          <ul className='navigation clearfix'>
            {/* Keep This Empty / Menu will come through Javascript */}
            <li className='current dropdown'>
              <a href='index.html'>Home</a>
              <ul>
                <li>
                  <a href='index.html'>Home page 01</a>
                </li>
                <li>
                  <a href='index-2.html'>Home page 02</a>
                </li>
                <li className='dropdown'>
                  <a href='#'>Single Styles</a>
                  <ul>
                    <li>
                      <a href='index-1-single.html'>Single Style One</a>
                    </li>
                    <li>
                      <a href='index-2-single.html'>Single Style Two</a>
                    </li>
                  </ul>
                  <div className='dropdown-btn'>
                    <i className='fa fa-angle-down'></i>
                  </div>
                </li>
                <li className='dropdown'>
                  <a href='#'>Dark Styles</a>
                  <ul>
                    <li>
                      <a href='index-1-dark.html'>Dark Style One</a>
                    </li>
                    <li>
                      <a href='index-2-dark.html'>Dark Style Two</a>
                    </li>
                  </ul>
                  <div className='dropdown-btn'>
                    <i className='fa fa-angle-down'></i>
                  </div>
                </li>
                <li>
                  <a href='index-1-rtl.html'>RTL Style One</a>
                </li>
              </ul>
              <div className='dropdown-btn'>
                <i className='fa fa-angle-down'></i>
              </div>
            </li>
            {/* Add more menu items here */}
          </ul>

          <ul className='contact-list-one'>
            <li>
              {/* Contact Info Box */}
              <div className='contact-info-box'>
                <i className='icon lnr-icon-phone-handset'></i>
                <span className='title'>Call Now</span>
                <a href='tel:+92880098670'>+92 (8800) - 98670</a>
              </div>
            </li>
            <li>
              {/* Contact Info Box */}
              <div className='contact-info-box'>
                <span className='icon lnr-icon-envelope1'></span>
                <span className='title'>Send Email</span>
                <a href='mailto:help@company.com'>help@company.com</a>
              </div>
            </li>
            <li>
              {/* Contact Info Box */}
              <div className='contact-info-box'>
                <span className='icon lnr-icon-clock'></span>
                <span className='title'>Send Email</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className='social-links'>
            <li>
              <a href='#'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-facebook-f'></i>
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
        </nav>
      </div>
      {/* End Mobile Menu */}

      {/* Header Search */}
      <div className='search-popup'>
        <span className='search-back-drop'></span>
        <button className='close-search'>
          <span className='fa fa-times'></span>
        </button>
        <div className='search-inner'>
          <form method='post' action='index.html'>
            <div className='form-group'>
              <input type='search' name='search-field' value='' placeholder='Search...' required='' />
              <button type='submit'>
                <i className='fa fa-search'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* End Header Search */}

      {/* Sticky Header */}
      <div className='sticky-header'>
        <div className='auto-container'>
          <div className='inner-container'>
            {/* Logo */}
            <div className='logo'>
              <a href='index.html' title=''>
                <img src='images/logo.png' alt='' title='' />
              </a>
            </div>

            {/* Right Col */}
            <div className='nav-outer'>
              {/* Main Menu */}
              <nav className='main-menu'>
                <div className='navbar-collapse show collapse clearfix'>
                  <ul className='navigation clearfix'>
                    {/* Keep This Empty / Menu will come through Javascript */}
                    <li className='current'>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className=''>
                      <NavLink to='#'>About</NavLink>
                    </li>
                    <li className=''>
                      <NavLink to='/testimonial'>Testimonial</NavLink>
                    </li>
                    <li className=''>
                      <NavLink to='/team'>Team</NavLink>
                    </li>

                    <li className=''>
                      <NavLink to='/service-list'>Service</NavLink>
                    </li>

                    <li className=''>
                      <NavLink to='/project-list'>Projects</NavLink>
                    </li>

                    <li className=''>
                      <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    {/* Add more menu items here */}
                  </ul>
                </div>
              </nav>
              {/* Main Menu End */}
              {/* Mobile Navigation Toggler */}
              <div className='mobile-nav-toggler'>
                <span className='icon lnr-icon-bars'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
    </header>
  );
};

export default Header1;
