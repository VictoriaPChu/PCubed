import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Project from './Project.js';
import Recommendations from './Recommendations.js';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/recommendations"></Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/recommendations">
            <Recommendations />
          </Route>
          <Route path="/">
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
      
     
    </div>
  );
}

export default App;
