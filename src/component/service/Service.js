import React, { useState } from 'react';
import './service.css';
import TextTruncate from 'react-text-truncate';
import AlertDialog from './ServiceModal';

const serviceData = [
  {
    id: 1,
    iconClass: 'flaticon-wind-energy-1',
    subTitle: '01 Service',
    title: 'Design',
    text: 'Quick Solar Solutions has in house designer and experts to provide you CAD drawing for roof mounting, wall mounting, metal sheet mounting and custom design speciality solar structures. Our Qualified engineering team designs an optimum racking to provide you most durable solar support structures and flexibility to work with different dimensions of Pv module.',
    imgSrc: require('../../images/service-1.jpg'),
    link: '#',
  },
  {
    id: 2,
    iconClass: 'flaticon-settings-2',
    subTitle: '02 Service',
    title: 'Installation',
    text: 'The company has licenses to work on solar mounting projects. Our young and energetic installation crew are trained under expert guidance of Strut Support and work with on-site engineers to mount the solar racking systems',
    imgSrc: require('../../images/service-2.jpg'),
    link: '#',
  },
  {
    id: 3,
    iconClass: 'flaticon-support',
    subTitle: '03 Service',
    title: 'Techincal Support',
    text: 'Our highly engineered and robust solar structural systems are backed by excellent end-to-end technical support. All of our support team members have technical background and extensive experience in the solar industry. We are committed to exceed the expectations of our customers.',
    imgSrc: require('../../images/service-3.jpg'),
    link: '#',
  },
  {
    id: 4,
    iconClass: 'flaticon-solar-panel',
    subTitle: '04 Service',
    title: 'Supply',
    text: 'Module mounting structure along with accessories supply. With trusted partners, leased units and patented toolings, Its stands out as industry leading solar mounting manufacturers with dedicated and proven supply chain capability of delivering for ultra mega power projects.',
    imgSrc: require('../../images/service-4.jpg'),
    link: '#',
  },
];
// !Todo add sustainable services to backend
const Service = () => {
  const [modals, setModals] = useState([]);

  const handleModal = (index) => () => {
    let _modals = [...modals];
    _modals[index] = { open: true };
    setModals(_modals);
  };

  return (
    <section className='services-section-home1 pb-lg-0'>
      <div className='auto-container'>
        <div className='sec-title text-center'>
          <span className='sub-title'>SPECIALIZE IN THE ENERGY SERVICE</span>
          <h2>Sustainable Energy Services</h2>
        </div>
        <div className='row'>
          {serviceData.map((service, index) => (
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
                  <TextTruncate line={3} element='div' truncateText='...' text={service?.text} />
                  {/* <div className='text'>{service.text}</div> */}
                  <div title='Read more' className='read-more' onClick={handleModal(index)}>
                    <i className='fa fa-chevron-right'></i>
                  </div>
                  {
                    <AlertDialog
                      key={`modal-${index}`}
                      text={service?.text}
                      title={service?.title}
                      open={modals[index]?.open}
                      modals={modals}
                      index={index}
                      setModals={setModals}
                    />
                  }
                </div>
                <div className='image-box'>
                  <figure className='image'>
                    <a>
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
