import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';


function getHeader() {
  return React.createElement(
    'div', {
      className: 'App-header'
    }, React.createElement(
      'img', {
        className: 'App-logo',
        src: logo,
        alt: 'logo'
      }
    )
  )
}

function getFooter() {
  return React.createElement(
    'div', {
      className: 'App-footer'
    },
    React.createElement('h5', null, 'you logged in at ' + new Date().toLocaleTimeString())
  )
}


class App extends Component {
  render() {
    return (
      React.createElement(
        'div', {
          className: 'App'
        },
        getHeader(),
        React.createElement(
          'p', {
            className: 'App-intro'
          },
          'Get started'
        ),
        getFooter()
      )
    );
  }
}

export default App;
