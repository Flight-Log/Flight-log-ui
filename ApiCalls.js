
const getUserFlights = async () => {
  const response = await fetch('https://fa654a41-d040-4528-99c2-4e7b349236b9.mock.pstmn.io/user1/flights')
  if (!response.ok) {
    throw new Error()
  }
  return await response.json()
}



const getUser = async () => {
  const response = await fetch('https://fa654a41-d040-4528-99c2-4e7b349236b9.mock.pstmn.io/user1')
  if (!response.ok) {
    throw new Error()
  }
  return await response.json()
}

export default { getUser, getUserFlights } 