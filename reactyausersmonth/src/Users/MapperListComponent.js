import React from 'react';
import UserComponent from './UserComponent';

const MapperListComponent = ({ data }) => {

    const cardComponent = data.map((x, i) => {
        return (
            <div key={i}>
                <div>Mount  {x.month} Count of {x.users.length}</div>
                {x.users.map((user, y) => {
                    return (
                        < UserComponent
                            key={y}
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            dob={user.dob}
                        />
                    )
                })}
            </div>
        )

    })


    return (
        <div>
            {cardComponent}
        </div>
    );
}


export default MapperListComponent;