const getUserFlights = () => {
  return fetch('https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch user flights. Please try again later.');
      }
      return response.json();
    });
};

const getUser = () => {
  return fetch('https://fa654a41-d040-4528-99c2-4e7b349236b9.mock.pstmn.io/users/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch user flights. Please try again later.');
      }
      return response.json();
    });
};



// const getUserFlights = async () => {
//   const response = await fetch('https://fa654a41-d040-4528-99c2-4e7b349236b9.mock.pstmn.io/user/1/flights')
//   if (!response.ok) {
//     throw new Error()
//   }
//   return await response.json()
// }

// const getUser = async () => {
//   fetch('https://fa654a41-d040-4528-99c2-4e7b349236b9.mock.pstmn.io/users/1')
//   .then(response => {

//     if (!response.ok) {
//       throw new Error()
//     }
//     return response.json()
//   })
// }



export { getUser, getUserFlights }