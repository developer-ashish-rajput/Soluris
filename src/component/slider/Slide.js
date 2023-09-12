import React from 'react'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import './Slide.css';


const Slide = () => {
  return (
    <div> <section className="main-slider">
    <div
      className="rev_slider_wrapper fullwidthbanner-container"
      id="rev_slider_one_wrapper"
      data-source="gallery"
      style={{ overflow: 'visible', height: '662px' }}
    >
      <div
        className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus"
        id="rev_slider_one"
        data-version="5.4.1"
        data-slideactive="rs-2"
        style={{ marginTop: '0px', marginBottom: '0px', height: '662px' }}
      >
        <ul
          className="tp-revslider-mainul"
          style={{
            visibility: 'visible',
            display: 'block',
            overflow: 'hidden',
            width: '757px',
            height: '100%',
            maxHeight: 'none',
            left: '0px',
          }}
        >
          {/* Slide 1 */}
          <li
            data-index="rs-1"
            data-transition="zoomout"
            className="tp-revslider-slidesli"
            style={{
              perspective: '6000px',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              zIndex: 18,
              visibility: 'hidden',
              opacity: 0,
              backgroundColor: 'rgba(255, 255, 255, 0)',
            }}
          >
            {/* MAIN IMAGE */}
            <div
              className="slotholder"
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                zIndex: 0,
                width: '100%',
                height: '100%',
                visibility: 'inherit',
                opacity: 1,
                transform: 'matrix(1, 0, 0, 1, 0, 0)',
              }}
            >
              {/* Add your image here */}
              <img src={img1} alt="" className="rev-slidebg defaultimg" />
              <div className="tp-dottedoverlay on"></div>
              <div
                className="tp-bgimg defaultimg"
                data-bgcolor="undefined"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: 'url("images/main-slider/1.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  visibility: 'hidden',
                  zIndex: 20,
                }}
                // src="images/main-slider/1.jpg"
              ></div>
            </div>
            {/* Add other content for this slide */}
          </li>

          {/* Slide 2 */}
          <li
            data-index="rs-2"
            data-transition="zoomout"
            className="tp-revslider-slidesli active-revslide"
            style={{
              perspective: '6000px',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              zIndex: 20,
              visibility: 'inherit',
              opacity: 1,
              backgroundColor: 'rgba(255, 255, 255, 0)',
            }}
          >
            {/* MAIN IMAGE */}
            <div
              className="slotholder"
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                zIndex: 0,
                width: '100%',
                height: '100%',
                visibility: 'inherit',
                opacity: 1,
                transform: 'matrix(1, 0, 0, 1, 0, 0)',
              }}
            >
              {/* Add your image here */}
              <img src={img2} alt="" className="rev-slidebg defaultimg" />
              <div className="tp-dottedoverlay on"></div>
              <div
                className="tp-bgimg defaultimg"
                data-bgcolor="undefined"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: 'url("images/main-slider/2.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: '100%',
                  opacity: 1,
                  visibility: 'inherit',
                  zIndex: 20,
                }}
                // src="images/main-slider/2.jpg"
              ></div>
            </div>
            {/* Add other content for this slide */}
          </li>
        </ul>
        {/* Add other slider elements here */}
      </div>
    </div>
  </section></div>
  )
}

export default Slide;