import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import OrdersItem from './OrdersItem';

import Http from '../../libs/http';
import colors from '../../libs/colors';

import Empty from '../../screens/Empty';
import Loader from '../../screens/Loader';

import moment from 'moment';

class OrdersPendingDetailScreen extends Component {
  state = {
    order: {},
    orderDetail: [],
    isDetails: true,
    isLoading: true,
  };
  async componentDidMount() {
    const {order} = this.props.route.params;
    this.props.navigation.setOptions({title: order.numero});
    await this.setState({order});
    await this.getOrderDetail();
  }

  getOrderDetail = async () => {
    let form = {
      idorden: this.state.order.ad_order_id,
    };
    const res = await Http.post('order-detail', form);
    if (res.length === 0) await this.setState({isDetails: false});

    await this.setState({orderDetail: res, isLoading: false});
  };
  render() {
    const {order, orderDetail, isDetails, isLoading} = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.info, styles.itemShadow]}>
          <Text style={styles.textInvoice}>{order.cliente}</Text>
          <View style={styles.row}>
            <Text style={styles.titles}>Número de orden:</Text>
            <Text>{order.numero}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titles}>Fecha de Orden:</Text>
            <Text>
              {moment(order.fechaOrden, 'DD/MM/YYYY').format('DD/MM/YYYY')}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titles}>Nit:</Text>
            <Text>{order.nit}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titles}>Ejecutivo:</Text>
            <Text>{order.ejecutivo}</Text>
          </View>
        </View>
        <View style={styles.boxDetail}>
          <Text style={styles.textDetail}>Detalle de Orden</Text>
        </View>
        {isLoading && <Loader />}
        {isDetails ? (
          <FlatList
            style={styles.list}
            horizontal={true}
            data={orderDetail}
            keyExtractor={(item) => item.ad_order_detail_id.toString()}
            renderItem={({item}) => <OrdersItem item={item} />}
          />
        ) : (
          <Empty message="La orden no cuenta con detalles ❌" />
        )}
      </View>
    );
  }
}

export default OrdersPendingDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F4',
    flex: 1,
  },
  header: {
    margin: 10,
    padding: 40,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  textInvoice: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
    flexShrink: 1,
    marginBottom: 10,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  info: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    margin: 10,
    padding: 50,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  boxDetail: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textDetail: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  flatList: {
    backgroundColor: colors.white,
    margin: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  list: {
    maxHeight: 150,
    paddingLeft: 16,
  },
  itemShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  titles: {
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
