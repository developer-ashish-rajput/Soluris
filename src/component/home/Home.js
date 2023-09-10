import React from 'react';
import About from '../about/About';
import Main from '../main-slider/Main';
import Service from '../service/Service';
import Whychooseus from '../whychooseus/Whychooseus';
import Whychooseus2 from '../whychooseus2/Whychooseus2';
import Work from '../work/Work';

const Home = () => {
  return (
    <div>
      <About />
      <Main />
      <Service />
      <Whychooseus />
      <Whychooseus2 />
      <Work />
    </div>
  );
};

export default Home;
