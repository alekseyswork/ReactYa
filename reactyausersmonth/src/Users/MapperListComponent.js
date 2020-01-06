import React from 'react';
import UserComponent from './UserComponent';


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const MapperListComponent = ({ data }) => {

    const cardComponent = data.map((x, i) => {
        return (
            <div key={i} >
                <div>Mount  {monthNames[x.month]} Count of {x.users.length}</div>
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

    });
    // getCurrentCollor = () => {

    //     switch (key) {
    //         case value:

    //             break;

    //         default:
    //             break;
    //     }

    // }

    return (
        <div>
            {cardComponent}
        </div>
    );
}


export default MapperListComponent;