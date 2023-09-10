import React from 'react';
import { NavLink } from 'react-router-dom';
import team_1 from '../../images/team-1.jpg';
import team_2 from '../../images/team-2.jpg';
import team_3 from '../../images/team-3.jpg';
import team_4 from '../../images/team-4.jpg';

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

const TeamMember = ({ teamMember }) => {
  return (
    <div className='col-lg-4 col-sm-6'>
      <div className='team-block'>
        <div className='inner-box'>
          <div className='image-box'>
            <figure className='image'>
              <a href='#'>
                <img src={teamMember.image} alt={teamMember.name} />
              </a>
            </figure>
          </div>
          <div className='info-box'>
            <h4 className='name'>
              <a href='#'>{teamMember.name}</a>
            </h4>
            <span className='designation'>{teamMember.role}</span>
            <div className='social-links'>
              <a href='#'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fab fa-pinterest-p'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className='page-wrapper'>
      <section className='page-title'>
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
            {teamMembers.map((teamMember, index) => (
              <TeamMember key={index} teamMember={teamMember} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
