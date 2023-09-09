import About from "./component/about/About";
import Main from "./component/main-slider/Main";
import Service from "./component/service/Service";
import Whychooseus from "./component/whychooseus/Whychooseus";
import Whychooseus2 from "./component/whychooseus2/Whychooseus2";
import Work from "./component/work/Work";
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
    </div>
  );
}

export default App;
