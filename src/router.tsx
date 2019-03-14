import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountPage from './routes/Count';
import ListPage from './routes/ListPage';
import CountReducerPage from './routes/CountReducerPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/count" exact component={CountPage} />
        <Route path="/list" exact component={ListPage} />
        <Route path="/count_reducer" exact component={CountReducerPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;