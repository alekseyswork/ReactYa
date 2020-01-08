import React from 'react';

const UserComponent = ({ id, firstName, lastName, dob }) => {

  return (


    <p>{firstName} {lastName}</p>


  )
}

export default UserComponent;