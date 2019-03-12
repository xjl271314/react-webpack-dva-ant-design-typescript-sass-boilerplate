import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountPage from './routes/Count';
import ListPage from './routes/ListPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/count" exact component={CountPage} />
        <Route path="/list" exact component={ListPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;