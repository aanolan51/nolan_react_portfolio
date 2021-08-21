import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contactform from './components/Contactform';


function App() {
  return (
    <div>
      
      <div>
        <Router>
        <Navbar />
        
          <Switch>
            <Route exact path ="/nolan_react_portfolio">
              <About />
            </Route>
            <Route exact path = "/projects">
              <Projects />
            </Route>
            <Route exact path = "/contact">
              <Contactform/>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;
