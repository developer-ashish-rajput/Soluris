import React from 'react';
import './Banner.css';
import { Slide, Fade, Flip } from 'react-awesome-reveal';
import slide1 from '../../images/1.jpg';
import slide2 from '../../images/2.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button';

const Banner = () => {
  let settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className='banner-slider__wrapper pt-0 pb-0 overflow-hidden'>
        <div className='banner-slider overflow-hidden'>
          <Slider {...settings}>
            <div
              className='item-1 slider-item '
              style={{ backgroundIimage: `url(${slide1})`, width: '1552px' }}
              // data-slick-index='-1'
              aria-hidden='true'
              // tabIndex='-1'
            >
              <div className='number' data-animation='fadeInUp' data-delay='0.6s'></div>
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='banner__content text-center'>
                      <h5
                        className='sub-title color-white mb-15 mb-sm-15 mb-xs-10'
                        data-animation='fadeInUp'
                        data-delay='0.5s'
                      >
                        <Fade>
                          <Fade>
                            <h1 className='text-color'>Renewable Solar Solutions</h1>
                          </Fade>
                        </Fade>
                      </h5>
                      <Fade>
                        <p
                          className='title font-size-22 text-color color-white mb-sm-30 mb-xs-20 mb-40'
                          data-animation='fadeInUp'
                          data-delay='1s'
                        >
                          A perfect blend of global experience and expertise to further our focus on technology
                          advancement
                        </p>
                      </Fade>

                      <div className='theme-btn__wrapper d-flex justify-content-center'>
                        <Slide direction='left'>
                          <Button text='Discober More' action='/#' />
                        </Slide>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='item-2 slider-item '
              style={{ backgroundIimage: `url(${slide2})`, width: '1552px' }}
              data-slick-index='0'
              aria-hidden='true'
              tabIndex='-1'
              role='tabpanel'
              id='slick-slide20'
              aria-describedby='slick-slide-control20'
            >
              <div
                className='number'
                data-animation='fadeInUp'
                data-delay='0.6s'
                style={{ animationDelay: '0.6s' }}
              ></div>
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='banner__content text-center'>
                      <h5
                        className='sub-title color-white mb-15 mb-sm-15 mb-xs-10'
                        data-animation='fadeInUp'
                        data-delay='0.5s'
                        style={{ animationDelay: '0.5s' }}
                      >
                        <Fade>
                          <h1 className='text-color'>Energize Society Reliable Energy</h1>
                        </Fade>
                      </h5>
                      <Fade>
                        <p
                          className='title font-size-22 text-color color-white mb-sm-30 mb-xs-20 mb-40'
                          data-animation='fadeInUp'
                          data-delay='1s'
                          style={{ animationDelay: '1s' }}
                        >
                          Ecology Limited are a fully independent, specialist ecological consultancy, working across the
                          globe
                        </p>
                      </Fade>

                      <div className='theme-btn__wrapper d-flex justify-content-center'>
                        <Slide direction='left'>
                          <Button text='Explore More' action='/#' />
                        </Slide>
                        <Slide direction='right'></Slide>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Banner;
