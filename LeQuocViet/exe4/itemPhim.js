import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View, 
  Image, TouchableHighlight,Alert
} from 'react-native';

export default class itemPhim extends Component{
    constructor(props){
      super(props);
      this.state={}
    }

    getDetail(){
      //this.props.navigation.navigate('Detail');
      Alert.alert(this.props.tenphim, this.props.mota);
      
    }
    render() {
        return (


 





          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.getDetail()}>
                  
                

            <View style={styles.phim}>  
              


              <View style={styles.containerImg}>
                <View>
                  <Image style={styles.img} source={{uri: this.props.img}} />
                </View>
              </View>   
              <View style={styles.containerContent}>
                <Text> Tên phim : {this.props.tenphim} </Text>
                <Text> Thể loại : {this.props.theloai} </Text>
                <Text> Ngày khởi chiếu : {this.props.ngayKC} </Text>
                <Text> giá : {this.props.gia} </Text>
              </View>       
            </View>
          </TouchableHighlight>
        );
      }
}

const styles = StyleSheet.create({
    phim: {
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#e69d9d',
      borderColor: 'green',
      width: 370,
      height: 110,
      marginBottom : 10,
      borderRadius: 10,
    },
  
    img: {
      marginTop: -15,
      width: 80,
      height:100,
    },
    containerImg: {
      width: 100,
      height: 150,
      marginLeft: 10
    },
  
    containerContent: {
      marginTop:-150,
      marginLeft: 100
    },
  });