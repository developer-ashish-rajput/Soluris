import React from 'react';
import './service.css';

const serviceData = [
  {
    id: 1,
    iconClass: 'flaticon-wind-energy-1',
    subTitle: '01 Service',
    title: 'Wind Turbines',
    text: 'Hybrid energy refers to the use of multiple sources ...',
    imgSrc: require('../../images/service-1.jpg'),
    link: 'https://kodesolution.com/html/2023/soluris-html/page-service-details.html',
  },
  {
    id: 2,
    iconClass: 'flaticon-settings-2',
    subTitle: '02 Service',
    title: 'Maintenance',
    text: 'Wind turbines are devices that convert wind energy ...',
    imgSrc: require('../../images/service-2.jpg'),
    link: 'https://kodesolution.com/html/2023/soluris-html/page-service-details.html',
  },
  {
    id: 3,
    iconClass: 'flaticon-windmill',
    subTitle: '03 Service',
    title: 'Wind Generators',
    text: 'Wind generators are devices that harness the ...',
    imgSrc: require('../../images/service-3.jpg'),
    link: 'https://kodesolution.com/html/2023/soluris-html/page-service-details.html',
  },
  {
    id: 4,
    iconClass: 'flaticon-solar-panel',
    subTitle: '04 Service',
    title: 'Solar PV Systems',
    text: 'A Solar PV (photovoltaic) system is a type of ...',
    imgSrc: require('../../images/service-4.jpg'),
    link: 'https://kodesolution.com/html/2023/soluris-html/page-service-details.html',
  },
];
// !Todo add sustainable services to backend
const Service = () => {
  return (
    <section className='services-section-home1 pb-lg-0'>
      <div className='auto-container'>
        <div className='sec-title text-center'>
          <span className='sub-title'>SPECIALIZE IN THE ENERGY SERVICE</span>
          <h2>Sustainable Energy Services</h2>
        </div>
        <div className='row'>
          {serviceData.map((service) => (
            <div
              key={service.id}
              className='service-block col-lg-3 col-sm-6 wow fadeInUp animated'
              style={{ visibility: 'visible', animationName: 'fadeInUp' }}
            >
              <div className='inner-box'>
                <div className='content-box'>
                  <i className={`icon ${service.iconClass}`}></i>
                  <span className='sub-title'>{service.subTitle}</span>
                  <h4 className='title'>
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <div className='text'>{service.text}</div>
                  <a href='https://kodesolution.com/html/2023/soluris-html/index.html' className='read-more'>
                    <i className='fa fa-chevron-right'></i>
                  </a>
                </div>
                <div className='image-box'>
                  <figure className='image'>
                    <a href={service.link}>
                      <img src={service.imgSrc} alt='' />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
