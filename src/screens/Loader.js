import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = ({fullScreen}) => {
  return (
    <View style={[styles.container, fullScreen && {flex: 1}]}>
      <ActivityIndicator size="large" color="#1565c0" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
