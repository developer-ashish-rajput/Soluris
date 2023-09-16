import React from 'react';
import { NavLink } from 'react-router-dom';
import client_1 from '../../images/client1.jpg';
import client_2 from '../../images/client2.jpg';
import client_3 from '../../images/client3.jpg';
import icon_testi from '../../images/icon_tesimonial.png';
import { gql, useQuery } from '@apollo/client';

const testimonials = [
  {
    text: 'All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature-sensitive loads can be monitored at all times.',
    name: 'Jhon D. William',
    role: 'Co Founder',
    image: client_1,
  },
  {
    text: 'All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature-sensitive loads can be monitored at all times.',
    name: 'Aleesha Brown',
    role: 'Co Founder',
    image: client_2,
  },
  {
    text: 'All of our lorries are fitted with Satellite Tracking and Temperature Controlled monitoring systems so that the transportation of high value and temperature-sensitive loads can be monitored at all times.',
    name: 'Mike Hardon',
    role: 'Co Founder',
    image: client_3,
  },
];

const Testimonial = ({ data }) => {
  const testimonial = data?.attributes;
  const image = testimonial?.client_image?.data?.attributes?.url;
  console.log(image);
  return (
    <div className='col-lg-4 col-sm-6'>
      <div className='testimonial-block-two'>
        <div className='inner-content'>
          <div className='text'>{testimonial?.comments}</div>
          <div className='reviews'>
            <div className='stars'></div>
          </div>
          <div className='testi-quote'>
            <i className='fas fa-quote-right'></i>
          </div>
        </div>
        <div className='img-content d-flex align-items-end'>
          <div className='testi-img'>
            <img src={image} alt='' />
          </div>
          <div className='testi-holder ml-15'>
            <div className='text'>{testimonial?.client_designation}</div>
            <h5 className='my-0'>{testimonial?.client_name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const TESTIMONIAL_QUERY = gql`
  query GetTestimonial {
    testimonials {
      data {
        attributes {
          client_name
          client_designation
          comments
          client_rating
          client_image {
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

const TestimonialSection = () => {
  const { loading, data, error } = useQuery(TESTIMONIAL_QUERY);

  return (
    <div className='page-wrapper'>
      <section className='page-title page-banner'>
        <div className='auto-container'>
          <div className='title-outer text-center'>
            <h1 className='title'>Testimonial</h1>
            <ul className='page-breadcrumb'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>Testimonial</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='testimonial-section-home2 pb-60'>
        <div className='float-image'>
          <img src={icon_testi} alt='' />
        </div>
        <div className='auto-container'>
          <div className='row'>
            {data?.testimonials?.data?.map((testimonial, index) => (
              <Testimonial key={index} data={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
