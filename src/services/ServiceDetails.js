import React from 'react';
import './ServiceDetails.css';
import details_img1 from '../images/service-details.jpg';
import details_img2 from '../images/service-d1.jpg';
import details_img3 from '../images/service-d2.jpg';
import { NavLink, useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import no_image from '../images/no-image.png'

const DetailsData = {
  id: 1,
  BannerImg: details_img1,
  TitleOverview: 'Service Overview',
  OverviewDesc1:
    'Lorem ipsum is simply free text used by copytyping refreshing.Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta suntex plicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
  OverviewDesc2:
    ' When an unknown printer took a galley of type and scrambled it to make a type specimen book . It has survived not only centuries, but also the leap into electronic typesetting remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit',
  TitleService: 'Service Center',
  ServiceDesc1:
    'Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  ServiceDesc2:
    'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur',
  ServiceImg1: details_img2,
  Img1Desc:
    'Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing',
  ServiceImg2: details_img3,
  Img2Desc:
    'Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing',
  titleQuestion: 'Frequently Asked Questions',
  QuestionDisc:
    'Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
};

const SERVICE_DETAILS = gql`
  query GetService($id: ID!) {
    service(id: $id) {
      data {
        attributes {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          # secondary_description
          # secondary_title
          # center_description

          contact_title
          contact_no
          # overview_title
          help_text
          banner_image {
            data {
              attributes {
                url
              }
            }
          }
          secondary_title
          secondary_description
        }
      }
    }
  }
`;

const ServiceDetails = ({ services }) => {
  //  const details = DetailsData;
  const { id } = useParams();
  //!Todo add services query  !Important
  const { loading, error, data } = useQuery(SERVICE_DETAILS, {
    variables: {
      id: id,
    },
  });

  const details = data?.service?.data?.attributes;

  console.log(details);
  return (
    <>
      <section className='page-title page-banner'>
        <div className='auto-container'>
          <div className='title-outer text-center'>
            <h1 className='title'>Service Details</h1>
            <ul className='page-breadcrumb'>
              {services?.map((service) => (
                <>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>Services</li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* <!--Start Services Details--> */}
      <section className='services-details'>
        <div className='container'>
          <div className='row'>
            {/* <!--Start Services Details Sidebar--> */}
            <div className='col-xl-4 col-lg-4'>
              <div className='service-sidebar'>
                {/* <!--Start Services Details Sidebar Single--> */}
                <div className='sidebar-widget service-sidebar-single'>
                  <div className='sidebar-service-list'></div>

                  <div className='service-details-help'>
                    <div className='help-shape-1'></div>
                    <div className='help-shape-2'></div>
                    <h2 className='help-title'>
                      {/* Contact with <br /> us for any <br /> advice */}
                      {details?.contact_title}
                    </h2>
                    <div className='help-icon'>
                      <span className=' lnr-icon-phone-handset'></span>
                    </div>
                    <div className='help-contact'>
                      <p>{details?.help_text}</p>
                      <a href='tel:12463330079'>{details?.contact_no}</a>
                    </div>
                  </div>

            
                </div>
           
              </div>
            </div>

            {/* <!--Start Services Details Content--> */}
            <div className='col-xl-8 col-lg-8'>
              <div key={details?.id} className='services-details__content'>
                <img src={details?.banner_image?.data?.attributes?.url || no_image} alt='' />
                <h3 className='mt-4'>{details?.title}</h3>
                <p>{details?.description}</p>
                {/* <p>{details?.OverviewDesc2}</p> */}
                <div className='content mt-40'>
                  <div className='text'>
                    <h3>{details?.secondary_title}</h3>
                    <ReactMarkdown>{details?.secondary_description}</ReactMarkdown>
                    <blockquote className='blockquote-one'>{details?.ServiceDesc2}</blockquote>
                  </div>
                  <div className='feature-list mt-4'>
                    <div className='row clearfix'>
                      {details?.ServiceImg1 && (
                        <div className='col-lg-6 col-md-6 col-sm-12 column'>
                          <img className='mb-3' src={details?.ServiceImg1} alt='images' />
                          <p>{details?.Img1Desc}</p>
                        </div>
                      )}
                      {details?.ServiceImg2 && (
                        <div className='col-lg-6 col-md-6 col-sm-12 column'>
                          <img className='mb-3' src={details?.ServiceImg2} alt='images' />
                          <p>{details?.ServiceDesc2}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
