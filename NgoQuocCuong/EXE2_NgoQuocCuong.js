import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View,Button,Alert } from 'react-native';
import SanPham from './SanPham';

var arraySanPham = [
  {masp: 'sp001' , tensp : 'LapTop  '},
  {masp: 'sp002' , tensp : 'Tivi '},
  {masp: 'sp003' , tensp : 'Tủ Lạnh'},
];

export default class Demo extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text>{arraySanPham.map(arraySanPham => arraySanPham.tensp)}</Text>
      </View>  
    );
  }}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
