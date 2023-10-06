import React from 'react';
import VideoPng from '../../images/video.png';
import './Whychooseus2.css';
import { gql, useQuery } from '@apollo/client';

const WHYCHOOSE_US2 = gql`
  query GetHome {
    home {
      data {
        attributes {
          whychooseus_label
          whychooseus_title
          whychooseus_description
          # whychooseus2_service_label1
          # whychooseus2_service_label2
          # whychooseus_service_description1
          # whychooseus2_service_description2
          whychooseus_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    newProduct {
      data{
        attributes{
          title
          label1
          label2 
          label3 
          label4 description1 description2 description3 description4
        }
      }
    }
  }
`;

const Whychooseus2 = () => {
  const { loading, data, error } = useQuery(WHYCHOOSE_US2);
  const home = data?.home?.data?.attributes;
  const image = home?.whychooseus_image?.data?.attributes?.url;
  const new_product = data?.newProduct?.data?.attributes;

console.log(new_product);
  return (
    <section className='why-choose-us-home1'>
      <div className='bg-image d-none d-lg-block' style={{ backgroundImage: 'url(images/icons/video.png)' }}></div>
      <div className='bg-shape'>
        <div className='shape' style={{ backgroundImage: image }}></div>
      </div>
      <div className='auto-container'>
        <div className='row'>
          {/* Content Column */}
          <div className='content-column col-lg-6'>
            <div
              className='inner-column wow fadeInLeft animated'
              style={{ visibility: 'visible', animationName: 'fadeInLeft' }}
            >
              <div className='sec-title light'>
                <span className='sub-title'>{home?.whychooseus_label}</span>
                <h2>{home?.whychooseus_title}</h2>
                <div className='text'>{home?.whychooseus_description}</div>
              </div>
              <div className='row'>
                {/* Feature Block Four 1 */}
                <div className='sec-title light'>
                <h2>{new_product?.title}</h2>
                </div>
                <div className='feature-block-four col-sm-6'>
                  <div className='inner-box'>
                  <i className='icon flaticon-solar-panel-2'></i>
                    <h4 className='title'>{new_product?.label1}</h4>
                    <p className='text'>{new_product?.description1}</p>
                  </div>
                </div>
                {/* Feature Block Four 2 */}
                <div className='feature-block-four col-sm-6'>
                  <div className='inner-box'>
                    <i className='icon flaticon-solar-panel-2'></i>
                    <h4 className='title'>{new_product?.label2}</h4>
                    <p className='text'>{new_product?.description2}</p>
                  </div>
                </div>

                <div className='feature-block-four col-sm-6'>
                  <div className='inner-box'>
                    <i className='icon flaticon-solar-panel-2'></i>
                    <h4 className='title'>{new_product?.label3}</h4>
                    <p className='text'>{new_product?.description3}</p>
                  </div>
                </div>

                <div className='feature-block-four col-sm-6'>
                  <div className='inner-box'>
                    <i className='icon flaticon-solar-panel-2'></i>
                    <h4 className='title'>{new_product?.label4}</h4>
                    <p className='text'>{new_product?.description4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className='image-column col-lg-6'>
            <div className='image-box hide-desktop'>
              <img src={VideoPng} alt='' />
            </div>
            <div className='inner-column'>
              <div className='info-box bounce-y'>
                <i className='icon flaticon-support'></i>
                <strong>Meet Our Expert Members</strong>
              </div>
              <div className='video-box'>
                <a href='https://www.youtube.com/watch?v=Fvae8nxzVz4' className='play-now-two lightbox-image'>
                  <i className='icon fa fa-play'></i>
                </a>
                <img
                  src='./Soluris - Ecology & Solar HTML Template _ Home Page 01_files/arrow-3.png'
                  alt=''
                  className='arrow d-none d-sm-block'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus2;
