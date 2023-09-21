import React from 'react';
import './Footer.css';
import { gql, useQuery } from '@apollo/client';
import QuickLink from './QuickLink';
import Project from './Project';
import Service from './Service';

const FOOTER_DATA = gql`
  query GetFooter {
    footer {
      data {
        attributes {
          address
          email
          contact_no
          enable_service
          enable_project
          facebook_url
          twitter_url
          pintrest_url
          instagram_url
          quick_link
        }
      }
    }
  }
`;

const FOOTER_LOGO = gql`
  query GetHome {
    home {
      data {
        attributes {
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

const Footer = () => {
  const { loading, data, error } = useQuery(FOOTER_DATA);
  const { data: data_logo } = useQuery(FOOTER_LOGO);

  const footer = data?.footer?.data?.attributes;
  const footer_logo = data_logo?.home?.data?.attributes?.logo?.data?.attributes?.url;
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
                    <img src={footer_logo} width={150} alt='' />
                  </a>
                </div>
                <p className='text mb-2'>{footer?.address}</p>
                <p className='mb-2'>
                  <a className='text' href='#'>
                    {footer?.email}
                  </a>
                </p>
                <p>
                  <a className='text-white' href={`tel:${footer?.contact_no}`}>
                    {footer?.contact_no}
                  </a>
                </p>
              </div>
            </div>
            {/* <!--Footer Column--> */}
            <Service />
            {/* <!--Footer Column--> */}
            <Project />
            {/* <!--Footer Column--> */}
            <QuickLink />
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
