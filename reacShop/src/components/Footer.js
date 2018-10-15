import React, {
  Component
} from 'react';
import './../css/App.css';

class Footer extends Component {
  render() {
    return React.createElement(
      'div', {
        className: 'App-footer'
      },
      React.createElement('h5', null, 'you logged in at ' + new Date().toLocaleTimeString())
    );
  }
}

export default Footer;
