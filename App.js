import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styled.container}>
        <Text style={styled.welcome}>Hello World</Text>
      </View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
