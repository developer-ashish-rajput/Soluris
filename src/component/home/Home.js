import React from 'react';
import About from '../about/About';
// import Main from '../main-slider/Main';
import Service from '../service/Service';
import Whychooseus from '../whychooseus/Whychooseus';
import Whychooseus2 from '../whychooseus2/Whychooseus2';
import Work from '../work/Work';
import Calltoaction from '../calltoaction/Calltoaction';
import Banner from '../banner/Banner';

const Home = () => {
  return (
    <div>
      {/* <Main /> */}
      <Banner />
      <About />
      <Service />
      <Whychooseus />
      <Whychooseus2 />
      <Work />
      <Calltoaction />
    </div>
  );
};

export default Home;
