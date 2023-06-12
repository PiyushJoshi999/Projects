// import React, {useState} from 'react';
// import './UserForm.css';
// const UserForm = (props) => {

//     const [enteredName, setEnteredName] = useState('');
//     const [enteredAge, setEnteredAge] = useState('');

//     const userNameHandler = (event) => {
//         setEnteredName(event.target.value);
//     }

//     const ageHandler = (event) => {
//         setEnteredAge(event.target.value);
//     }

//     const submitHandler = (event) => {
//         event.preventDefault();

//         if (enteredName.trim() === '') {
//             alert('Fill user name');
//             return; // Stop form submission if name is not filled
//           }

//           const age = +enteredAge; // Convert age to a number

//           if (isNaN(age) || age < 1 || age > 110) {
//             alert('Invalid age');
//             return; // Stop form submission if age is invalid
//           }
        

//         const userData = {
//             name : enteredName,
//             age : age
//         };

//         props.onSaveUserData(userData);

//         setEnteredName('');
//         setEnteredAge('');
//     }

//     return (
//         <form onSubmit={submitHandler}>
//              <div className='my-form'>
//                 <div className='my-form__username'>
//                     <label >User Name</label>
//                     <input type = 'text' value = {enteredName} onChange={userNameHandler}></input>
//                 </div>
//                 <div className='my-form__age'>
//                     <label >Age</label>
//                     <input type = 'number' min = "1" max = "100" value = {enteredAge} onChange = {ageHandler}></input>
//                 </div>
//                 <div className='my-form__action'>
//                     <button type = "submit">Add User</button>
//                 </div>
//             </div>
//         </form>
//     );

// }

// export default UserForm;



import React, { useState, useRef } from 'react';
import './UserForm.css';

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [collegeError, setCollegeError] = useState('');
  const collegeRef = useRef();

  const userNameHandler = (event) => {
    setEnteredName(event.target.value);
    setNameError('');
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
    setAgeError('');
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const collegeName = collegeRef.current.value;

    let valid = true;

    if (enteredName.trim() === '') {
      setNameError('Please enter a name');
      valid = false;
    }
    if (collegeName.trim() === '') {
        setCollegeError('Please enter your college name');
        valid = false;
      }

    const age = +enteredAge;

    if (isNaN(age) || age < 1 || age > 110) {
      setAgeError('Please enter a valid age (1 to 110)');
      valid = false;
    }

    if (valid) {
      const userData = {
        name: enteredName,
        age: age,
      };

      props.onSaveUserData(userData);

      setEnteredName('');
      setEnteredAge('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='my-form'>
        <div className='my-form__username'>
          <label>User Name</label>
          <input
            type='text'
            value={enteredName}
            onChange={userNameHandler}
          ></input>
          {nameError && <p className='error'>{nameError}</p>}
        </div>
        <div className='my-form__age'>
          <label>Age</label>
          <input
            type='number'
            min='1'
            max='110'
            value={enteredAge}
            onChange={ageHandler}
          ></input>
          {ageError && <p className='error'>{ageError}</p>}
        </div>
        <div className='my-form__usercollege'>
          <label>College Name</label>
          <input
            type='text'
            ref = {collegeRef}
          ></input>
          {collegeError && <p className='error'>{collegeError}</p>}
        </div>
        <div className='my-form__action'>
          <button type='submit'>Add User</button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
