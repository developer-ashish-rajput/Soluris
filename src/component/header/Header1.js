import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/qss-logo.png';
import $ from 'jquery';
import { gql, useQuery } from '@apollo/client';

const HEADER = gql`
  query GetHome {
    home {
      data {
        attributes {
          address
          time
          contact_no
          logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const HEADER_DATA = gql`
  query GetHeader {
    headers {
      data {
        attributes {
          title
          routing
        }
      }
    }
  }
`;

const Header1 = () => {
  const { loading, data, error } = useQuery(HEADER);
  const { data: data_1 } = useQuery(HEADER_DATA);

  const home = data?.home?.data?.attributes;
  const logo_2 = home?.logo?.data?.attributes?.url;

  const header = data_1?.headers?.data;
  console.log(data);

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($('.main-header').length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $('.header-style-one');
      var scrollLink = $('.scroll-to-top');
      var sticky_header = $('.main-header .sticky-header');
      if (windowpos > 100) {
        sticky_header.addClass('fixed-header animated slideInDown');
        scrollLink.fadeIn(300);
      } else {
        sticky_header.removeClass('fixed-header animated slideInDown');
        scrollLink.fadeOut(300);
      }
      if (windowpos > 1) {
        siteHeader.addClass('fixed-header');
      } else {
        siteHeader.removeClass('fixed-header');
      }
    }
  }

  useEffect(() => {
    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
      $('.main-header .navigation li.dropdown').append(
        '<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>',
      );
    }
  }, []);

  let body = $('body');
  function renderMobileMenu() {
    //  $(body).toggleClass('mobile-menu-visible')
    // setTimeout(() => {
    body?.toggleClass('mobile-menu-visible');
    // console.log("Hello");
  }

  useEffect(() => {
    if (body) renderMobileMenu();
  }, [body]);

  return (
    <header className='main-header header-style-one fixed-header'>
      {/* Header Top */}
      <div className='header-top'>
        <div className='top-left'>
          {/* Info List */}
          <ul className='list-style-one'>
            <li>
              <i className='fa fa-map-marker-alt'></i>
              {home?.address}
            </li>
            <li>
              <i className='fa fa-clock'></i>
              {home?.time}
            </li>
            <li>
              <i className='fa fa-phone-volume'></i> <a href='tel:+92(8800)87890'>{home?.contact_no}</a>
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
              <a href='#'>
                <img src={logo_2} width={150} alt='' title='Tronis' />
              </a>
            </div>
          </div>

          {/* Nav Box */}
          <div className='nav-outer'>
            <nav className='nav main-menu'>
              <ul className='navigation'>
                {header?.map((item) => {
                  return (
                    <>
                      <li className='current'>
                        <NavLink to={item?.attributes?.routing}>{item?.attributes?.title}</NavLink>
                      </li>
                    </>
                  );
                })}
                {/* <li className=''>
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
                </li> */}

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
              <div className='mobile-nav-toggler mobile-menu-visible' onClick={renderMobileMenu}>
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
              <a href='#'>
                <img src={logo} alt='' title='Fesho' />
              </a>
            </div>
            <div className='close-btn' onClick={renderMobileMenu}>
              <i className='icon fa fa-times'></i>
            </div>
          </div>

          <ul className='navigation clearfix'>
            {/* Keep This Empty / Menu will come through Javascript */}
            {header?.map((item) => {
              return (
                <>
                  <li className='current' onClick={renderMobileMenu}>
                    <NavLink to={item?.attributes?.routing}>{item?.attributes?.title}</NavLink>
                  </li>
                </>
              );
            })}
            {/* <li className='current dropdown'>
              <a href='#'>Home</a>
              <ul>
                <li>
                  <a href='#'>Home page 01</a>
                </li>
                <li>
                  <a href='#'>Home page 02</a>
                </li>
                <li className='dropdown'>
                  <a href='#'>Single Styles</a>
                  <ul>
                    <li>
                      <a href='#'>Single Style One</a>
                    </li>
                    <li>
                      <a href='#'>Single Style Two</a>
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
                      <a href='#'>Dark Style One</a>
                    </li>
                    <li>
                      <a href='#'>Dark Style Two</a>
                    </li>
                  </ul>
                  <div className='dropdown-btn'>
                    <i className='fa fa-angle-down'></i>
                  </div>
                </li>
                <li>
                  <a href='#'>RTL Style One</a>
                </li>
              </ul>
              <div className='dropdown-btn'>
                <i className='fa fa-angle-down'></i>
              </div>
            </li> */}
            {/* Add more menu items here */}
          </ul>

          <ul className='contact-list-one'>
            <li>
              {/* Contact Info Box */}
              <div className='contact-info-box'>
                <i className='icon lnr-icon-phone-handset'></i>
                <span className='title'>Call Now</span>
                <a href={`tel:${home?.contact_no}`}>{home?.contact_no}</a>
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
                <span className='title'>Time</span>
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
          <form method='post' action='#'>
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
              <a href='#' title=''>
                <img src={logo} alt='' title='' />
              </a>
            </div>

            {/* Right Col */}
            <div className='nav-outer'>
              {/* Main Menu */}
              <nav className='main-menu'>
                <div className='navbar-collapse show collapse clearfix'>
                  <ul className='navigation clearfix'>
                    {/* Keep This Empty / Menu will come through Javascript */}
                    {header?.map((item) => {
                      return (
                        <>
                          <li className='current'>
                            <NavLink to={item?.attributes?.routing}>{item?.attributes?.title}</NavLink>
                          </li>
                        </>
                      );
                    })}
                    {/* <li className='current'>
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
                    </li> */}
                    {/* Add more menu items here */}
                  </ul>
                </div>
              </nav>
              {/* Main Menu End */}
              {/* Mobile Navigation Toggler */}
              <div className='mobile-nav-toggler' onClick={renderMobileMenu}>
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
