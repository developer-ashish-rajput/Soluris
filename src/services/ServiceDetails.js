import React from "react";
import "./ServiceDetails.css";
import details_img1 from "../images/service-details.jpg";
import details_img2 from "../images/service-d1.jpg";
import details_img3 from "../images/service-d2.jpg";
import { NavLink } from "react-router-dom";


const DetailsData = {
  id: 1,
  BannerImg: details_img1,
  TitleOverview: "Service Overview",
  OverviewDesc1:
    "Lorem ipsum is simply free text used by copytyping refreshing.Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta suntex plicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  OverviewDesc2:
    " When an unknown printer took a galley of type and scrambled it to make a type specimen book . It has survived not only centuries, but also the leap into electronic typesetting remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit",
  TitleService: "Service Center",
  ServiceDesc1:
    "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  ServiceDesc2:
    "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur",
  ServiceImg1: details_img2,
  Img1Desc:
    "Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing",
  ServiceImg2: details_img3,
  Img2Desc:
    "Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing",
  titleQuestion: "Frequently Asked Questions",
  QuestionDisc:
    "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
};

const ServiceDetails = () => {
  const details = DetailsData;
  return (
    <>
      <section className="page-title page-banner">
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Service Details</h1>
            <ul className="page-breadcrumb">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!--Start Services Details--> */}
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/* <!--Start Services Details Sidebar--> */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                {/* <!--Start Services Details Sidebar Single--> */}
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      <li>
                        <a href="/service-details" className="current">
                          <i className="fas fa-angle-right"></i>
                          <span>Website Development</span>
                        </a>
                      </li>
                      <li className="current">
                        <a href="/service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>Graphic Designing</span>
                        </a>
                      </li>
                      <li>
                        <a href="/service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>Digital Marketing</span>
                        </a>
                      </li>
                      <li>
                        <a href="/service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>Apps Development</span>
                        </a>
                      </li>
                      <li>
                        <a href="/service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>Seo &amp; Content Writing</span>
                        </a>
                      </li>
                      <li>
                        <a href="/service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>UI / UX Designing</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="service-details-help">
                    <div className="help-shape-1"></div>
                    <div className="help-shape-2"></div>
                    <h2 className="help-title">
                      Contact with <br /> us for any <br /> advice
                    </h2>
                    <div className="help-icon">
                      <span className=" lnr-icon-phone-handset"></span>
                    </div>
                    <div className="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <a href="tel:12463330079">+892 ( 123 ) 112 - 9999</a>
                    </div>
                  </div>

                  {/* <!--Start Services Details Sidebar Single--> */}
                  <div className="sidebar-widget service-sidebar-single mt-4">
                    <div
                      className="service-sidebar-single-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                      data-wow-duration="1200m"
                      style={{
                        visibility: "hidden",
                        animationDelay: "0.5s",
                        animationName: "none",
                      }}
                    >
                      <a
                        href="/service-details"
                        className="theme-btn btn-style-one d-grid"
                      >
                        <span className="btn-title">
                          <span className="fas fa-file-pdf"></span> download pdf
                          file
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div
                    className="service-sidebar-single-btn wow fadeInUp animated"
                    data-wow-delay="0.5s"
                    data-wow-duration="1200m"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <a href="#" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> download pdf
                        file
                      </span>
                    </a>
                  </div>
                </div>
                {/* <!--End Services Details Sidebar--> */}
              </div>
            </div>

            {/* <!--Start Services Details Content--> */}
            <div className="col-xl-8 col-lg-8">
              <div key={details.id} className="services-details__content">
                <img src={details.BannerImg} alt="" />
                <h3 className="mt-4">{details.TitleOverview}</h3>
                <p>{details.OverviewDesc1}</p>
                <p>{details.OverviewDesc2}</p>
                <div className="content mt-40">
                  <div className="text">
                    <h3>{details.TitleService}</h3>
                    <p>{details.ServiceDesc1}</p>
                    <blockquote className="blockquote-one">
                      {details.ServiceDesc2}
                    </blockquote>
                  </div>
                  <div className="feature-list mt-4">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <img
                          className="mb-3"
                          src={details.ServiceImg1}
                          alt="images"
                        />
                        <p>{details.Img1Desc}</p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <img
                          className="mb-3"
                          src={details.ServiceImg2}
                          alt="images"
                        />
                        <p>{details.ServiceDesc2}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-25">
                  <h3>{details.titleQuestion}</h3>
                  <p>{details.QuestionDisc}</p>
                  <ul
                    className="accordion-box wow fadeInRight animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInRight",
                    }}
                  >
                    {/* FAQ Item 1 */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Is my technology allowed on tech?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className="acc-content" style={{ display: "none" }}>
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* FAQ Item 2 */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        How to soft launch your business?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div
                        className="acc-content current"
                        style={{ display: "none" }}
                      >
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* FAQ Item 3 */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        How to turn visitors into contributors
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className="acc-content" style={{ display: "none" }}>
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* FAQ Item 4 */}
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        How can I find my solutions?
                        <div className="icon fa fa-plus"></div>
                      </div>
                      <div className="acc-content" style={{ display: "block" }}>
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
