import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Empty = ({fullScreen, message}) => {
  return (
    <View style={[styles.container, fullScreen && {flex: 1}]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});
