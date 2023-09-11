import React from 'react';
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import './Main.css';

const main = () => {
  return (
    <div>
      <section className='main-slider'>
        <div
          className='rev_slider_wrapper fullwidthbanner-container tp-mouseover'
          id='rev_slider_one_wrapper'
          data-source='gallery'
          style={{ overflow: 'visible', height: '800px' }}
        >
          <div
            className='rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus'
            id='rev_slider_one'
            data-version='5.4.1'
            data-slideactive='rs-1'
            style={{ marginTop: '0px', marginBottom: '0px', height: '800px' }}
          >
            <ul
              className='tp-revslider-mainul'
              style={{
                visibility: 'visible',
                display: 'block',
                overflow: 'hidden',
                width: '1501px',
                height: '100%',
                maxHeight: 'none',
                left: '0px',
              }}
            >
              <li
                data-index='rs-1'
                data-transition='zoomout'
                className='tp-revslider-slidesli active-revslide'
                style={{
                  perspective: '6000px',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  zIndex: '20',
                  visibility: 'inherit',
                  opacity: '1',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                }}
              >
                <div
                  className='slotholder'
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    zIndex: '0',
                    width: '100%',
                    height: '100%',
                    visibility: 'inherit',
                    opacity: '1',
                    transform: 'matrix(1, 0, 0, 1, 0, 0)',
                  }}
                >
                  {' '}
                  <img src={img1} alt='' className='rev-slidebg defaultimg' />
                  <div className='tp-dottedoverlay on'></div>
                  <div
                    className='tp-bgimg defaultimg '
                    data-bgcolor='undefined'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: 'url(&quot;images/main-slider/1.jpg&quot;)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      width: '100%',
                      height: '100%',
                      opacity: '1',
                      visibility: 'inherit',
                      zIndex: '20',
                    }}
                    src='images/main-slider/1.jpg'
                  ></div>
                </div>
                <div
                  className='tp-parallax-wrap'
                  style={{
                    position: 'absolute',
                    display: 'block',
                    visibility: 'visible',
                    left: '150px',
                    top: '154px',
                    zIndex: '1',
                  }}
                >
                  <div className='tp-loop-wrap' style={{ position: 'absolute', display: 'block' }}>
                    <div
                      className='tp-mask-wrap'
                      style={{
                        position: 'absolute',
                        display: 'block',
                        overflow: 'hidden',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                      }}
                    >
                      <div
                        className='tp-caption'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[15,15,15,15]'
                        data-paddingright='[15,15,15,15]'
                        data-paddingtop='[0,0,0,0]'
                        data-responsive_offset='on'
                        data-type='text'
                        data-height='none'
                        data-width='[&#39;750&#39;,&#39;750&#39;,&#39;750&#39;,&#39;650&#39;]'
                        data-whitespace='normal'
                        data-hoffset='[&#39;0&#39;,&#39;0&#39;,&#39;0&#39;,&#39;0&#39;]'
                        data-voffset='[&#39;-150&#39;,&#39;-40&#39;,&#39;0&#39;,&#39;-30&#39;]'
                        data-x='[&#39;left&#39;,&#39;left&#39;,&#39;left&#39;,&#39;left&#39;]'
                        data-y='[&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;]'
                        data-textalign='[&#39;top&#39;,&#39;top&#39;,&#39;top&#39;,&#39;top&#39;]'
                        data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                        id='layer-896494408'
                        style={{
                          visibility: 'inherit',
                          transition: 'none 0s ease 0s',
                          lineHeight: '30px',
                          borderWidth: '0px',
                          margin: '0px',
                          padding: '0px 15px',
                          letterSpacing: '0px',
                          fontWeight: '400',
                          fontSize: '16px',
                          whiteSpace: 'normal',
                          minHeight: '0px',
                          minWidth: '750px',
                          maxHeight: 'none',
                          maxWidth: '750px',
                          opacity: '1',
                          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                          transformOrigin: '50% 50% 0px',
                        }}
                      >
                        <h2>
                          Renewable <br />
                          Solar Solution
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tp-parallax-wrap'
                  style={{
                    position: 'absolute',
                    display: 'block',
                    visibility: 'visible',
                    left: '150px',
                    top: '361px',
                    zIndex: '1',
                  }}
                >
                  <div className='tp-loop-wrap' style={{ position: 'absolute', display: 'block' }}>
                    <div
                      className='tp-mask-wrap'
                      style={{
                        position: 'absolute',
                        display: 'block',
                        overflow: 'hidden',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                      }}
                    >
                      <div
                        className='tp-caption'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[15,15,15,15]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingtop='[0,0,0,0]'
                        data-responsive_offset='on'
                        data-type='text'
                        data-height='none'
                        data-width='[&#39;650&#39;,&#39;650&#39;,&#39;650&#39;,&#39;470&#39;]'
                        data-whitespace='normal'
                        data-hoffset='[&#39;0&#39;,&#39;0&#39;,&#39;0&#39;,&#39;0&#39;]'
                        data-voffset='[&#39;0&#39;,&#39;-160&#39;,&#39;-120&#39;,&#39;-170&#39;]'
                        data-x='[&#39;left&#39;,&#39;left&#39;,&#39;left&#39;,&#39;left&#39;]'
                        data-y='[&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;]'
                        data-textalign='[&#39;top&#39;,&#39;top&#39;,&#39;top&#39;,&#39;top&#39;]'
                        data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                        id='layer-864682123'
                        style={{
                          visibility: 'inherit',
                          transition: 'none 0s ease 0s',
                          lineHeight: '30px',
                          borderWidth: '0px',
                          margin: '0px',
                          padding: '0px 0px 0px 15px',
                          letterSpacing: '0px',
                          fontWeight: '400',
                          fontSize: '16px',
                          whiteSpace: 'normal',
                          minHeight: '0px',
                          minWidth: '650px',
                          maxHeight: 'none',
                          maxWidth: '650px',
                          opacity: '1',
                          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                          transformOrigin: '50% 50% 0px',
                        }}
                      >
                        <span className='title'>
                          A perfect blend of global experience and expertise to further our focus on technology
                          advancement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tp-parallax-wrap'
                  style={{
                    position: 'absolute',
                    display: 'block',
                    visibility: 'visible',
                    left: '150px',
                    top: '485px',
                    zIndex: 1,
                  }}
                >
                  <div className='tp-loop-wrap' style={{ position: 'absolute', display: 'block' }}>
                    <div
                      className='tp-mask-wrap'
                      style={{
                        position: 'absolute',
                        display: 'block',
                        overflow: 'hidden',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                      }}
                    >
                      <div
                        className='tp-caption'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[15,15,15,15]'
                        data-paddingright='[15,15,15,15]'
                        data-paddingtop='[0,0,0,0]'
                        data-responsive_offset='on'
                        data-type='text'
                        data-height='none'
                        data-width='[&#39;700&#39;,&#39;750&#39;,&#39;700&#39;,&#39;450&#39;]'
                        data-whitespace='normal'
                        data-hoffset='[&#39;0&#39;,&#39;0&#39;,&#39;0&#39;,&#39;0&#39;]'
                        data-voffset='[&#39;120&#39;,&#39;120&#39;,&#39;150&#39;,&#39;120&#39;]'
                        data-x='[&#39;left&#39;,&#39;left&#39;,&#39;left&#39;,&#39;left&#39;]'
                        data-y='[&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;]'
                        data-textalign='[&#39;top&#39;,&#39;top&#39;,&#39;top&#39;,&#39;top&#39;]'
                        data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                        id='layer-101358906'
                        style={{
                          visibility: 'inherit',
                          transition: 'none 0s ease 0s',
                          lineHeight: '30px',
                          borderWidth: '0px',
                          margin: '0px',
                          padding: '0px 15px',
                          letterSpacing: '0px',
                          fontWeight: '400',
                          fontSize: '16px',
                          whiteSpace: 'normal',
                          minHeight: '0px',
                          minWidth: '700px',
                          maxHeight: 'none',
                          maxWidth: '700px',
                          opacity: '1',
                          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                          transformOrigin: '50% 50% 0px',
                        }}
                      >
                        <a
                          href='https://kodesolution.com/html/2023/soluris-html/page-about.html'
                          className='theme-btn btn-style-one hvr-light'
                        >
                          <span className='btn-title'>Discover More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                data-index='rs-2'
                data-transition='zoomout'
                className='tp-revslider-slidesli'
                style={{
                  visibility: 'hidden',
                  opacity: '0',
                  perspective: '6000px',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  zIndex: '18',
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                }}
              >
                <div
                  className='slotholder'
                  style={{
                    visibility: 'inherit',
                    opacity: '1',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    zIndex: '0',
                    width: '100%',
                    height: '100%',
                    transform: 'matrix(1, 0, 0, 1, 0, 0)',
                  }}
                >
                  {' '}
                  <img src={img2} alt='' className='rev-slidebg defaultimg' />
                  <div className='tp-dottedoverlay on'></div>
                  <div
                    className='tp-bgimg defaultimg '
                    data-bgcolor='undefined'
                    style={{
                      visibility: 'hidden',
                      opacity: '0',
                      zIndex: '20',
                      width: '100%',
                      height: '100%',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: 'url("images/main-slider/2.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                    }}
                    src='images/main-slider/2.jpg'
                  ></div>
                </div>
                <div
                  className='tp-parallax-wrap'
                  style={{
                    visibility: 'hidden',
                    opacity: '0',
                    position: 'absolute',
                    display: 'block',
                    left: '150px',
                    top: '154px',
                    zIndex: '1',
                  }}
                >
                  <div className='tp-loop-wrap' style={{ position: 'absolute', display: 'block' }}>
                    <div
                      className='tp-mask-wrap'
                      style={{
                        position: 'absolute',
                        display: 'block',
                        overflow: 'hidden',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                      }}
                    >
                      <div
                        className='tp-caption rs-toggle-content-active'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[15,15,15,15]'
                        data-paddingright='[15,15,15,15]'
                        data-paddingtop='[0,0,0,0]'
                        data-responsive_offset='on'
                        data-type='text'
                        data-height='none'
                        data-width='[&#39;750&#39;,&#39;750&#39;,&#39;750&#39;,&#39;650&#39;]'
                        data-whitespace='normal'
                        data-hoffset='[&#39;0&#39;,&#39;0&#39;,&#39;0&#39;,&#39;0&#39;]'
                        data-voffset='[&#39;-150&#39;,&#39;-40&#39;,&#39;0&#39;,&#39;-30&#39;]'
                        data-x='[&#39;left&#39;,&#39;left&#39;,&#39;left&#39;,&#39;left&#39;]'
                        data-y='[&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;]'
                        data-textalign='[&#39;top&#39;,&#39;top&#39;,&#39;top&#39;,&#39;top&#39;]'
                        data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                        id='layer-745325741'
                        style={{
                          visibility: 'inherit',
                          transition: 'none 0s ease 0s',
                          lineHeight: '30px',
                          borderWidth: '0px',
                          margin: '0px',
                          padding: '0px 15px',
                          letterSpacing: '0px',
                          fontWeight: '400',
                          fontSize: '16px',
                          whiteSpace: 'normal',
                          minHeight: '0px',
                          minWidth: '750px',
                          maxHeight: 'none',
                          maxWidth: '750px',
                          opacity: '1',
                          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -193.979, 0, 1)',
                          transformOrigin: '50% 50% 0px',
                        }}
                      >
                        <h2>
                          Energize Society <br />
                          Reliable Energy
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tp-parallax-wrap'
                  style={{
                    position: 'absolute',
                    display: 'block',
                    visibility: 'hidden',
                    left: '150px',
                    top: '361px',
                    zIndex: '1',
                  }}
                >
                  <div className='tp-loop-wrap' style={{ position: 'absolute', display: 'block' }}>
                    <div
                      className='tp-mask-wrap'
                      style={{
                        position: 'absolute',
                        display: 'block',
                        overflow: 'hidden',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                      }}
                    >
                      <div
                        className='tp-caption'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[15,15,15,15]'
                        data-paddingright='[0,0,0,0]'
                        data-paddingtop='[0,0,0,0]'
                        data-responsive_offset='on'
                        data-type='text'
                        data-height='none'
                        data-width='[&#39;650&#39;,&#39;650&#39;,&#39;650&#39;,&#39;470&#39;]'
                        data-whitespace='normal'
                        data-hoffset='[&#39;0&#39;,&#39;0&#39;,&#39;0&#39;,&#39;0&#39;]'
                        data-voffset='[&#39;0&#39;,&#39;-160&#39;,&#39;-120&#39;,&#39;-170&#39;]'
                        data-x='[&#39;left&#39;,&#39;left&#39;,&#39;left&#39;,&#39;left&#39;]'
                        data-y='[&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;]'
                        data-textalign='[&#39;top&#39;,&#39;top&#39;,&#39;top&#39;,&#39;top&#39;]'
                        data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                        id='layer-37107072'
                        style={{
                          visibility: 'inherit',
                          transition: 'none 0s ease 0s',
                          lineHeight: '30px',
                          borderWidth: '0px',
                          margin: '0px',
                          padding: '0px 0px 0px 15px',
                          letterSpacing: '0px',
                          fontWeight: '400',
                          fontSize: '16px',
                          whiteSpace: 'normal',
                          minHeight: '0px',
                          minWidth: '650px',
                          maxHeight: 'none',
                          maxWidth: '650px',
                          opacity: '1',
                          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -78.1111, 0, 1)',
                          transformOrigin: '50% 50% 0px',
                        }}
                      >
                        <span className='title'>
                          Ecology Limited are a fully independent, specialist ecological consultancy, working across the
                          UK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='tp-parallax-wrap'
                  style={{
                    position: 'absolute',
                    display: 'block',
                    visibility: 'hidden',
                    left: '150px',
                    top: '485px',
                    zIndex: '1',
                  }}
                >
                  <div className='tp-loop-wrap' style={{ position: 'absolute', display: 'block' }}>
                    <div
                      className='tp-mask-wrap'
                      style={{
                        position: 'absolute',
                        display: 'block',
                        overflow: 'hidden',
                        transform: 'matrix(1, 0, 0, 1, 0, 0)',
                      }}
                    >
                      <div
                        className='tp-caption'
                        data-paddingbottom='[0,0,0,0]'
                        data-paddingleft='[15,15,15,15]'
                        data-paddingright='[15,15,15,15]'
                        data-paddingtop='[0,0,0,0]'
                        data-responsive_offset='on'
                        data-type='text'
                        data-height='none'
                        data-width='[&#39;700&#39;,&#39;750&#39;,&#39;700&#39;,&#39;450&#39;]'
                        data-whitespace='normal'
                        data-hoffset='[&#39;0&#39;,&#39;0&#39;,&#39;0&#39;,&#39;0&#39;]'
                        data-voffset='[&#39;120&#39;,&#39;120&#39;,&#39;150&#39;,&#39;120&#39;]'
                        data-x='[&#39;left&#39;,&#39;left&#39;,&#39;left&#39;,&#39;left&#39;]'
                        data-y='[&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;,&#39;middle&#39;]'
                        data-textalign='[&#39;top&#39;,&#39;top&#39;,&#39;top&#39;,&#39;top&#39;]'
                        data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                        id='layer-266909236'
                        style={{
                          visibility: 'inherit',
                          transition: 'none 0s ease 0s',
                          lineHeight: '30px',
                          borderWidth: '0px',
                          margin: '0px',
                          padding: '0px 15px',
                          letterSpacing: '0px',
                          fontWeight: '400',
                          fontSize: '16px',
                          whiteSpace: 'normal',
                          minHeight: '0px',
                          minWidth: '700px',
                          maxHeight: 'none',
                          maxWidth: '700px',
                          opacity: '1',
                          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -72, 0, 1)',
                          transformOrigin: '50% 50% 0px',
                        }}
                      >
                        <a
                          href='https://kodesolution.com/html/2023/soluris-html/page-about.html'
                          className='theme-btn btn-style-one hvr-light'
                        >
                          <span className='btn-title'>Explore More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className='tp-loader off' style={{ display: 'none' }}>
              <div className='dot1'></div>
              <div className='dot2'></div>
              <div className='bounce1'></div>
              <div className='bounce2'></div>
              <div className='bounce3'></div>
            </div>
            <div
              className='tp-bannertimer'
              style={{ visibility: 'visible', width: '11.45%', transform: 'translate3d(0px, 0px, 0px)' }}
            ></div>
            <div
              className='tp-leftarrow tparrows metis'
              style={{
                top: '50%',
                transform: 'matrix(1, 0, 0, 1, 0, -30)',
                left: '0px',
                visibility: 'inherit',
                opacity: '1',
              }}
            ></div>
            <div
              className='tp-rightarrow tparrows metis'
              style={{
                top: '50%',
                transform: 'matrix(1, 0, 0, 1, -60, -30)',
                left: '100%',
                visibility: 'inherit',
                opacity: '1',
              }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default main;
