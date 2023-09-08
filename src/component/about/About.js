import React from 'react'
import "./About.css"

const About = () => {
    return (
        <section className="about-section-home1">
            <img
                className="about-bg-home1"
                src="./Soluris - Ecology & Solar HTML Template _ Home Page 01_files/about1-bg-home1.jpg"
                alt=""
            />
            <div className="anim-icons">
                <div
                    className="float-text wow zoomInLeft animated"
                    style={{ visibility: 'visible', animationName: 'zoomInLeft' }}
                >
                    Soluris
                </div>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div
                        className="content-column col-lg-6 order-2 wow fadeInRight animated"
                        style={{ visibility: 'visible', animationName: 'fadeInRight' }}
                    >
                        <div className="inner-column pl-10">
                            <div className="sec-title mb-40">
                                <span className="sub-title">GET TO KNOW US</span>
                                <h2>Welcome to Sustainable Energy Services</h2>
                                <div className="text mb-30">
                                    At Sustainable Energy Services, we are dedicated to providing innovative and eco-friendly solutions to meet your energy needs. We believe in a future where renewable energy sources play a vital role in reducing carbon emissions and creating a sustainable planet.
                                </div>
                                <h4>We have 35+ years of experience in power supply and renewable energy solutions</h4>
                            </div>
                            <div className="company-cell mb-30 d-sm-flex align-items-center position-relative">
                                <div className="icon mb-3 mb-sm-0 mr-20">
                                    <i className="fa fa-phone-volume"></i>
                                </div>
                                <div>
                                    <h5 className="title my-0">Have any question? Give us a call</h5>
                                    <a className="subtitle" href="tel:+92 666 888 0000">+92 666 888 0000</a>
                                </div>
                            </div>
                            <a className="theme-btn btn-style-one mt-2" href="https://kodesolution.com/html/2023/soluris-html/page-about.html">Explore Now</a>
                        </div>
                    </div>

                    <div
                        className="image-column col-lg-6 wow fadeInLeft animated"
                        style={{ visibility: 'visible', animationName: 'fadeInLeft' }}
                    >
                        <div className="inner-column position-relative mr-10">
                            <figure className="image-1">
                                <img src="./Soluris - Ecology & Solar HTML Template _ Home Page 01_files/about-1.jpg" alt="" />
                            </figure>
                            <figure className="image-2 bounce-x">
                                <img src="./Soluris - Ecology & Solar HTML Template _ Home Page 01_files/about-2.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
