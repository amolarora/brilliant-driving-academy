import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import BookNowPage from './pages/BookNow';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';


const App = () => {
  return (
    <Router> 
      <Nav />
      
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/book-now">
          <BookNowPage />
        </Route>
        <Route exact path="/about-us">
          <AboutUsPage />
        </Route>
        <Route exact path="/contact-us">
          <ContactUsPage />
        </Route>
      </Switch>

      <Footer />

    </Router> 
  );
}

export default App;