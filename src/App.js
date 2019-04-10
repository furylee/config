import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './layouts';

import A from './Home';

class InitRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route path='/a' component={ A } />
            <Redirect to='/a' />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default InitRouter;
