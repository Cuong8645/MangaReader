import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View, 
  Image, 
} from 'react-native';

export default class itemManga extends Component{
    constructor(props){
      super(props);
      this.state={}
    }
    render() {
        return (
          <View style={styles.manga}>
            <View style={styles.containerImg}>
              <View>
                <Image style={styles.img} source={{uri: this.props.img}} />
              </View>
            </View>   
            <View style={styles.containerTenMG}>
              <Text style={{fontWeight: 'bold'}}> {this.props.tenMG} </Text>
            </View>
            <View style={styles.containerDesMG}>
              <Text > {this.props.desMG} </Text>
            </View>       
          </View>
        );
      }
}

const styles = StyleSheet.create({
    manga: {
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#DDDDDD',
      width: 300,
      height: 110,
      marginBottom : 10,
      borderRadius: 4,
      borderWidth: 0.5,
    },
    idMG:{
      marginTop: 300,
    },
    img: {
      marginTop: -50,
      width: 70,
      height:90,
    },
    containerImg: {
      width: 100,
      height: 150,
      marginLeft: 10
    },
    containerTenMG: {
      marginTop: -200,
      marginLeft: 90,
    },
    containerDesMG: {
      marginTop:0,
      marginLeft: 90
    },
  });