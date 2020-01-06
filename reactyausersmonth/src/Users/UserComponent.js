import React from 'react';

const UserComponent = ({ id, firstName, lastName, dob }) => {

  return (
    <div className='some'>

      <ul>
        <li>{id}</li>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{dob}</li>
      </ul>
    </div>
  )
}

export default UserComponent;