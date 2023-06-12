import React, {useState} from 'react';
import UserForm from './UserForm';
import UserItem from './UserItem';
const NewUser = () => {

    const [userData, setUserData] = useState([]);

    const saveUserDataHandler = (enteredUserData) => {
        const newUserData = {
            ...enteredUserData,
            id: Math.random().toString(),

        };
        setUserData((prevUserData) => [...prevUserData, newUserData]);
    };

    return (
        <div>
            <UserForm onSaveUserData = {saveUserDataHandler} />
            {userData.length > 0 && (
        <div>
          <h2>User Details:</h2>
          {userData.map((user) => (
            <UserItem key={user.id} name={user.name} age={user.age} />
          ))}
        </div>
      )}
        </div>
    );

}

export default NewUser;