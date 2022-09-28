import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav.js';
import HomePage from './pages/Home.js';
//import ResultsPage from './components/ResultsPage.tsx';

const App = () => {
  return (
    <Router> 
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>

    </Router> 
  );
}

export default App;