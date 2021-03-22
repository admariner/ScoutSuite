import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Findings from './pages/Findings';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import ExternalAttack from './pages/ExternalAttack/index';
import FindingItems from './pages/FindingItems/index';
import Layout from './layout/index';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={['/services/:service/findings/:finding/items/:item', '/services/:service/findings/:finding']}>
            <FindingItems />
          </Route>
          <Route path="/services/:service/resources/:resource/:id?">
            <Resources />
          </Route>
          <Route path="/services/:service/findings">
            <Findings />
          </Route>
          <Route path="/services/:service/external-attacks">
            <ExternalAttack />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;