import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Projectlist from './component/project-list';
import Details from './component/project-details/Details';
import Team from './component/team/Team';
import Testimonial from './component/testimonials/Testimonial';

function App() {
  return (
    <>
      <Router>
        {
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project-list' element={<Projectlist />} />
            <Route path='/project-details' element={<Details />} />
            <Route path='/team' element={<Team />} />
            <Route path='/testimonial' element={<Testimonial />} />
          </Routes>
        }
      </Router>
    </>
  );
}

export default App;
