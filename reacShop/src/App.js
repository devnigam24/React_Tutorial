import React, {
  Component
} from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
