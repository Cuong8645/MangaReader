import React,{Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

var icon;
export default class SinhVien extends Component{
    render(){
        return (
            <View style={styles.product}>



            <View style={styles.containerImg}>
                <View>
                   
                    <Image style={styles.img} source={{uri: this.props.gioitinh}} />
                   
                    
                </View>
            </View>  



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
      marginTop:-60,
      marginLeft: 100
    },

    img: {
        marginTop: -15,
        width: 60,
        height:70,
      },
      containerImg: {
        marginTop: 35,

        width: 30,
        height: -10,
        marginLeft: 10
      },
  });
  