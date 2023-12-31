import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Projectlist from './component/project-list';
import Details from './component/project-details/Details';
import Team from './component/team/Team';
import Testimonial from './component/testimonials/Testimonial';
import './App.css'
import Footer from './component/footer/Footer';
import ServiceList from './services/ServiceList';
import ServiceDetails from './services/ServiceDetails';

function App() {
  return (
    <>
      <Router>
        {
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/service-list' element={<ServiceList />} />
            <Route path='/service-details' element={<ServiceDetails />} />
            <Route path='/project-list' element={<Projectlist />} />
            <Route path='/project-details' element={<Details />} />
            <Route path='/team' element={<Team />} />
            <Route path='/testimonial' element={<Testimonial />} />
          </Routes>
        }
        <Footer />
      </Router>
    </>
  );
}

export default App;
