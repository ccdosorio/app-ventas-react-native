import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';

const OrdersPendingItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={[styles.listItem, styles.itemShadow]}>
        <View style={styles.row}>
          <Text style={styles.numberText}>{item.numero}</Text>
          <Text>{item.cliente}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('ID: ' + JSON.stringify(item))}>
          <Icon reverse name="create" type="ionicon" color="#1565c0" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default OrdersPendingItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECF0F1',
  },
  listItem: {
    margin: 5,
    padding: 25,
    backgroundColor: '#FFF',
    width: '98%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 8,
  },
  button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    alignItems: 'flex-start',
    flex: 1,
  },
  numberText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
