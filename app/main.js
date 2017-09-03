import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';

import reducers from './reducers';
import config from '../config.json';

import ResumeComponent from './components/ResumeComponent';

ReactGA.initialize(config.googleAnalytics, {
  debug: true,
  titleCase: false,
});

window.React = React;

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

browserHistory.listen(location => {
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
      history.replace(path);
   }
 });

const trackIndexPage = () => {
 console.log("trackIndexPage");
 ReactGA.set({ page: '/' });
 ReactGA.pageview('/');
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' onEnter={trackIndexPage} component={ResumeComponent}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
