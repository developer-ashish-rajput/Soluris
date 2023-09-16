import React from 'react'
import './ServiceList.css'
import list_img1 from '../images/service-1.jpg'
import list_img2 from '../images/service-2.jpg'
import list_img3 from '../images/service-3.jpg'
import list_img4 from '../images/service-5.jpg'
import { NavLink } from 'react-router-dom'

const serviceData = [
  {
    id: 1,
    img: list_img1,
    title: 'Hybrid Energy',
    Text: 'Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.',
    button: 'Read More'
    
  },

  {
    id: 1,
    img: list_img2,
    title: 'Wind Turbines',
    Text: 'Hybrid energy refers to the use of multiple sources of energy to meet our energy needs.',
    button: 'Read More'
    
  },

  {
    id: 3,
    img: list_img3,
    title: 'Maintenance',
    Text: 'Wind turbines are devices that convert wind energy into electrical power.',
    button: 'Read More'
  },

  {
    id: 4,
    img: list_img4,
    title: 'Wind Generators',
    Text: 'Wind generators are devices that harness the power of wind to generate electricity.',
    button: 'Read More'
  },

  
]

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
        {serviceData.map((service)=>(
				<div key={service} className="col-xl-3 col-md-6">
          {/* <!-- Service Block Two --> */}
          <div className="service-block-home2 wow fadeInUp animated" style={{visibility: 'visible', animationName:' fadeInUp'}}>
            <figure className="image"><NavLink to="/service-details"><img src={service.img} alt=""/></NavLink></figure>
            <div className="inner-box ">
              <i className="icon flaticon-solar-panel"></i>
              <h4 className="title mt-0"><NavLink to="/service-details">{service.title}</NavLink></h4>
              <div className="text">{service.Text}</div>
              <NavLink to="/service-details" className="read-more">{service.button}</NavLink>
            </div>
          </div>
        </div>
        ))}     
     </div>
		</div>
    
	</section>
  </>
  )
}

export default ServiceList;