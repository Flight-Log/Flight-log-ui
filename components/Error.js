import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'

const ErrorComponent = ({ errorMessage }) => {

  return (
    <ImageBackground source={require('../assets/hero-img.png')} style={styles.imageBackground}>
      <View style={styles.main}>
        <Text>{ errorMessage }</Text>
      </View>
    </ImageBackground>
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