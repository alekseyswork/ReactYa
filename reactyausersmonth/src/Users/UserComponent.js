import React from 'react';

const UserComponent = ({ id, firstName, lastName, dob }) => {

  return (
    <div className='some'>

      <div>
        <h2>{id}</h2>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{dob}</p>
      </div>
    </div>
  )
}

export default UserComponent;