import React from 'react';
import './styles.css';

export default (props => {
  return (
    <div className="picture">
      <img width='50' height='50' src={props.src} alt={props.userName} />
    </div>
  );
});