import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Application from './application';
import Header from './header';
import Footer from './footer';

ReactDOM.render(<Header />, document.getElementsByTagName('header')[0]);
ReactDOM.render(<Application />, document.getElementsByTagName('mainBody')[0]);
ReactDOM.render(<Footer />, document.getElementsByTagName('footer')[0]);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
