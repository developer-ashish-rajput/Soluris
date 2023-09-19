import React from 'react';
import './Calltoaction.css';
import { gql, useQuery } from '@apollo/client';

const CALLTOACTION = gql`
  query GetHome {
    home {
      data {
        attributes {
          more_services_title
        }
      }
    }
  }
`;

const Calltoaction = () => {
  const { loading, data, error } = useQuery(CALLTOACTION);
  const home = data?.home?.data?.attributes;
  return (
    <section className='call-to-action-two py-0'>
      <div className='auto-container'>
        <div className='outer-box wow fadeIn animated' style={{ visibility: 'visible', animationName: 'fadeIn' }}>
          <div className='title-box'>
            <h3 className='title'>{home?.more_services_title}</h3>
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
