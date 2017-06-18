import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Store from './Store';
import Layout from './Layout';
import TodoContainer from './Posts/Todo-Container';
import PostContainer from './Posts/Post-Container';
const App = (
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={TodoContainer} />
        <Route path='/posts' component={TodoContainer}></Route>
        <Route path='/posts/:id' component={PostContainer}></Route>
      </Route>
    </Router>
  </Provider>
);
render(App, document.getElementById('app'));
