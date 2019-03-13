import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountPage from './routes/Count';
import ListPage from './routes/ListPage';
import AdvancedListPage from './routes/AdvancedListPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/count" exact component={CountPage} />
        <Route path="/list" exact component={ListPage} />
        <Route path="/advanced_list" exact component={AdvancedListPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;