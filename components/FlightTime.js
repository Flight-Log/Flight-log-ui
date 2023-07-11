import React from 'react'
import { View, Text } from 'react-native'

const FlightTime = ({ userFlights }) => {

  

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

  return (
    <View>
      <Text>{userFlights[0].attributes.aircraft}</Text>
      <Text>Flight Time</Text>
      <Text>Total Hours:{getTotalHours()}</Text>
    </View>
  )
}

export default FlightTime