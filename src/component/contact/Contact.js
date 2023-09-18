import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='page-wrapper'>
      <section className='page-title page-banner'>
        <div className='auto-container'>
          <div className='title-outer text-center'>
            <h1 className='title'>Contact Us</h1>
            <ul className='page-breadcrumb'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='contact-details'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-7 col-lg-6'>
              <div className='sec-title'>
                <span className='sub-title'>Send us email</span>
                <h2>Feel free to write</h2>
              </div>

              <form
                id='contact_form'
                name='contact_form'
                className=''
                action='includes/sendmail.php'
                method='post'
                noValidate='novalidate'
              >
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <input name='form_name' className='form-control' type='text' placeholder='Enter Name' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <input
                        name='form_email'
                        className='form-control required email'
                        type='email'
                        placeholder='Enter Email'
                      />
                    </div>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-sm-6'>
                    <div class='mb-3'>
                      <input
                        name='form_subject'
                        class='form-control required'
                        type='text'
                        placeholder='Enter Subject'
                      />
                    </div>
                  </div>
                  <div class='col-sm-6'>
                    <div class='mb-3'>
                      <input name='form_phone' class='form-control' type='text' placeholder='Enter Phone' />
                    </div>
                  </div>
                </div>
                <div class='mb-3'>
                  <textarea
                    name='form_message'
                    class='form-control required'
                    rows='7'
                    placeholder='Enter Message'
                  ></textarea>
                </div>
                <div class='mb-5'>
                  <input name='form_botcheck' class='form-control' type='hidden' value='' />
                  <button type='submit' class='theme-btn btn-style-one mb-3 mb-sm-0' data-loading-text='Please wait...'>
                    <span class='btn-title'>Send message</span>
                  </button>

                  <button type='reset' class='theme-btn btn-style-one bg-theme-color5'>
                    <span class='btn-title'>Reset</span>
                  </button>
                </div>
              </form>
            </div>
            <div class='col-xl-5 col-lg-6'>
              <div class='contact-details__right'>
                <div class='sec-title'>
                  <span class='sub-title'>Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div class='text'>
                    Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do
                    eiusmod tempor incididunt simply dolore magna.
                  </div>
                </div>
                <ul class='list-unstyled contact-details__info'>
                  <li class='d-block d-sm-flex align-items-sm-center '>
                    <div class='icon bg-theme-color2'>
                      <span class='lnr-icon-phone-plus'></span>
                    </div>
                    <div class='text ml-xs--0 mt-xs-10'>
                      <h6>Have any question?</h6>
                      <a href='tel:980089850'>
                        <span>Free</span> +92 (020)-9850
                      </a>
                    </div>
                  </li>
                  <li class='d-block d-sm-flex align-items-sm-center '>
                    <div class='icon'>
                      <span class='lnr-icon-envelope1'></span>
                    </div>
                    <div class='text ml-xs--0 mt-xs-10'>
                      <h6>Write email</h6>
                      <a href='#'>needhelp@company.com</a>
                    </div>
                  </li>
                  <li class='d-block d-sm-flex align-items-sm-center '>
                    <div class='icon'>
                      <span class='lnr-icon-location'></span>
                    </div>
                    <div class='text ml-xs--0 mt-xs-10'>
                      <h6>Visit anytime</h6>
                      <span>66 broklyn golden street. New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='col-xl-12 col-sm-6 mb-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28019.080578725785!2d77.371085!3d28.618219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55c4a275df5%3A0x59693f00cc3d35ee!2sClouClix%20Softwares%20Private%20Limited!5e0!3m2!1sen!2sus!4v1691608799438!5m2!1sen!2sus'
          width='100%'
          height='350'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
