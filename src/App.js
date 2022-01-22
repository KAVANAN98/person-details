import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PersonData from './components/PersonData';
// import Home from './components/Home';
import MoreDetails from './components/MoreDetails';


function App() {
  return (
    <Router>
      <div>
          <div className="App" className='nav' >
            <Link to={'/persondata'} className='link'>PersonData</Link>
            {/* <Link to={'/home'}           className='link' >   Home  </Link> */}
          </div>
          <div>
            <Route path={'/persondata'} component={PersonData} />
            {/* <Route path={'/home'} component={Home} /> */}
            </div>
      </div>
    </Router>
  );
}

export default App;
