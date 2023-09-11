import React from 'react';

const Button = ({ text, action }) => {
  return (
    <div>
      {' '}
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
        <a href={action} className='theme-btn btn-style-one hvr-light'>
          <span className='btn-title'>{text}</span>
        </a>
      </div>
    </div>
  );
};

export default Button;
