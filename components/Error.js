import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ErrorComponent = ({ errorMessage }) => {

  return (
    <View style={styles.main}>
      <Text>{ errorMessage }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string.isRequired
}


export default ErrorComponent