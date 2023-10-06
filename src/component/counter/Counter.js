import React from 'react';
import '../../utils/css/grid.css'
import './Counter.css'
import CounterUp from 'react-countup';


function Counter() {

  const myComponentStyle = {
    paddingTop: '50px',
    paddingBottom: '220px',
    backgroundColor: '#f0f0f0',
    backgroundImage: 'url(http://quicksolarsolutions.in/wp-content/uploads/2016/02/home_bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    backgroundAttachment: 'initial', // You can set this to 'scroll' or 'fixed' as needed
    backgroundSize: 'cover', // You can set this to 'contain' or other values as needed
    WebkitBackgroundSize: 'cover', // For webkit browsers (optional)
  };
  
  return (
    <div>
    <div className="container py-6">
      <div className="row align-items-center">
        <div className="col-xl-6">
          <div className="lc-block mb-3">
            <div editable="rich">
              <h2 className="fw-bold display-5">Our Company Numbers</h2>
            </div>
          </div>
          <div className="lc-block mb-3">
            <div editable="rich">
              <p className="">Marketing for Small, Medium or Large Businesses.<br />Exceed Your Marketing Goals with us.<br /></p>
            </div>
          </div>
          <div className="lc-block">
            <div editable="rich">
              {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor. Ut porta lacus eget nisi fermentum lobortis.</p> */}
            </div>
          </div>
        </div>
        <div className='counter-area pb-xs-80 pb-sm-100 pb-md-100 pb-120 overflow-hidden'>
          <div className='container'>
            <div className='row mb-minus-30'>
              <div className='col-xl-4 col-lg-4 col-sm-12'>
                <div className='counter-area__item counter-area__item-two d-flex align-items-center'>
                  <div className='icon color-yellow px-3'>
                    <i className="fa fa-bag-shopping"></i>
                    {/* <img src={project} className='icon_7' alt='' /> */}
                  </div>

                  <div className='text text-center'>
                    <div className='number fw-600 color-yellow'>
                      <CounterUp enableScrollSpy={true} start={0} end={5620} className='counter' />+
                    </div>
                    <div className='description font-la'>Successful Project</div>
                  </div>
                </div>
              </div>

              <div className='col-xl-4 col-lg-4 col-sm-12'>
                <div className='counter-area__item counter-area__item-two d-flex align-items-center'>
                  <div className='icon px-3'>
                    <i className="fa fa-map"></i>
                    {/* <img src={expert} className='icon_7' alt='' /> */}
                  </div>

                  <div className='text text-center'>
                    <div className='number fw-600 color-yellow'>
                      <CounterUp enableScrollSpy={true} start={0} end={150} className='counter' />+
                    </div>
                    <div className='description font-la'>States</div>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-sm-12'>
                <div className='counter-area__item counter-area__item-two d-flex align-items-center'>
                  <div className='icon color-yellow px-3'>
                    <i className="fa fa-person"></i>
                    {/* <img src={client} className='icon_7' alt='' /> */}
                  </div>

                  <div className='text text-center ali'>
                    <div className='number fw-600 color-yellow'>
                      <CounterUp enableScrollSpy={true} start={0} end={3225} className='counter' />+
                    </div>
                    <div className='description font-la'>Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Counter;
