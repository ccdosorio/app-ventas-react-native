import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import colors from '../../libs/colors';

const OrdersItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.titleText}>
        {item.titular}
      </Text>
      <Text style={styles.textProduct}>{item.producto}</Text>
    </View>
  );
};

export default OrdersItem;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_darken,
    padding: 16,
    marginTop: 10,
    marginRight: 8,
    alignItems: 'center',
    borderRadius: 20,
    maxWidth: width / 2,
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.yellow,
    fontSize: 17,
    flexShrink: 1,
  },
  textProduct: {
    textAlign: 'center',
    color: colors.white,
  },
});
