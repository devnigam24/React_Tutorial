import React from 'react';
import './styles.css';

import UserPicture from '../user-picture';
import UserDetail from '../user-detail';

export default (props => {
  return(
    <div className='user-card'>
      <div className='left-menu'>
        <div className='picture-card'>
          <UserPicture {...props}/>
          <UserDetail {...props} />
        </div>
        <div className='left-menu-card'></div>
      </div>
      <div className='card-area'></div>
    </div>
  );
});