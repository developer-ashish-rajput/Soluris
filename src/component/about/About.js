import React from 'react';
import AboutHome1 from '../../images/about1-bg-home1.jpg';
import About1 from '../../images/about-1.jpg';
import About2 from '../../images/about-2.jpg';
import './About.css';
import { gql, useQuery } from '@apollo/client';

const ABOUT_US = gql`
  query GetHome {
    home {
      data {
        attributes {
          aboutus_label
          aboutus_title
          aboutus_description
          aboutus_subtitle
          aboutus_contact
          explore_now
          aboutus_image {
            data {
              attributes {
                url
              }
            }
          }
          aboutus_image2 {
            data {
              attributes {
                url
              }
            }
          }
          aboutus_bgimage {
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

const About = () => {
  const { loading, data, error } = useQuery(ABOUT_US);
  const home = data?.home?.data?.attributes;
  const image1 = home?.aboutus_image?.data?.attributes?.url;
  const image2 = home?.aboutus_image2?.data?.attributes?.url;
  const bgimage = home?.aboutus_bgimage?.data?.attributes?.url;
  return (
    <section id='about' className='about-section-home1'>
      <img className='about-bg-home1' src={bgimage} alt='' />
      <div className='anim-icons'>
        <div
          className='float-text wow zoomInLeft animated'
          style={{ visibility: 'visible', animationName: 'zoomInLeft' }}
        >
          Soluris
        </div>
      </div>
      <div className='auto-container'>
        <div className='row'>
          <div
            className='content-column col-lg-6 order-2 wow fadeInRight animated'
            style={{ visibility: 'visible', animationName: 'fadeInRight' }}
          >
            <div className='inner-column pl-10'>
              <div className='sec-title mb-40'>
                <span className='sub-title'>{home?.aboutus_label}</span>
                <h2>{home?.aboutus_title}</h2>
                <div className='text mb-30'>{home?.aboutus_description}</div>
                <h4>{home?.aboutus_subtitle}</h4>
              </div>
              <div className='company-cell mb-30 d-sm-flex align-items-center position-relative'>
                <div className='icon mb-3 mb-sm-0 mr-20'>
                  <i className='fa fa-phone-volume'></i>
                </div>
                <div>
                  <h5 className='title my-0'>{home?.aboutus_contact}</h5>
                  {/* !Todo Make contact number dynamic */}
                  <a className='subtitle' href='tel:+92 666 888 0000'>
                    +92 666 888 0000
                  </a>
                </div>
              </div>
              <a className='theme-btn btn-style-one mt-2' href='#'>
                {home?.explore_now}
              </a>
            </div>
          </div>

          <div
            className='image-column col-lg-6 wow fadeInLeft animated'
            style={{ visibility: 'visible', animationName: 'fadeInLeft' }}
          >
            <div className='inner-column position-relative mr-10'>
              <figure className='image-1'>
                <img src={image1} alt='' />
              </figure>
              <figure className='image-2 bounce-x'>
                <img src={image2} alt='' />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
