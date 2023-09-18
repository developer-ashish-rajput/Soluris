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
// import Header from './component/header/Header';
import Contact from './component/contact/Contact';
import Header1 from './component/header/Header1';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const url = `${process.env.REACT_APP_API_URL}/graphql`

console.log(process.env.NODE_ENV, process.env.REACT_APP_API_URL);

const client = new ApolloClient({
  uri:url,
   cache:new InMemoryCache(),
})

function App() {
  return (
    <>
      <Router>
        <ApolloProvider client={client}>
        {/* <Header /> */}
        <Header1 />
        {
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/service-list' element={<ServiceList />} />
            <Route path='/service-details' element={<ServiceDetails />} />
            <Route path='/project-list' element={<Projectlist />} />
            <Route path='/project-details/:id' element={<Details />} />
            <Route path='/team' element={<Team />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        }
        <Footer />
        </ApolloProvider>
      </Router>
    </>
  );
}

export default App;
