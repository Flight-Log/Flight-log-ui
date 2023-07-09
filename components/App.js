import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import LogFlightScreen from './LogFlightScreen'
import AllFlightsScreen from './AllFlightsScreen'
import FlightDetailsScren from './FlightDetailsScreens'

const Stack = createNativeStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogFlight" component={LogFlightScreen} />
        <Stack.Screen name="FlightHistory" component={AllFlightsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

