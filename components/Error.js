import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ErrorComponent = ({ errorMessage }) => {

  return (
    <View style={styles.main}>
      <Text>{ errorMessage }</Text>
      <Text>Error Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  }
})


export default ErrorComponent