import About from "./component/about/About";
import Calltoaction from "./component/calltoaction/Calltoaction";
import Footer from "./component/footer/Footer";
import Main from "./component/main-slider/Main";
import Service from "./component/service/Service";
import Whychooseus from "./component/whychooseus/Whychooseus";
import Whychooseus2 from "./component/whychooseus2/Whychooseus2";
import Work from "./component/work/Work";
import Service_list from "./services/Service_list";
import Service_details from './services/Service_details'
import './App.css'


function App() {
  return (
    <div >
      <Main />
      <About />
      <Service />
      <Whychooseus />
      <Whychooseus2 />
      <Work />
      <Calltoaction />
      <Service_list />
      <Service_details />
      <Footer />
    </div>
  );
}

export default App;
