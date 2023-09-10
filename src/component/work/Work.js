import React from 'react'
import "./Work.css"

const Work = () => {
    return (
        <section className="work-section pb-50">
            <div className="anim-icons">
                <span className="icon icon-dotted-map-2 zoom-one"></span>
            </div>
            <div className="float-image1-home1 d-none d-xl-block">
                <img src="./Soluris - Ecology & Solar HTML Template _ Home Page 01_files/solar-sys.png" alt="" />
            </div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">How it's Work</span>
                    <h2>3 easy steps to task</h2>
                </div>
                <div className="row">
                    {/* Work Block 1 */}
                    <div className="work-block col-md-4 col-sm-6 wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                        <div className="inner-box">
                            <div className="icon-box">
                                <span className="count">01</span>
                                <i className="icon flaticon-solar-panel-1"></i>
                            </div>
                            <h4 className="title">Contact with Our Help Desk</h4>
                        </div>
                    </div>
                    {/* Work Block 2 */}
                    <div className="work-block col-md-4 col-sm-6 wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}>
                        <div className="inner-box">
                            <div className="icon-box">
                                <span className="count">02</span>
                                <i className="icon flaticon-solar-energy-1"></i>
                            </div>
                            <h4 className="title">Make a Deal with Our Company</h4>
                        </div>
                    </div>
                    {/* Work Block 3 */}
                    <div className="work-block col-md-4 col-sm-6 wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
                        <div className="inner-box">
                            <div className="icon-box">
                                <span className="count">03</span>
                                <i className="icon flaticon-solar-energy-2"></i>
                            </div>
                            <h4 className="title">Ready to Use Solar Energy</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Work
