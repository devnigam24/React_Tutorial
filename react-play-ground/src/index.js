import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Application from './application';
import Header from './header';
import Footer from './footer';
import store from './store';
import { applicationTimes } from './store/actions';

store.dispatch(applicationTimes({
  name: 'INITIALIZATION_START',
  value: performance.now()
}));

ReactDOM.render(<Header store={store}/>, document.getElementsByTagName('header')[0]);
ReactDOM.render(<Application store={store}/>, document.getElementsByTagName('mainBody')[0]);
ReactDOM.render(<Footer store={store}/>, document.getElementsByTagName('footer')[0]);

store.dispatch(applicationTimes({
  name: 'INITIALIZATION_END',
  value: performance.now()
}));

serviceWorker.unregister();
window.mystore = store;
