import React,{Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

var icon;
export default class SanPham extends Component{
    render(){
        return (
            <View style={styles.product}>
                <View style={styles.containerContent}>
                    <Text> Họ và tên : {this.props.name} </Text>
                    <Text> Số điện thoại : {this.props.phone} </Text>
                </View>       
            </View>
        );
    }
}

const styles = StyleSheet.create({
    product: {
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: 'lightgreen',
      width: 410,
      height: 70,
      marginBottom : 10
    },
  
    containerContent: {
      marginTop:-20,
      marginLeft: 20
    },
  });
  