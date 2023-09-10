import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className='page-wrapper'>
      <section className='page-title'>
        <div className='auto-container'>
          <div className='title-outer text-center'>
            <h1 className='title'>Portfolio Details</h1>
            <ul className='page-breadcrumb'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>Portfolio</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='project-details'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='project-details__top'>
                <div className='project-details__img'>
                  <img src={project.bg_img} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-xl-10'>
              <div className='project-details__content-right'>
                <div className='project-details__details-box'>
                  <div className='row'>
                    <div className='col'>
                      <p className='project-details__client'>Date</p>
                      <h4 className='project-details__name'>{project.date}</h4>
                    </div>
                    <div className='col'>
                      <p className='project-details__client'>Client</p>
                      <h4 className='project-details__name'>{project.client}</h4>
                    </div>
                    <div className='col'>
                      <p className='project-details__client'>Website</p>
                      <h4 className='project-details__name'>{project.website}</h4>
                    </div>
                    <div className='col'>
                      <p className='project-details__client'>Location</p>
                      <h4 className='project-details__name'>{project.location}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='project-details__content'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='project-details__content-left'>
                  <h3 className='mb-4 mt-5'>Here to Know About This Project</h3>
                  <p className=''>{project.description}</p>
                  <p className='mb-5'>{project.additionalDescription}</p>
                  <ul className='list-style-two mb-0'>
                    {project.bulletPoints.map((point, index) => (
                      <li key={index}>
                        <i className='fa fa-check-circle'></i> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='project-details__pagination-box'>
                <ul className='project-details__pagination list-unstyled clearfix'>
                  <li className='next'>
                    <div className='icon'>
                      <a href='#' aria-label='Previous'>
                        <i className='lnr lnr-icon-arrow-left'></i>
                      </a>
                    </div>
                    <div className='content'>Previous</div>
                  </li>
                  {project.paginationLinks.map((link, index) => (
                    <li key={index} className='count'>
                      <a href={link}></a>
                    </li>
                  ))}
                  <li className='previous'>
                    <div className='content'>Next</div>
                    <div className='icon'>
                      <a href='#' aria-label='Previous'>
                        <i className='lnr lnr-icon-arrow-right'></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
