import React, {
  Component
} from 'react';
import logo from './../images/icons/logo.svg';
import './../css/App.css';

function renderLogoutButton() {
  return React.createElement(
    'button', {
      className: 'waves-effect waves-light btn',
      onClick: clickMe
    }, 'Logout'
  );
}

function clickMe(data) {
  console.log('clicked');
  console.log(data);
}

class Header extends Component {
  render() {
    return (
      React.createElement(
        'div', {
          className: 'App-header'
        }, React.createElement(
          'img', {
            className: 'App-logo',
            src: logo,
            alt: 'logo'
          }
        ),
        renderLogoutButton()
      )
    );
  }
}

export default Header;
