import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from '../components/home/HomeStack';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#1565c0',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
