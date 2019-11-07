import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

var icon;
export default class Chapter extends Component{
    render(){
        return (
            <View style={styles.itemChap}>


                <View style={styles.containerContent}>
                    <Text style={styles.chap}> Chapter: {this.props.Chapter} </Text>
                </View>       
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemChap: {
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: 'lightgreen',
      width:'100%',
      height: 70,
      marginBottom : 1,
      fontSize: 30
    },
    chap:{
        marginLeft:10,
    },
    containerContent: {
      marginLeft: 10,
      marginTop: -10,
    },
  });