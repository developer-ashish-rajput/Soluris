import React from 'react'
import './ServiceList.css'
import list_img1 from '../images/service-1.jpg'
import list_img2 from '../images/service-2.jpg'
import list_img3 from '../images/service-3.jpg'
import list_img4 from '../images/service-5.jpg'
import { NavLink } from 'react-router-dom'
const ServiceList = () => {
  return (
    <>
    <section className="page-title page-banner">
		<div className="auto-container">
			<div className="title-outer text-center">
				<h1 className="title">Services</h1>
				<ul className="page-breadcrumb">
					<li><NavLink to="/">Home</NavLink></li>
					<li>Services</li>
				</ul>
			</div>
		</div>
	</section>
    <section className="services-section-home2">
		<div className="large-container">
      <div className="row">
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp animated" style={{visibility: 'visible', animationName:' fadeInUp'}}>
            <figure className="image"><NavLink to="/service-details"><img src={list_img1} alt=""/></NavLink></figure>
            <div className="inner-box ">
              <i className="icon flaticon-solar-panel"></i>
              <h4 className="title mt-0"><NavLink to="/service-details">Hybrid Energy</NavLink></h4>
              <div className="text">Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.</div>
              <NavLink to="/service-details" className="read-more">Read More</NavLink>
            </div>
          </div>
        </div>
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp animated"  style = {{visibility: 'visible',animationName: 'fadeInUp'}}>
            <figure className="image"><NavLink to="/service-details"><img src={list_img2} alt=""/></NavLink></figure>
            <div className="inner-box ">
              <i className="icon flaticon-wind-turbine"></i>
              <h4 className="title mt-0"><NavLink to="/service-details">Wind Turbines</NavLink></h4>
              <div className="text">Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.</div>
              <NavLink to="/service-details" className="read-more">Read More</NavLink>
            </div>
          </div>
        </div>
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp animated"  style = {{visibility: 'visible',animationName: 'fadeInUp'}}>
            <figure className="image"><NavLink to="/service-details"><img src={list_img3} alt=""/></NavLink></figure>
            <div className="inner-box ">
              <i className="icon flaticon-settings"></i>
              <h4 className="title mt-0"><NavLink to="/service-details">Maintenance</NavLink></h4>
              <div className="text">Wind turbines are devices that convert wind energy into electrical power.</div>
              <NavLink to="/service-details" className="read-more">Read More</NavLink>
            </div>
          </div>
        </div>
				<div className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp animated" style = {{visibility: 'visible',animationName: 'fadeInUp'}}>
            <figure className="image"><NavLink to="/service-details"><img src={list_img4} alt=""/></NavLink></figure>
            <div className="inner-box ">
              <i className="icon flaticon-windmill"></i>
              <h4 className="title mt-0"><NavLink to="/service-details">Wind Generators</NavLink></h4>
              <div className="text">Wind generators are devices that harness the power of wind to generate electricity.</div>
              <NavLink to="/service-details" className="read-more">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
		</div>
	</section>
  </>
  )
}

export default ServiceList;