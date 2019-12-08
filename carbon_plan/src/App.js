import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Project from './Project.js';
import Recommendations from './Recommendations.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }


  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
        datasets:[
          {
            label:'Real-Time Carbon Emissions',
            data:[
              6174,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
			borderColor:'#00F',
            backgroundColor:[
              'rgba(255, 206, 86, 0.6)',
			],
			fill:false
		  },
		  {
            label:'Prospected Carbon Emissions',
            data:[
              7594,
              1245,
              133060,
              146519,
              155162,
              96072
			],
			borderColor:'#0F0F',
            backgroundColor:[
              'rgba(2, 99, 132, 0.6)'
			],
			fill:false
          },
		  {
            label:'Carbon Emission caps',
            data:[
			  160000,
			  160000,
			  160000,
			  160000,
			  160000,
			  160000              
            ],
			borderColor:'#F00F',
			backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
			],
			fill:false
          }
        ]
      }
    });
  }

  render() {
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
          <Route path="/chart">
            <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    );
}

export default App;