import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Http from '../../libs/http';
import colors from '../../libs/colors';
import OrdersPendingItem from './OrdersPendingItem';
import OrdersSerarch from './OrdersSearch';
import FilterScreen from '../../screens/FilterScreen';
import OrdersFiter from '../orders/OrdersFilter';

import Loader from '../../screens/Loader';
import Empty from '../../screens/Empty';

class OrdersPendingScreen extends Component {
  state = {
    data: [],
    allData: [],
    number: '',
    isLoading: true,
    isMatch: true,
  };
  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    const res = await Http.get('orders-pending');
    this.setState({data: res, allData: res, isLoading: false});
  };

  getDataFilter = async () => {
    let form = {
      number: this.state.number,
    };
    const res = await Http.post('order', form);
    await this.setState({data: res});
  };

  handleNumberChange = (val) => {
    this.setState({
      number: val,
    });
  };

  handlePress = (order) => {
    this.props.navigation.navigate('OrdersPendingDetailScreen', {order});
  };

  handleSearch = (query) => {
    const {allData, isMatch} = this.state;

    const orderFiltered = allData.filter((order) => {
      let number = order.numero.toString();
      return (
        number.toLowerCase().includes(query.toLowerCase()) ||
        order.cliente.toLowerCase().includes(query.toLowerCase())
      );
    });

    if (orderFiltered.length === 0) {
      this.setState({isMatch: false});
    } else if (orderFiltered.length >= 1) {
      this.setState({isMatch: true});
    }

    this.setState({data: orderFiltered});
  };

  render() {
    let {data, isLoading, isMatch} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Loader fullScreen />
        ) : (
          <>
            {/* <FilterScreen
              children={
                <OrdersFiter
                  onChangeFilter={this.getDataFilter}
                  onChangeNumber={this.handleNumberChange}
                />
              }
            /> */}
            <OrdersSerarch onChange={this.handleSearch} />
            {isMatch === false ? (
              <Empty message="No se encontraron coicidencias..." />
            ) : null}
            <View style={styles.container}>
              <FlatList
                data={data}
                contentContainerStyle={{backgroundColor: '#E5E7E9'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <OrdersPendingItem
                    item={item}
                    onPress={() => this.handlePress(item)}
                  />
                )}
              />
            </View>
          </>
        )}
      </View>
    );
  }
}

export default OrdersPendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    marginTop: 5,
  },
});
