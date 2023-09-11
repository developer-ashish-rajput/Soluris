import React from 'react';
import './Whychooseus.css';

const Whychooseus = () => {
  return (
    <div>
      <section className='why-choose-us pb-lg-0'>
        <div className='bg-image'></div>
        <div className='auto-container'>
          <div className='row'>
            {/* Content Column */}
            <div className='content-column col-lg-6'>
              <div
                className='inner-column wow fadeInRight animated'
                style={{ visibility: 'visible', animationName: 'fadeInRight' }}
              >
                <div className='sec-title light'>
                  <span className='sub-title'>Why Choose Us</span>
                  <h2>We are Building a Sustainable Future</h2>
                </div>
                {/* Feature Block 1 */}
                <div className='feature-block-two pb-30'>
                  <div className='inner-box'>
                    <i className='icon fas fa-check'></i>
                    <h4 className='title'>Best energy solution</h4>
                    <p className='text'>
                      The best energy solution depends on several factors, including your specific needs, location,
                      budget, and environmental considerations.
                    </p>
                  </div>
                </div>
                {/* Feature Block 2 */}
                <div className='feature-block-two border-bottom-0'>
                  <div className='inner-box'>
                    <i className='icon fas fa-check'></i>
                    <h4 className='title'>24/7 Technical Support</h4>
                    <p className='text'>
                      At Sustainable Energy Services, we understand the importance of reliable and uninterrupted access
                      to technical support when it comes to sustainable energy systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Column */}
            <div className='form-column col-lg-6'>
              <div className='inner-column'>
                <p className='fs-6 mb-5 text-light'>
                  We believe in a future where renewable energy sources play a vital role in reducing carbon emissions
                  and creating a sustainable planet.
                </p>
                {/* Contact Form */}
                <div
                  className='contact-form wow fadeInLeft animated'
                  style={{ visibility: 'visible', animationName: 'fadeInLeft' }}
                >
                  {/* Contact Form */}
                  <form method='post' action='https://kodesolution.com/html/2023/soluris-html/get' id='contact-form'>
                    <div className='row'>
                      <div className='col-lg-12 form-group'>
                        <input
                          className='form-control'
                          type='text'
                          name='full_name'
                          placeholder='Your Name'
                          required=''
                        />
                      </div>
                      <div className='col-lg-12 form-group'>
                        <input className='form-control' type='text' name='Email' placeholder='Your Email' required='' />
                      </div>
                      <div className='col-lg-12 form-group'>
                        <input className='form-control' type='text' name='Phone' placeholder='Phone No' required='' />
                      </div>
                      <div className='col-lg-12 form-group'>
                        <textarea
                          name='form_message'
                          className='form-control required'
                          rows='6'
                          placeholder='Enter Message'
                        ></textarea>
                      </div>
                      <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                        <button className='theme-btn btn-style-three' type='submit' name='submit-form'>
                          <span className='btn-title'>Submit Request</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* End Contact Form */}
                </div>
                {/* End Contact Form */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white pt-60'>
        <div className='auto-container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='graph-box d-md-flex align-items-center justify-content-md-between wow fadeInRight animated'
                style={{ visibility: 'visible', animationName: 'fadeInRight' }}
              >
                {/* Pie Graph 1 */}
                <div className='pie-graph d-sm-flex align-items-center text-center text-sm-start mb-4 mb-md-0'>
                  <div className='graph-outer'>
                    <div style={{ display: 'inline', width: '125px', height: '125px' }}>
                      <canvas width='125' height='125'></canvas>
                      <input
                        type='text'
                        className='dial'
                        data-fgcolor='#87AB42'
                        data-bgcolor='#f9f9f9'
                        data-width='125'
                        data-height='125'
                        data-linecap='normal'
                        value='90'
                        readOnly='readonly'
                        style={{ display: 'none', width: '0px', visibility: 'hidden' }}
                      />
                    </div>
                    <div className='inner-text count-box counted'>
                      <span className='count-text txt' data-stop='99' data-speed='2000'>
                        99
                      </span>
                      %
                    </div>
                  </div>
                  <h4 className='title mt-0 ms-4'>Projects Completed</h4>
                </div>
                {/* Pie Graph 2 */}
                <div className='pie-graph d-sm-flex align-items-center text-center text-sm-start'>
                  <div className='graph-outer'>
                    <div style={{ display: 'inline', width: '125px', height: '125px' }}>
                      <canvas width='125' height='125'></canvas>
                      <input
                        type='text'
                        className='dial'
                        data-fgcolor='#87AB42'
                        data-bgcolor='#f9f9f9'
                        data-width='125'
                        data-height='125'
                        data-linecap='normal'
                        value='50'
                        readOnly='readonly'
                        style={{ display: 'none', width: '0px', visibility: 'hidden' }}
                      />
                    </div>
                    <div className='inner-text count-box counted'>
                      <span className='count-text txt' data-stop='50' data-speed='2000'>
                        50
                      </span>
                      %
                    </div>
                  </div>
                  <h4 className='title mt-0 ms-4'>Clients Satisfied</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whychooseus;
