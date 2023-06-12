import React from 'react';

const UserItem = ({name, age}) => {
    return (
        <div className="user-item">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
}

export default UserItem;

