import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from 'react';
import useMediaQuery from './useMediaQuery';
import TemporaryDrawer from './Mob-Header';

const Header = () => {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery('(min-width: 1200px)');

  console.log({ isDesktop });
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath((prev) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return pathname;
    });
  }, [pathname]);

  // window.scrollTo(0,400);

  console.log({ pathname });
  const [showTopBtn, setShowTopBtn] = useState(false);
  // Sticky Menu Area
  useEffect(() => {
    if (pathname !== '/') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > -10) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
      return setShowTopBtn(true);
    }

    if (pathname === '/') {
      window.addEventListener('scroll', () => {
        console.log('object');
        if (window.scrollY > 10) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }
  }, [pathname]);

  console.log({ showTopBtn });

  return (
    <header className={`sticky-header ${showTopBtn ? 'visible' : 'hidden'}`}>
      <div className='company-logo'>
        <header className='header header-1 transparent header-2'>
          <div id='header' className={showTopBtn ? `main-header-wraper` : !isDesktop ? `py-3 headerbg` : 'headerbg'}>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='d-flex align-items-center justify-content-between'>
                    {!isDesktop && (
                      <div className='social-profile last_no_bullet d-xl-block'>
                        <ul>
                          <li>
                            <a href='/'>
                              <img className='logo' src={logo} width='120px' alt='logo' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className='header-logo d-block d-xl-none'>
                      <div className='logo'>
                        <a href='#'></a>
                      </div>
                    </div>
                    <div className='social-profile last_no_bullet d-xl-block d-none'>
                      <ul>
                        <li>
                          <a href='/'>
                            <img src={logo} width='120px' alt='logo' />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className='header-menu d-none d-xl-block'>
                      <div className='main-menu'>
                        <ul>
                          <li className='dropdown'>
                            <NavLink className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'} to='/'>
                              Home
                            </NavLink>
                          </li>
                          <li className='dropdown'>
                            <a className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'} href='/#about'>
                              About
                            </a>
                          </li>
                          <li className='dropdown'>
                            <a className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'} href='/#services'>
                              Our Services<i className='bi bi-caret-down-fill'></i>
                            </a>
                            <ul
                              class='row'
                              style={{
                                width: '850px',
                                borderRadius: '15px',
                              }}
                            >
                              <li class='col-sm-2 header-col-sm-2'>
                                <li class='dropdown-header'>Software Services</li>
                                <li>
                                  <a href='#'>Application Development</a>
                                </li>
                                <li>
                                  <a href='#'>Maintainance &amp; Support</a>
                                </li>
                                <li>
                                  <a href='#'>Web Enabling of Legacy Applicatio</a>
                                </li>
                                <li>
                                  <a href='#'>Mobile Applications</a>
                                </li>
                              </li>
                              <li class='col-sm-2 header-col-sm-2 header-col-sm-2 header-col-sm-2'>
                                <li class='dropdown-header'>CRM Development</li>
                                <li>
                                  <a href='#'>Consulting Services</a>
                                </li>
                                <li>
                                  <a href='#'>Integration</a>
                                </li>
                                <li>
                                  <a href='#'>Maintenance &amp; Support</a>
                                </li>
                              </li>
                              <li class='col-sm-2 header-col-sm-2'>
                                <li class='dropdown-header'>Website Development</li>
                                <li>
                                  <a href='#'>Website Design</a>
                                </li>
                                <li>
                                  <a href='#'>Ecommerce Website</a>
                                </li>
                                <li>
                                  <a href='#'>CMS Website</a>
                                </li>
                                <li>
                                  <a href='#'>Flash Application Development</a>
                                </li>
                              </li>
                              <li class='col-sm-2 header-col-sm-2'>
                                <li class='dropdown-header'>Training &amp; Placement</li>
                                <li>
                                  <NavLink to='/transformation-outsourcing'>Transformation Outsourcing</NavLink>
                                </li>
                                <li>
                                  <NavLink to='/skill-development'>Skill Development</NavLink>
                                </li>
                                <li>
                                  <NavLink to='/staffing-solutions'>Staffing Solutions</NavLink>
                                </li>
                                <li>
                                  <NavLink to='/product-development'>Product Development</NavLink>
                                </li>
                              </li>
                              <li class='col-sm-2 header-col-sm-2'>
                                <li class='dropdown-header'>Much more</li>
                                <li>
                                  <a href='#'>Salesforce Services</a>
                                </li>
                                <li>
                                  <a href='#'>Digital Marketing</a>
                                </li>
                                <li>
                                  <a href='#'>Easy Customizable</a>
                                </li>
                              </li>
                            </ul>
                          </li>
                          <li className='dropdown'>
                            <NavLink className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'} to='/portfolio'>
                              Portfolio
                            </NavLink>
                          </li>
                          <li className='dropdown'>
                            <NavLink className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'} to='/team'>
                              Team
                            </NavLink>
                          </li>
                          <li className='dropdown'>
                            <NavLink className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'} to='/staff-ops'>
                              Staff OPS
                            </NavLink>
                          </li>
                          <li className='dropdown'>
                            <NavLink
                              className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'}
                              to='/affiliate-partner'
                            >
                              Affiliate
                            </NavLink>
                          </li>
                          <li className='dropdown'>
                            <a className={!showTopBtn ? 'nav-item-default' : 'nav-item-main'} href='/#contact'>
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='header-right d-flex align-items-center'>
                      <div className='horizontal-bar'></div>
                      <div className='mobile-nav-bar d-block ml-3 ml-sm-5 d-xl-none'>
                        <div className='mobile-nav-wrap'>
                          {!isDesktop && !showTopBtn && <TemporaryDrawer isMobile={!isDesktop} />}
                          {!isDesktop && showTopBtn && <TemporaryDrawer />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </header>
  );
};

export default Header;
