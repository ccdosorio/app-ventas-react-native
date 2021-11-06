import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import CheckBox from '@react-native-community/checkbox';

import colors from '../../libs/colors';

class BillingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressSteps>
          <ProgressStep
            nextBtnText="Siguiente"
            previousBtnText="Anterior"
            label="Primer paso">
            <View style={styles.formCustomer}>
              <Text style={styles.text_title}>Empresa</Text>
              <View style={styles.action}>
                <TextInput style={styles.textInput} placeholder="Escribe..." />
              </View>
              <Text style={[styles.text_title, {marginTop: 35}]}>
                Tipo de Factura
              </Text>
              <View style={styles.action}>
                <TextInput style={styles.textInput} placeholder="Escribe..." />
              </View>
              <Text style={[styles.text_title, {marginTop: 35}]}>Moneda</Text>
              <View style={styles.action}>
                <TextInput style={styles.textInput} placeholder="Escribe..." />
              </View>
              <Text style={[styles.text_title, {marginTop: 35}]}>
                Código del cliente
              </Text>
              <View style={styles.action}>
                <TextInput style={styles.textInput} placeholder="Escribe..." />
              </View>
              <View style={styles.row}>
                <Text style={styles.text_title}>Factura de publicidad</Text>
                <CheckBox
                  disabled={false}
                  // value={toggleCheckBox}
                  // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnText="Siguiente"
            previousBtnText="Anterior"
            label="Segundo paso">
            <View style={{alignItems: 'center'}}>
              <Text>Formulario 2</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnText="Siguiente"
            previousBtnText="Anterior"
            finishBtnText="Guardar"
            label="Tercer paso">
            <View style={{alignItems: 'center'}}>
              <Text>Formulario 3</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default BillingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  formCustomer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  text_title: {
    color: '#05375a',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
});
