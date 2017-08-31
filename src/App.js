import React, {
  Component
} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function getAppIntroDiv(){
  return React.createElement(
    'p', {
      className: 'App-intro'
    },
    'Get started'
  )
}


class App extends Component {
  render() {
    return (
      React.createElement(
        'div', {
          className: 'App'
        },
        <Header />,
        getAppIntroDiv(),
        <Footer />
      )
    );
  }
}

export default App;
