import React from 'react';
import './Project-list.css';
import { NavLink } from 'react-router-dom';
import img_1 from '../../images/project-1.jpg';
import img_2 from '../../images/project-2.jpg';
import img_3 from '../../images/project-3.jpg';
import img_4 from '../../images/project-4.jpg';

const projects = [
  {
    title: 'Maximizing Solar ROI',
    sub_title: 'Solar Energy',
    image: img_1,
  },
  {
    title: 'Diversifying Your Solar',
    sub_title: 'Solar Energy',
    image: img_2,
  },
  {
    title: 'The Benefits of Solar',
    sub_title: 'Solar Energy',
    image: img_3,
  },
  {
    title: 'Shining a Light',
    sub_title: 'Solar Energy',
    image: img_4,
  },
];

const Project = ({ project }) => {
  return (
    <div className='col-xl-3 col-sm-6'>
      <div className='project-block mb-30'>
        <div className='inner-box'>
          <div className='image-box'>
            <figure className='image'>
              <a href='#' className='lightbox-image'>
                <img src={project.image} alt={project.title} />
              </a>
            </figure>
            <a href='#' className='icon'>
              <i className='fa fa-plus'></i>
            </a>
          </div>
          <div className='content-box'>
            <span className='sub-title'>{project.sub_title}</span>
            <h4 className='title'>
              <a href='#'>{project.title}</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projectlist = () => {
  return (
    <div className='page-wrapper'>
      <section className='page-title'>
        <div className='auto-container'>
          <div className='title-outer text-center'>
            <h1 className='title'>Projects</h1>
            <ul className='page-breadcrumb'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='project-section pb-90'>
        <div className='large-container'>
          <div className='row wow fadeInUp animated'>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projectlist;
