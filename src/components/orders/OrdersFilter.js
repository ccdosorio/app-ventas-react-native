import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrdersFilter = (props) => {
  return (
    <View>
      <Text style={{paddingLeft: 10}}>Número de orden:</Text>
      <View style={styles.row}>
        <TextInput
          placeholder="Ingresa el número"
          style={styles.textInput}
          onChangeText={(val) => props.onChangeNumber(val)}
        />
        <Button
          icon={<Icon name="search" size={15} color="white" />}
          onPress={() => props.onChangeFilter()}
        />
      </View>
    </View>
  );
};

export default OrdersFilter;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
  },
});
