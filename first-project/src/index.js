import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store/index";
import { BrowserRouter as Router, Route } from 'react-router-dom'


import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
     <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();