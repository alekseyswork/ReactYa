import React from 'react';
import UserComponent from './UserComponent';


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let getCurrentCollor = (key) => {
    if (0 < key && key <= 2) {
        return "gray";
    } else if (2 < key && key <= 6) {
        return "blue";
    } else if (6 < key && key <= 10) {
        return "green";
    } else {
        return "red";
    }

}
const MapperListComponent = ({ data }) => {

    const cardComponent = data.map((x, i) => {
        return (
            <div key={i} >
                <div className="tooltip" style={{ backgroundColor: getCurrentCollor(x.users.length) }} > Mount  {monthNames[x.month]} Count of {x.users.length}
                    <span className="tooltiptext">
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
                    </span>
                </div>
            </div>
        )

    });


    return (
        <div>
            {cardComponent}
        </div>
    );
}


export default MapperListComponent;