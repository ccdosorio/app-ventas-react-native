import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from './screens/DrawerContent';
import Loading from './screens/Loading';

import {AuthContext} from './components/context';
import OrdersPendingScreen from './components/orders/OrdersPendingScreen';
import OrdersPendingDetailScreen from './components/orders/OrdersPendingDetailScreen';
import HomeScreen from './components/home/HomeScreen';
import BillingScreen from './components/billing/BillingScreen';

import RootStackScreen from './screens/RootStackScreen';

import Storage from './libs/storage';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      default:
        break;
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userToken) => {
        const stored = await Storage.store('userToken', userToken);
        if (stored) dispatch({type: 'LOGIN', token: userToken});
      },
      signOut: async () => {
        const removed = await Storage.remove('userToken');
        if (removed) dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.isLoading ? (
          <Loading />
        ) : loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="MainStack" component={MainStack} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1565c0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#1565c0"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="OrdersPendingScreen"
        component={OrdersPendingScreen}
        options={{
          title: 'Órdenes por facturar',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#1565c0"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="OrdersPendingDetailScreen"
        component={OrdersPendingDetailScreen}
        options={{title: 'Detalle de la Orden'}}
      />
      <Stack.Screen
        name="BillingScreen"
        component={BillingScreen}
        options={{
          title: 'Facturación',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#1565c0"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
