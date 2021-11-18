// import React, { Component } from 'react';

// class CreateUser extends Component {
//     const loginUserToDB = userCredentials => dispatch => {
//         const config = {
//           method: ‘POST’,
//           headers: {
//             ‘Content-Type’: ‘application/json’
//           }
//           body: JSON.stringify(userCredentials)
//         };
//         fetch(‘http://localhost:3001/login’, config)
//           .then(r => r.json())
//           .then(data => {
//             if (data.base) {
//               dispatch(setUserAction(data))
//             }
//             else {
//               localStorage.setItem(‘token’, data.token);
//               localStorage.setItem(‘user_id’, data.user.id);
//               dispatch(setUserAction(data.user));
//             }
//           })
//           .catch(error => console.log(‘error’, error))
//       };

//   render() {
//     return(
//       <div>
//         <form>
//             <input type="text" placeholder="username" />
//             <input type="submit" />
//         </form>
//       </div>
//     )
//   }
// }

// export default CreateUser;
