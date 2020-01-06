import React from 'react';
import UserComponent from './UserComponent';

const UserListComponent = ({ users }) => {
    const cardComponent = users.map((user, i) => {
        return (
            <UserComponent
                key={i}
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                dob={user.dob}
            />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default UserListComponent;