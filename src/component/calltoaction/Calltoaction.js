import React from 'react';
import './Calltoaction.css';

const Calltoaction = () => {
  return (
    <section className='call-to-action-two py-0'>
      <div className='auto-container'>
        <div className='outer-box wow fadeIn animated' style={{ visibility: 'visible', animationName: 'fadeIn' }}>
          <div className='title-box'>
            <h3 className='title'>
              Fastest &amp; secure way to get <br /> clean, safe and renewable <br /> energy
            </h3>
          </div>
          <div className='btn-box'>
            <a href='#' className='theme-btn btn-style-three'>
              <span className='btn-title'>More Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calltoaction;
