import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// components imported as child so that it can be seen
// import BirdsIndex from './components/birds/BirdsIndex';
// import BirdsShow  from './components/birds/BirdsShow';
// import BirdsRoutes from './components/birds/BirdsRoutes';

import Routes from './components/utility/Routes';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
