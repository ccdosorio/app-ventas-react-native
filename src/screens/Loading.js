import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {AuthContext} from '../components/context';

class Loading extends Component {
  static contextType = AuthContext;

  async componentDidMount() {
    setTimeout(async () => {
      try {
        let token = await AsyncStorage.getItem('userToken');
        if (token !== null) {
          this.context.signIn(token);
        } else if (token === null) {
          this.context.signOut();
        }
      } catch (error) {
        console.log(error);
      }
    }, 2500);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
        <ImageBackground
          source={require('../assets/screen.jpeg')}
          style={styles.image}></ImageBackground>
      </View>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
