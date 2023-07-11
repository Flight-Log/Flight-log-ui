// import React, {useEffect, useState } from 'react'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import FlightForm from './FlightForm'
import FlightHistoryScreen from './FlightHistoryScreen'
import FlightDetailsScreen from './FlightDetailsScreen'
import { getUser, getUserFlights } from '../ApiCalls'


const Stack = createNativeStackNavigator()

class AppNavigator extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      userFlights: [],
      error: ''
    }
  }

  componentDidMount() {
    getUserFlights()
      .then(data => {
        // console.log(data.data);
        this.setState({ userFlights: data.data })
        // Update component state or perform other operations with the data
      })
    getUser()
      .then(data => {
        // console.log(data.data.attributes)
        this.setState({ user: data.data })
      })

  }
 
  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LogFlight" component={FlightForm} />
          {/* <Stack.Screen name="FlightHistory" component={FlightHistoryScreen} user={this.state.user} userFlights={this.state.userFlights} />
             */}
          <Stack.Screen
            name="FlightHistory"
            component={FlightHistoryScreen}
            initialParams={{
              user: this.state.user,
              userFlights: this.state.userFlights
            }} />
          <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default AppNavigator

