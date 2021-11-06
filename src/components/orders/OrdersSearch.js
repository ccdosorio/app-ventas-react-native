import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class OrdersSearch extends Component {
  state = {
    query: '',
  };

  handleText = (query) => {
    this.setState({query});

    if (this.props.onChange) {
      this.props.onChange(query);
    }
  };
  render() {
    const {query} = this.state;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleText}
          value={query}
          placeholder="Buscar"
        />
      </View>
    );
  }
}

export default OrdersSearch;

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    paddingLeft: 16,
  },
});
