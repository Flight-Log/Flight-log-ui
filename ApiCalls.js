const getUserFlights = () => {
  return fetch('https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch user flights. Please try again later.');
      }
      return response.json();
    });
};

export default getUserFlights