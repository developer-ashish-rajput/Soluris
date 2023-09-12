import React from 'react';
import Service1 from '../../images/service-1.jpg';
import Service2 from '../../images/service-2.jpg';
import Service3 from '../../images/service-3.jpg';
import Service4 from '../../images/service-4.jpg';
import './service.css';

const Service = () => {
  return (
    <section className='services-section-home1 pb-lg-0'>
      <div className='auto-container'>
        <div className='sec-title text-center'>
          <span className='sub-title'>SPECIALIZE IN THE ENERGY SERVICE</span>
          <h2>Sustainable Energy Services</h2>
        </div>
        <div className='row'>
          {/* Service Block 1 */}
          <div
            className='service-block col-lg-3 col-sm-6 wow fadeInUp animated'
            style={{ visibility: 'visible', animationName: 'fadeInUp' }}
          >
            <div className='inner-box'>
              <div className='content-box'>
                <i className='icon flaticon-wind-energy-1'></i>
                <span className='sub-title'>01 Service</span>
                <h4 className='title'>
                  <a href='#'>Wind Turbines</a>
                </h4>
                <div className='text'>Hybrid energy refers to the use of multiple sources ...</div>
                <a href='#' className='read-more'>
                  <i className='fa fa-chevron-right'></i>
                </a>
              </div>
              <div className='image-box'>
                <figure className='image'>
                  <a href='#'>
                    <img src={Service1} alt='' />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          {/* Service Block 2 */}
          <div
            className='service-block col-lg-3 col-sm-6 wow fadeInUp animated'
            data-wow-delay='200ms'
            style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}
          >
            <div className='inner-box'>
              <div className='content-box'>
                <i className='icon flaticon-settings-2'></i>
                <span className='sub-title'>02 Service</span>
                <h4 className='title'>
                  <a href='#'>Maintenance</a>
                </h4>
                <div className='text'>Wind turbines are devices that convert wind energy ...</div>
                <a href='#' className='read-more'>
                  <i className='fa fa-chevron-right'></i>
                </a>
              </div>
              <div className='image-box'>
                <figure className='image'>
                  <a href='#'>
                    <img src={Service2} alt='' />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          {/* Service Block 3 */}
          <div
            className='service-block col-lg-3 col-sm-6 wow fadeInUp animated'
            data-wow-delay='400ms'
            style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}
          >
            <div className='inner-box'>
              <div className='content-box'>
                <i className='icon flaticon-windmill'></i>
                <span className='sub-title'>03 Service</span>
                <h4 className='title'>
                  <a href='#'>Wind Generators</a>
                </h4>
                <div className='text'>Wind generators are devices that harness the ...</div>
                <a href='#' className='read-more'>
                  <i className='fa fa-chevron-right'></i>
                </a>
              </div>
              <div className='image-box'>
                <figure className='image'>
                  <a href='#'>
                    <img src={Service3} alt='' />
                  </a>
                </figure>
              </div>
            </div>
          </div>

          {/* Service Block 4 */}
          <div
            className='service-block col-lg-3 col-sm-6 wow fadeInUp animated'
            data-wow-delay='600ms'
            style={{ visibility: 'visible', animationDelay: '600ms', animationName: 'fadeInUp' }}
          >
            <div className='inner-box'>
              <div className='content-box'>
                <i className='icon flaticon-solar-panel'></i>
                <span className='sub-title'>04 Service</span>
                <h4 className='title'>
                  <a href='#'>Solar PV Systems</a>
                </h4>
                <div className='text'>A Solar PV (photovoltaic) system is a type of ...</div>
                <a href='#' className='read-more'>
                  <i className='fa fa-chevron-right'></i>
                </a>
              </div>
              <div className='image-box'>
                <figure className='image'>
                  <a href='#'>
                    <img src={Service4} alt='' />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
