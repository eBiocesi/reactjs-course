import React from 'react';
import World from '../pages/World';
import Home from '../pages/Home';
import Layout from '../components/containers/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/world">
            <World />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Navigation;
