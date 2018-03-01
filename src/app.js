import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// components imported as child so that it can be seen
import BirdsIndex from './components/birds/BirdsIndex';
import BirdsShow  from './components/birds/BirdsShow';
import BirdsRoutes from './components/birds/BirdsRoutes';

import Navbar from './components/utility/Navbar';
import Routes from './components/utility/Routes';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/">Tweetie Spy</Link></h1>
            {/* <Navbar /> */}
            <Navbar />
            <hr />
            <i className="fa fa-cutlery" aria-hidden="true"></i>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={BirdsIndex} />
              <Route path="/birds/:id" component={BirdsShow} />
            </Switch>
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
