import React, {useEffect, useState } from 'react'
// import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import LogFlightScreen from './LogFlightScreen'
import FlightHistoryScreen from './FlightHistoryScreen'
import FlightDetailsScreen from './FlightDetailsScreen'
import {getUser, getUserFlights } from '../ApiCalls'

const Stack = createNativeStackNavigator()

function AppNavigator() {
  const [userData, setUserData] = useState(null)
  const [userFlightsData, setUserFlightsData] = useState(null)


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogFlight" component={LogFlightScreen} />
        <Stack.Screen name="FlightHistory" component={FlightHistoryScreen} />
        <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

