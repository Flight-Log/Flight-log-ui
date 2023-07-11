import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import FlightTime from './FlightTime'

const FlightHistoryScreen = ({ route }) => {
  useEffect(() => {
    const { userFlights, user } = route.params;

    // Now you can use the userFlights and user in your FlightHistoryScreen component

    // Perform any necessary operations with the props

    // console.log(userFlights)
  
  }, []);

  const getTotalHours = () => {
    let flights = userFlights.reduce((acc, cur) => {

      let time = parseInt(cur.attributes.day_hours) + parseInt(cur.attributes.night_hours)
      
      return acc + time
    }, 0)
    return flights
  }

  const getDayHours = () => {
    let flights = userFlights.reduce((acc, cur) => {

      let time = parseInt(cur.attributes.day_hours)
      
      return acc + time
    }, 0)
    return flights
  }

  const getNightHours = () => {
    let flights = userFlights.reduce((acc, cur) => {

      let time = parseInt(cur.attributes.night_hours)
      
      return acc + time
    }, 0)
    return flights
  }

  const {userFlights} = route.params

  return (
    <View>
      <Text>Total Hours: {getTotalHours()}</Text>
      <Text>Day Hours: {getDayHours()}</Text>
      <Text>Night Hours:{getNightHours()}</Text>
    </View>
  );
};

export default FlightHistoryScreen
