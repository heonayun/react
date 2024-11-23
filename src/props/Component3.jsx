import React from 'react';

const Component3 = ({users}) => {
    // const {users} = props;
    const {name, age, phone, address} = users;

    return (
        <ul>
            <li>{name}</li> 
            <li>{age} </li> 
            <li>{phone} </li> 
            <li>{address}</li> 
        </ul>
    );
};

export default Component3;