import React from 'react';
import { Provider } from 'react-redux';
import DashBoard from './components/dashboard';

export default class Application extends React.Component {
  render() {
    const { props: { store } } = this;
    return (
      <div className="Application">
        <Provider store={store}>
          <DashBoard/>
        </Provider>
      </div>
    );
  }
};
