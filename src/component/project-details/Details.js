import React from 'react';
import './Details.css';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import bg_img from '../../images/project-details.jpg';
import img_1 from '../../images/project-1.jpg';
import img_2 from '../../images/project-2.jpg';
import img_3 from '../../images/project-3.jpg';
import img_4 from '../../images/project-4.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Projectlist, { Project, ProjectItems, ProjectWrapper, projects } from '../project-list';
import { useQuery, gql } from '@apollo/client';
import MarkDown from 'react-markdown';

const PROJECT_QUERY = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      data {
        attributes {
          title
          description
          ClientDetails{
          date,
          name,
          url,
          location
        }
          image {
            data {
              attributes {
                url
              }
            }
          }
          banner_image {
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

const Details = () => {
  const { id } = useParams();
  const {
    loading,
    error,
    data
  } = useQuery(PROJECT_QUERY, {
    variables: {
      id: id
    }
  });

  let settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const project = data?.project;
  const bannerImage = `${project?.data?.attributes?.banner_image?.data?.attributes?.url}`;
  const projectDescription = project?.data?.attributes?.description;
  const client = project?.data?.attributes?.ClientDetails;
 
  console.log({projectDescription},data);

  return (
    <div className="page-wrapper">
      <section className="page-title page-banner">
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Portfolio Details</h1>
            <ul className="page-breadcrumb">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Portfolio</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="project-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__top">
                <div className="project-details__img">
                  <img src={bannerImage} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="project-details__content-right">
                <div className="project-details__details-box">
                  <div className="row">
                    <div className="col">
                      <p className="project-details__client">Date</p>
                      <h4 className="project-details__name">{client?.date||'-'}</h4>
                    </div>
                    <div className="col">
                      <p className="project-details__client">Client</p>
                      <h4 className="project-details__name">{client?.name|| '-'}</h4>
                    </div>
                    <div className="col">
                      <p className="project-details__client">Website</p>
                      <h4 className="project-details__name">www.domain.com</h4>
                    </div>
                    <div className="col">
                      <p className="project-details__client">Location</p>
                      <h4 className="project-details__name">{client?.location||'-'}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-12">
                <div className="project-details__content-left">
                  <h3 className="mb-4 mt-5">Here to Know About This Project</h3>
                  <MarkDown>
                    {projectDescription}
                    </MarkDown>
                  <br/>
                  <br/> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section pt-0">
        <div className="large-container">
          {/* <div className="sec-title text-center">
            <span className="sub-title">LASTEST PROJECT</span>
            <h2>Our Latest Projects</h2>
          </div> */}
          {/* Project Carousel */}
          {/* <ProjectWrapper>
            <Slider {...settings}>
            <ProjectItems />
            </Slider>
          </ProjectWrapper> */}
        </div>
      </section>
    </div>
  );
};

export default Details;
