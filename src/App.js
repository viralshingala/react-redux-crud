import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';
import {
  CarsIndex,
  CarsEdit,
} from './containers/index';

require('./app.scss');

const history = syncHistoryWithStore(hashHistory, store);

let App = ({children}) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/cars">
            <NavItem>Cars</NavItem>
          </IndexLinkContainer>
        </Nav>
      </Navbar>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>        
        <Route path="/" component={App}>
          <IndexRoute component={CarsIndex} />
          <Route path="/cars" component={CarsIndex} />
          <Route path="/cars/new" component={CarsEdit} />
          <Route path="/cars/:carId" component={CarsEdit} />
        </Route>
      </Router>
    </Provider>
  )
}
