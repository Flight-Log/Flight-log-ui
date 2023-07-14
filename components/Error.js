import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Error = ({ errorMessage }) => {

  return (
    <View>
      <Text>Error Component</Text>
      <Text>{ errorMessage }</Text>
    </View>
  )
}

export default Error