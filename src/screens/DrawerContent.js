import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../components/context';

import AsyncStorage from '@react-native-community/async-storage';

export default function DrawerContent(props) {
  const {signOut} = React.useContext(AuthContext);

  const [data, setData] = React.useState({
    name: '',
    surname: '',
    rol: '',
  });

  useEffect(() => {
    getStorageValue();
  }, []);

  const getStorageValue = async () => {
    let value = 'default';
    let user = {};
    try {
      value = (await AsyncStorage.getItem('user')) || 'default';
      user = JSON.parse(value);
      setData({
        ...data,
        name: user.name,
        surname: user.surname,
        rol: user.nameRol,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>
                  {data.name + ' ' + data.surname}
                </Title>
                <Caption style={styles.caption}>{data.rol}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Inicio"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="documents-outline" color={color} size={size} />
              )}
              label="Órdenes por facturar"
              onPress={() => {
                props.navigation.navigate('OrdersPendingScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="md-document-text-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Facturación"
              onPress={() => {
                props.navigation.navigate('BillingScreen');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-outline" color={color} size={size} />
          )}
          label="Cerrar sesión"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
