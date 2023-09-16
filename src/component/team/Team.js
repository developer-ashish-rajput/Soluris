import React from 'react';
import { NavLink } from 'react-router-dom';
import team_1 from '../../images/team-1.jpg';
import team_2 from '../../images/team-2.jpg';
import team_3 from '../../images/team-3.jpg';
import team_4 from '../../images/team-4.jpg';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
// import './Team.css'

const teamMembers = [
  {
    name: 'Kevin Hardson',
    role: 'Engineer',
    image: team_1,
  },
  {
    name: 'Jerome Bell',
    role: 'Project Manager',
    image: team_2,
  },
  {
    name: 'John Brown',
    role: 'Engineer',
    image: team_3,
  },
  {
    name: 'Courtney Henry',
    role: 'Engineer',
    image: team_4,
  },
  {
    name: 'Jerome Bell',
    role: 'Project Manager',
    image: team_2,
  },
  {
    name: 'John Brown',
    role: 'Engineer',
    image: team_3,
  },
];

const TeamMember = ({ data }) => {
  const teamMember = data?.attributes;
  const image = teamMember?.image?.data?.attributes?.url;

  return (
    <div className='col-lg-4 col-sm-6'>
      <div className='team-block'>
        <div className='inner-box'>
          <div className='image-box'>
            <figure className='image'>
              <a href='#'>
                <img src={image} alt={teamMember.name} />
              </a>
            </figure>
          </div>
          <div className='info-box'>
            <h4 className='name'>
              <a href='#'>{teamMember.name}</a>
            </h4>
            <span className='designation'>{teamMember.designation}</span>
            <div className='social-links'>
              <a href={teamMember?.facebook_url}>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href={teamMember?.twitter_url}>
                <i className='fab fa-twitter'></i>
              </a>
              <a href={teamMember?.linkedin_url}>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href={teamMember?.pintrest_url}>
                <i className='fab fa-pinterest-p'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TEAMS_QUERY = gql`
  query GetTeam {
    teams {
      data {
        attributes {
          name
          desgination
          facebook_url
          twitter_url
          pintrest_url
          linkedin_url
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

const Team = () => {
  const { data, loading, error } = useQuery(TEAMS_QUERY);
  console.log(data);
  return (
    <div className='page-wrapper'>
      <section className='page-title page-banner'>
        <div className='auto-container'>
          <div className='title-outer text-center'>
            <h1 className='title'>Team Grid</h1>
            <ul className='page-breadcrumb'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>Team</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='team-section'>
        <div className='auto-container'>
          <div className='row'>
            {data?.teams?.data?.map((teamMember, index) => (
              <TeamMember key={index} data={teamMember} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
