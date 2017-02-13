import React, { Component } from 'react';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { IndexView } from '../views/pages';
import Frame from '../views/layouts/Frame';

export default (
  <Router history={browserHistory}>
    <Route path={'/'} component={Frame}>
      <IndexRedirect to={'/home'} />
      <Route path="home(/:name)" component={IndexView} />
    </Route>
  </Router>
);
