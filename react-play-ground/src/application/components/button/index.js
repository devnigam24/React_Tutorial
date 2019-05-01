import React from 'react';
import './styles.css';

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}
