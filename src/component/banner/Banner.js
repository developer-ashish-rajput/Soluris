import React from 'react';
import './Banner.css';
import { Slide, Fade, Flip } from 'react-awesome-reveal';
import slide1 from '../../images/1.jpg';
import slide2 from '../../images/2.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button';
import { gql, useQuery } from '@apollo/client';

const BANNER = gql`
  query GetBanner {
    banners {
      data {
        attributes {
          title
          sub_title
          image {
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

const Banner = () => {
  const { loading, data, error } = useQuery(BANNER);
  const banner = data?.banners?.data;
  let settings = {
    autoplay: true,
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
          {banner?.length && (
            <Slider {...settings}>
              {banner?.map((item, index) => {
                const bgimage = item?.image?.data?.attributes?.url;
                return (
                  <div
                    key={index}
                    className={`item-${index + 1} slider-item `}
                    style={{ backgroundIimage: { bgimage }, width: '1552px' }}
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
                                  <h1 className='text-color'>{item?.attributes?.title}</h1>
                                </Fade>
                              </Fade>
                            </h5>
                            <Fade>
                              <p
                                className='title font-size-22 text-color color-white mb-sm-30 mb-xs-20 mb-40'
                                data-animation='fadeInUp'
                                data-delay='1s'
                              >
                                {item?.attributes?.sub_title}
                              </p>
                            </Fade>

                            <div className='theme-btn__wrapper d-flex justify-content-center'>
                              <Slide direction='left'>
                                <Button text='Discover More' action='/#' />
                              </Slide>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </section>
    </div>
  );
};

export default Banner;
