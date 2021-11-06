import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const FilterScreen = ({children}) => {
  const [isCollapsed, setIsCollapted] = React.useState(true);
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsCollapted(!isCollapsed)}>
        <View />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="filter-alt" color={'#17202A'} size={20} />
          <Text>Filtros</Text>
        </View>
        <Icon
          name={isCollapsed ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
          color={'#17202A'}
          size={28}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} duration={600}>
        <Animatable.View
          duration={600}
          animation={isCollapsed ? 'zoomOut' : 'zoomIn'}
          style={styles.collapsible}>
          {children}
        </Animatable.View>
      </Collapsible>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.8,
    borderColor: '#B2BABB',
  },
  collapsible: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 0.8,
    borderColor: '#B2BABB',
  },
});
