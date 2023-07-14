// import React, {useEffect, useState } from 'react'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import FlightForm from './FlightForm'
import FlightHistoryScreen from './FlightHistoryScreen'
import FlightDetailsScreen from './FlightDetailsScreen'
import ErrorComponent from './Error'
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
      .catch(error => {
        this.setState({ error: 'Could not gather your flights, please try again later!' })
      })
    getUser()
      .then(data => {
        // console.log(data.data.attributes)
        this.setState({ user: data.data })
      })
      .catch(error => {
        this.setState({ error: 'Could not gather your data, please try again later!' })
      })

  }

  addFlight = (newFlight) => {
    console.log(newFlight)
    fetch("https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFlight)
    })
      .then(res => res.json())
      .then(flight => {
        this.setState({ userFlights: [...this.state.userFlights, flight]});
      })
      .catch(error => {
        console.error('Error adding flight:', error);
        this.setState({ error: 'Could not add your flight' });
      });
  }
  render() {
    const { user, userFlights, error } = this.state;

    // const errorComponent = error !== '' ? <ErrorComponent errorMessage={error} /> : null;

    if(error !== '') {
      return <ErrorComponent errorMessage={error} />
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LogFlight" options={{ title: 'Log Flight' }}>
            {(props) => <FlightForm {...props} addFlight={this.addFlight} />}
          </Stack.Screen>
          <Stack.Screen
            name="Flight History"
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

