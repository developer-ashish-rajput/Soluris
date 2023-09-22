import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';

const PROJECT = gql`
  query GetProjects {
    projects {
      data {
        id
        attributes {
          title
          sub_title
          description
          ClientDetails {
            date
            name
            url
            location
          }
        }
      }
    }
  }
`;

const Project = () => {
  const { loading, data, error } = useQuery(PROJECT);
  const project = data?.projects?.data;
  return (
    <div className='footer-column col-xl-3 col-sm-6'>
      <div className='footer-widget gallery-widget'>
        <h3 className='widget-title'>Projects</h3>
        <ul className='user-links two-column d-block'>
          {project?.map((item, index) => {
            return (
              <>
                <li key={index} className='current w-100'>
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

export default Project;
