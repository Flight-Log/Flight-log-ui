import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';



class FlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      night_hours: '',
      day_hours: '',
      aircraft: '',
      description: '',
      date: '',
      start_location: '',
      end_location: '',
      role: ''
    };
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newFlight = {
      id: Date.now(),
      ...this.state
    };
    this.props.addFlight(newFlight);

  };

  render() {
    return (

      <ImageBackground source={require('../assets/hero-img.png')} style={styles.imageBackground}>
        <View style={styles.container}>
          <Text style={styles.label}>Log a Flight</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Night Hours"
              placeholderTextColor="gray"
              value={this.state.night_hours}
              onChangeText={(text) => this.handleChange('night_hours', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Day hours"
              placeholderTextColor="gray"
              value={this.state.day_hours}
              onChangeText={(text) => this.handleChange('day_hours', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Aircraft"
              placeholderTextColor="gray"
              value={this.state.aircraft}
              onChangeText={(text) => this.handleChange('aircraft', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="gray"
              value={this.state.description}
              onChangeText={(text) => this.handleChange('description', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              placeholderTextColor="gray"
              value={this.state.date}
              onChangeText={(text) => this.handleChange('date', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Start location"
              placeholderTextColor="gray"
              value={this.state.start_location}
              onChangeText={(text) => this.handleChange('start_location', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="End location"
              placeholderTextColor="gray"
              value={this.state.end_location}
              onChangeText={(text) => this.handleChange('end_location', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Role"
              placeholderTextColor="gray"
              value={this.state.role}
              onChangeText={(text) => this.handleChange('role', text)}
            />

            <TouchableOpacity style={styles.submitButton} onPress={event => this.handleSubmit(event)}>
              <Text style={styles.submitText}>Log Flight</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  imageBackground: {
    flex: 1
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D275F'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },

  submitButton: {
    height: 50,
    width: 250,
    backgroundColor: '#1f4f99',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 8,
  },
  submitText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlightForm
