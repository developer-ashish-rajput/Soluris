import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';

const SERVICE_LIST = gql`
  query GetService {
    services {
      data {
        id
        attributes {
          title
          description
        }
      }
    }
  }
`;

const Service = () => {
  const { loading, data, error } = useQuery(SERVICE_LIST);
  const service = data?.services?.data;
  return (
    <div className='footer-column col-xl-3 col-sm-6'>
      <div className='footer-widget'>
        <h3 className='widget-title'>Service</h3>
        <ul className='user-links d-block'>
          {service?.map((item) => {
            console.log(item);
            return (
              <>
                <li className='current w-100'>
                  <NavLink to={item?.id}>{item?.attributes?.title}</NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Service;
