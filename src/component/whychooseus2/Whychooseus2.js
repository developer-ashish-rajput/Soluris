import React from 'react'
import "./Whychooseus2.css"

const Whychooseus2 = () => {
    return (
        <section className="why-choose-us-home1">
            <div className="bg-image d-none d-lg-block" style={{ backgroundImage: 'url(images/icons/video.png)' }}></div>
            <div className="bg-shape">
                <div className="shape" style={{ backgroundImage: 'url(images/background/8.jpg)' }}></div>
            </div>
            <div className="auto-container">
                <div className="row">
                    {/* Content Column */}
                    <div className="content-column col-lg-6">
                        <div className="inner-column wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                            <div className="sec-title light">
                                <span className="sub-title">Why Choose Us</span>
                                <h2>Greener Tomorrow for Your Business</h2>
                                <div className="text">At Sustainable Energy Services, we understand the importance of building a greener future for businesses.</div>
                            </div>
                            <div className="row">
                                {/* Feature Block Four 1 */}
                                <div className="feature-block-four col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-shield"></i>
                                        <h4 className="title">Safety & reliable service</h4>
                                        <p className="text">Safety and reliability are our top priorities</p>
                                    </div>
                                </div>
                                {/* Feature Block Four 2 */}
                                <div className="feature-block-four col-sm-6">
                                    <div className="inner-box">
                                        <i className="icon flaticon-solar-panel-2"></i>
                                        <h4 className="title">End-To-End Energy Services</h4>
                                        <p className="text">We offer end-to-end energy services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image Column */}
                    <div className="image-column col-lg-6">
                        <div className="image-box hide-desktop"><img src="./Soluris - Ecology & Solar HTML Template _ Home Page 01_files/video.png" alt="" /></div>
                        <div className="inner-column">
                            <div className="info-box bounce-y">
                                <i className="icon flaticon-support"></i>
                                <strong>Meet Our Expert Members</strong>
                            </div>
                            <div className="video-box">
                                <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="play-now-two lightbox-image"><i className="icon fa fa-play"></i></a>
                                <img src="./Soluris - Ecology & Solar HTML Template _ Home Page 01_files/arrow-3.png" alt="" className="arrow d-none d-sm-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Whychooseus2
