import React from 'react';
import './styles.css';

export default (props => {
  return (
    <div className="details">
      <label>{props.userName}</label>
    </div>
  );
});